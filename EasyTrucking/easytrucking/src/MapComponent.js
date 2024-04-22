import React, { useEffect, useRef, useState } from 'react';
import TrimbleMaps from '@trimblemaps/trimblemaps-js';
import SingleSearch from '@trimblemaps/trimblemaps-singlesearch';
import { useNavigate } from 'react-router-dom';
import './MapComponent.css'


const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const apiKey = "A1EFAB5AB220174296EBCCE204BD1744";
  const [destination, setDestination] = useState(null);
  const [totalDistance, setTotalDistance] = useState(null);

  const navigate = useNavigate();
// Assuming this is your data structure
  
const handleBackToTruckConnect = () => {
  if (totalDistance != null) { // Make sure totalDistance is not null
    navigate('/truckconnect', { state: { totalMiles: totalDistance } });
  } else if(totalDistance == null){
    navigate('/truckconnect', { state: { totalMiles: totalDistance} });
  }else {
    // Handle the case where totalDistance has not been set yet
    console.log("Total distance is not available.");
    // Possibly navigate with an error state or show an error message
  }
};

  useEffect(() => {
    TrimbleMaps.APIKey = apiKey;

    const mapInstance = new TrimbleMaps.Map({
      container: mapContainerRef.current,
      zoom: 12.5,
      center: new TrimbleMaps.LngLat(-89.4012875, 43.0768031) // Default center
    });

    setMap(mapInstance);

    // Setup geolocation after map is initialized but before it's loaded
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const coords = {
          Lon: position.coords.longitude,
          Lat: position.coords.latitude
        };
        setUserLocation(coords);
        console.log(coords)
        console.log(userLocation)
        // Now, set map center to user's location
        mapInstance.on('load', () => {
          mapInstance.setCenter(new TrimbleMaps.LngLat(coords.Lon, coords.Lat));
        });
      }, () => {
        console.error("Geolocation is not supported by this browser.");
      });
    }

    mapInstance.on('load', () => {
      const ctrl = new SingleSearch({
          placeholderText: "Search here",
          doneTypingInterval: 700,
          hideResults: true,
          locationRelevance: "mapCenter",
          searchOption: {
            region: TrimbleMaps.Common.Region.WW,
            maxResults: 30
          },
          markerStyle: {},
          markerConfig: {},
          popupConfig: {}
      });

      mapInstance.addControl(ctrl, "top-left");

      ctrl.on("locationselected", (evt) => {
        const coords = {
          Lat: 43.0768086,
          Lon: -89.4012893
        };
        console.log(coords)
        if (coords) {
          console.log("test1")
          updateRoute(coords, evt.location.Coords);
          console.log(coords)
          console.log(evt.location.Coords)
          fetchCalcMilesReport(coords, evt.location.Coords); // Add this line
        }
        const selectedCoords = evt.location.Coords;
        setDestination({ Lon: selectedCoords.Lon, Lat: selectedCoords.Lat });
      });
    });

    

    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, [apiKey]);


  const updateRoute = (startCoords, endCoords) => {
    if (startCoords && endCoords && map) {
      // Define a new route here
      const newRoute = new TrimbleMaps.Route({
        routeId: "userRoute",
        stops: [
          new TrimbleMaps.LngLat(startCoords.Lon, startCoords.Lat),
          new TrimbleMaps.LngLat(endCoords.Lon, endCoords.Lat)
        ],
        showArrows: true
      });

      newRoute.on("routeloading", () => console.log("loading route"));
      newRoute.addTo(map);
    }
  };
  

  const fetchCalcMilesReport = async (startCoords, endCoords) => {
    console.log("hey")
    // Create the stops parameter as a string with coordinates joined by semicolons
    const stops = `${startCoords.Lon},${startCoords.Lat};${endCoords.Lon},${endCoords.Lat}`;
    const reports = "CalcMiles"
    console.log(stops)
    const url = `https://pcmiler.alk.com/apis/rest/v1.0/Service.svc/route/routeReports`;
    const params = new URLSearchParams({
      authToken: apiKey,
      stops,
      reports,
      // Add any other parameters here as needed
    });

    const temp2 = `https://pcmiler.alk.com/apis/rest/v1.0/Service.svc/route/routeReports?authToken=A1EFAB5AB220174296EBCCE204BD1744&stops=${encodeURIComponent(stops)}&reports=CalcMiles`;
    console.log(temp2)
    try {
      const response = await fetch(`${temp2}`, {
        method: 'GET',
        headers: {
        },
      });

      console.log(response)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const resp = await response.json();

      // Assume the total distance is available in data.distance; adjust as necessary.
      setTotalDistance(resp[0].TMiles); // The API response is an array; access the first element
      console.log(resp[0].TMiles)
    } catch (error) {
      console.error('There was an error fetching the CalcMiles report:', error);
      setTotalDistance(null); // Reset or handle error state as appropriate.
    }
  };

  useEffect(() => {
    // This useEffect ensures that updateRoute is called with the latest userLocation and destination
    // It is especially useful when the location is obtained after the map has loaded
    if (userLocation && destination && map) {
      updateRoute(userLocation, destination);
    }
  }, [userLocation, destination, map]);

  const kmsDistance = totalDistance ? (totalDistance * 1.60934).toFixed(2) : null;
return (
  <div>
    <div ref={mapContainerRef} className="map-container" />
    {kmsDistance && (
      <div className="total-distance-but">
        Total Distance: {kmsDistance} km
      </div>
    )}
    <button onClick={handleBackToTruckConnect} class = "total-distance">Go Back to Truck Connect</button>
  </div>
);
};

export default MapComponent;
import React, { useEffect, useRef, useState } from 'react';
import TrimbleMaps from '@trimblemaps/trimblemaps-js';
import SingleSearch from '@trimblemaps/trimblemaps-singlesearch';

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const apiKey = "A1EFAB5AB220174296EBCCE204BD1744";
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    TrimbleMaps.APIKey = apiKey;

    const mapInstance = new TrimbleMaps.Map({
      container: mapContainerRef.current,
      zoom: 12.5,
      center: new TrimbleMaps.LngLat(-77.01866, 38.888) // Default center
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
        if (userLocation) {
          updateRoute(userLocation, evt.location.Coords);
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
        ]
      });

      newRoute.on("routeloading", () => console.log("loading route"));
      newRoute.on("route", () => {
        console.log("route complete");
        map.fitBounds(newRoute.getBounds(), { padding: 50 });
      });

      newRoute.addTo(map);
    }
  };

  useEffect(() => {
    // This useEffect ensures that updateRoute is called with the latest userLocation
    // It is especially useful when the location is obtained after the map has loaded
    if (userLocation && destination && map) {
        updateRoute(userLocation, destination);
      }
    }, [userLocation, destination, map]);

  return <div ref={mapContainerRef} className="map-container" />;
};

export default MapComponent;

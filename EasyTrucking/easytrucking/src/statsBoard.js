// import React from 'react';
// import './statsBoard.css'; // Ensure you have the corresponding CSS file
// import { useState, useEffect } from 'react';
// import Chart from 'chart.js/auto'; // Import Chart.js

// const StatsBoard = () => {
//   const [showChartModal, setShowChartModal] = useState(false);

//   const handleViewChart = () => {
//     setShowChartModal(true);
//   };

//   useEffect(() => {
//     if (showChartModal) {
//       drawChart();
//     }
//   }, [showChartModal]);

//   const drawChart = () => {
//     const ctx = document.getElementById('performanceChart').getContext('2d');
//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: ['Metric A', 'Metric B', 'Metric C'],
//         datasets: [{
//           label: 'Performance',
//           data: [80, 75, 90], // Basic mock data
//           backgroundColor: 'rgba(54, 162, 235, 0.2)',
//           borderColor: 'rgba(54, 162, 235, 1)',
//           borderWidth: 1
//         }]
//       }
//     });
//   };
  

//   const statsData = {
//     score: "92%",
//     totalDistance: "1200 miles",
//     totalTime: "18 hours",
//     metrics: [
//       { name: "Speeding", score: "95%" },
//       { name: "Compliance", score: "90%" },
//       { name: "Vehicle Maintenance", score: "88%" },
//       { name: "Route Adherence", score: "95%" }
//     ]
//   };

//   return (
//     <div className="stats-dashboard">
//       <header className="dashboard-header">
//         <h1>My Stats</h1>
//         <div className="score-section">
//           My Score
//           <span className="score-value">{statsData.score}</span>
//         </div>
//       </header>
//       <div className="stats-summary">
//         <div>Total Dist. Covered: {statsData.totalDistance}</div>
//         <div>Total Time Driven: {statsData.totalTime}</div>
//       </div>
//       <table className="metrics-table">
//         <tbody>
//           {statsData.metrics.map(metric => (
//             <tr key={metric.name}>
//               <td>{metric.name}</td>
//               <td>{metric.score}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <footer className="dashboard-footer">
//         <button onClick={handleViewChart}>
//           View Performance Chart
//         </button>
//       </footer>
//       {/* Performance Chart Modal */}
//       {showChartModal && (
//         <div className="chart-modal">
//           <canvas id="performanceChart" width="400" height="400"></canvas>
//           <button onClick={() => setShowChartModal(false)}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StatsBoard;


// import React, { useEffect, useRef } from 'react';
// import './statsBoard.css'; // Ensure you have the corresponding CSS file
// import Chart from 'chart.js/auto'; // Import Chart.js

// const StatsBoard = () => {
//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);

//   useEffect(() => {
//     if (chartInstance.current) {
//       chartInstance.current.destroy();
//     }

//     const ctx = chartRef.current.getContext('2d');
//     chartInstance.current = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: ['Trip 1', 'Trip 2', 'Trip 3', 'Trip 4', 'Trip 5'],
//         datasets: [
//           {
//             label: 'Your Performance',
//             data: [80, 83, 85, 90, 92],
//             backgroundColor: 'rgba(54, 162, 235, 0.5)',
//             borderColor: 'rgba(54, 162, 235, 1)',
//             borderWidth: 2,
//           },
//           {
//             label: 'Average Driver Score',
//             data: [75, 77, 76, 80, 82],
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 2,
//           }
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//             ticks: {
//               callback: function(value) {
//                 return value + '%';
//               }
//             }
//           }
//         }
//       }
//     });

//     // Clean up function to destroy chart instance on component unmount
//     return () => {
//       chartInstance.current.destroy();
//     };
//   }, []);

//   // Assume this score is from the previous measurement period
//   const previousScore = 75; 
//   const currentScore = 92; // Current score from statsData
//   const improvement = currentScore - previousScore;
//   const improvementMessage = `Great job! You've improved by ${improvement}% compared to the last period.`;

//   const statsData = {
//     score: `${currentScore}%`, // Updated to use the currentScore variable
//     totalDistance: "1200 miles",
//     totalTime: "18 hours",
//     metrics: [
//       { name: "Speeding", score: "95%" },
//       { name: "Compliance", score: "90%" },
//       { name: "Vehicle Maintenance", score: "88%" },
//       { name: "Route Adherence", score: "95%" }
//     ]
//   };

//   return (
//     <div className="stats-dashboard">
//       <div className="encouraging-message">
//         <h2>{improvementMessage}</h2>
//       </div>
//       {/* Line Chart at the top of the page */}
//       <div className="chart-container">
//         <canvas ref={chartRef} id="performanceChart"></canvas>
//       </div>
      // <header className="dashboard-header">
      //   <h1>My Stats</h1>
      //   <div className="score-section">
      //     My Score
      //     <span className="score-value">{statsData.score}</span>
      //   </div>
      // </header>
      // <div className="stats-summary">
      //   <div>Total Dist. Covered: {statsData.totalDistance}</div>
      //   <div>Total Time Driven: {statsData.totalTime}</div>
      // </div>
      // <table className="metrics-table">
      //   <tbody>
      //     {statsData.metrics.map(metric => (
      //       <tr key={metric.name}>
      //         <td>{metric.name}</td>
      //         <td>{metric.score}</td>
      //       </tr>
      //     ))}
      //   </tbody>
      // </table>
//     </div>
//   );
// };

// export default StatsBoard;




import React from 'react';
import './statsBoard.css'; // Ensure you have the corresponding CSS file
import { useNavigate } from 'react-router-dom';

const StatsBoard = () => {
  const navigate = useNavigate();
  const handleBackToTruckConnect = () => {
    navigate('/truckconnect');
  };

  const previousScore = 75; // Example previous score
  const currentScore = 92; // Example current score
  const improvement = currentScore - previousScore; // Calculate improvement
  const improvementMessage = `Great job! You've improved by ${improvement}% compared to the last period.`;

  const tripData = [
    { trip: 'Trip 1', yourPerformance: 'Approximately 80%', averageScore: 'Around 75%' },
    { trip: 'Trip 2', yourPerformance: 'Slightly above 80%', averageScore: 'Approximately 78%' },
    { trip: 'Trip 3', yourPerformance: 'Just below 90%', averageScore: 'Slightly above 80%' },
    { trip: 'Trip 4', yourPerformance: 'Approximately 88%', averageScore: 'Around 82%' },
    { trip: 'Trip 5', yourPerformance: 'Just above 90%', averageScore: 'Approximately 84%' }
  ];

  const metricsData = [
    { name: "Speeding", score: "95%" },
    { name: "Compliance", score: "90%" },
    { name: "Vehicle Maintenance", score: "88%" },
    { name: "Route Adherence", score: "95%" }
  ];

  const myStatsData = [
    {totalDistance: "15000 miles",
    totalTime: "250 hours"}
  ];

  const badges = [
    { id: 'distance', label: 'Long Hauler', description: 'For covering 10,000 miles' },
    { id: 'safety', label: 'Safety Star', description: 'For 100 hours of accident-free driving' },
    { id: 'efficiency', label: 'Fuel Saver', description: 'For exceeding fuel efficiency targets' },
  ];

  return (
    <div className="stats-dashboard">
      <div className="encouraging-message">
        <h1><center>{improvementMessage}</center></h1>
      </div>
      <div className="score-section"><h2>Overall Score: 92%</h2></div>
      <div className="top-content">
        <div className="trip-stats">
          <h1>Performance Statistics Over Five Trips</h1>
          {tripData.map((data, index) => (
            <div className="trip-data" key={index}>
              <h2>{data.trip}</h2>
              <p>Your Performance: {data.yourPerformance}</p>
              <p>Average Driver Score: {data.averageScore}</p>
            </div>
          ))}
        </div>
        <div className="metrics-and-stats">
          <div className="metrics-stats">
          <h1>Metrics</h1>
          {metricsData.map(metric => (
            <div className="metric" key={metric.name}>
              <p>{metric.name}: {metric.score}</p>
            </div>
          ))}
        </div>
      
      <div className="my-stats">
      <h1>My Stats</h1>
      {myStatsData.map(stats => (
            <div className="stats" key={stats.name}>
              <p>Total Distance Covered: {stats.totalDistance}</p>
              <p>Total Time Driven: {stats.totalTime}</p>
            </div>
          ))}
      </div>

      <h1>Badges!</h1>
      <div className="badges-section">        
      {badges.map((badge) => (
        <div key={badge.id} className="badge">
          <h3>{badge.label}</h3>
          <p>{badge.description}</p>
        </div>
      ))}
      </div>
      </div>
      </div>
      <div className="actions">
        <button onClick={handleBackToTruckConnect} className="total-distance">Go Back to Truck Connect</button>
        
      </div>
    </div>
  );
};

export default StatsBoard;

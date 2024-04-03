import React from 'react';
import './statsBoard.css'; // Ensure you have the corresponding CSS file
import { useState, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const StatsBoard = () => {
  const [showChartModal, setShowChartModal] = useState(false);

  const handleViewChart = () => {
    setShowChartModal(true);
  };

  useEffect(() => {
    if (showChartModal) {
      drawChart();
    }
  }, [showChartModal]);

  const drawChart = () => {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Metric A', 'Metric B', 'Metric C'],
        datasets: [{
          label: 'Performance',
          data: [80, 75, 90], // Basic mock data
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      }
    });
  };
  

  const statsData = {
    score: "92%",
    totalDistance: "1200 miles",
    totalTime: "18 hours",
    metrics: [
      { name: "Speeding", score: "95%" },
      { name: "Compliance", score: "90%" },
      { name: "Vehicle Maintenance", score: "88%" },
      { name: "Route Adherence", score: "95%" }
    ]
  };

  return (
    <div className="stats-dashboard">
      <header className="dashboard-header">
        <h1>My Stats</h1>
        <div className="score-section">
          My Score
          <span className="score-value">{statsData.score}</span>
        </div>
      </header>
      <div className="stats-summary">
        <div>Total Dist. Covered: {statsData.totalDistance}</div>
        <div>Total Time Driven: {statsData.totalTime}</div>
      </div>
      <table className="metrics-table">
        <tbody>
          {statsData.metrics.map(metric => (
            <tr key={metric.name}>
              <td>{metric.name}</td>
              <td>{metric.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="dashboard-footer">
        <button onClick={handleViewChart}>
          View Performance Chart
        </button>
      </footer>
      {/* Performance Chart Modal */}
      {showChartModal && (
        <div className="chart-modal">
          <canvas id="performanceChart" width="400" height="400"></canvas>
          <button onClick={() => setShowChartModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default StatsBoard;

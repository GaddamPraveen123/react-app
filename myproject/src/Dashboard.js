import React, { useState, useEffect } from 'react';
import Activity from './Activity';
import './Dashboard.css';

function Dashboard() {
  const [steps, setSteps] = useState(0);
  const [heartRate, setHeartRate] = useState(0);
  const [calories, setCalories] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      const newSteps = Math.floor(Math.random() * 10);
      setSteps((prevSteps) => prevSteps + newSteps);
      setCalories((prevCalories) => prevCalories + newSteps * 0.04); // assuming 0.04 calories per step
    }, 1000);

    const heartRateInterval = setInterval(() => {
      setHeartRate(60 + Math.floor(Math.random() * 40));
    }, 1000);

    return () => {
      clearInterval(stepInterval);
      clearInterval(heartRateInterval);
    };
  }, []);

  return (
    <div className="Dashboard">
      <Activity title="Steps" value={steps} />
      <Activity title="Heart Rate" value={heartRate} unit="bpm" />
      <Activity title="Calories" value={calories.toFixed(2)} unit="kcal" />
    </div>
  );
}

export default Dashboard;

import React, { useEffect, useState } from 'react';
import './Preloader.scss'; // Import CSS for styling

const Preloader: React.FC = () => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // Increment progress until it reaches 100
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          // Once progress reaches 100, clear the interval
          clearInterval(interval);
          return 100;
        }
      });
    }, 15); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader">
      <img src="./Images/car-favicon-nobg.png" alt="Logo" className="logo" />
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
        <span className="percentage">{progress}%</span>
      </div>
    </div>
  );
};

export default Preloader;
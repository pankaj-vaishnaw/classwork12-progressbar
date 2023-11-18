import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the progress every second
      setProgress((prevProgress) => (prevProgress + 1) % 101);
    }, 500  );

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Progress: {progress}%</h2>
      <div
        style={{
          width: `${progress}%`,
          height: "10px",
          backgroundColor: "#4caf50", 
          borderRadius: "2px", 
          transition: "width 0.5s ease-in-out",
          marginTop: "5px", 
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
import React, { useState, useEffect } from 'react';

function Demo() {
  const [value, setValue] = useState(0); // Initial value
  const [increasing, setIncreasing] = useState(true); // Flag to track the direction of the update
  const max = 50; // Maximum value
  const min = 0; // Minimum value
  const increment = 1; // Increment value

  useEffect(() => {
    // Start the automatic range update when the component mounts
    const interval = setInterval(() => {
      if (increasing) {
        if (value < max) {
          setValue(value + increment);
        } else {
          setIncreasing(false);
        }
      } else {
        if (value > min) {
          setValue(value - increment);
        } else {
          setIncreasing(true);
        }
      }
    }, 50); // Update every 100 milliseconds

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => {
      clearInterval(interval);
    };
  }, [value, increasing]);

  return (
    <div>
      <h1>Auto-updating Range Field</h1>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={() => {}}
      />
    </div>
  );
}

export default Demo;

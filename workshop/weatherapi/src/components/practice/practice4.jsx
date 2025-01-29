//4.implelement day and night theming with help of the usestate and switch.


import React, { useState } from 'react';

const ThemeToggler = () => {
  const [isDay, setIsDay] = useState(true); // State to toggle between day and night

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDay(!isDay);
  };

  return (
    <div
      style={{
        backgroundColor: isDay ? '#ffffff' : '#333333', // Day: white, Night: dark
        color: isDay ? '#000000' : '#ffffff', // Day: black text, Night: white text
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>{isDay ? 'Day Theme' : 'Night Theme'}</h1>
      <button onClick={toggleTheme}>
        Switch to {isDay ? 'Night' : 'Day'} Theme
      </button>
    </div>
  );
};

export default ThemeToggler;
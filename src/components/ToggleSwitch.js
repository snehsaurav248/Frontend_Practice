import React, { useState } from "react";
import "./ToggleSwitch.css";

function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={toggleMode} className="toggle-button">
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}
export default Toggle;

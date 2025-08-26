import React from "react";
import ThemeContext from "./ThemeContext";
import Parent from "./components/Parent";

function App() {
  return (
    // Bungkus Provider untuk membagikan data 'dark'
    <ThemeContext.Provider value="dark">
      <Parent />
    </ThemeContext.Provider>
  );
}

export default App;
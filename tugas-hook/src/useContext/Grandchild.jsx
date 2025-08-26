import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function GrandChild() {
//ambil nilai dari Context
  const theme = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "10px",
    textAlign: "center"
  };

  return <div style={style}>Tema saat ini: {theme}</div>;
}

export default GrandChild;
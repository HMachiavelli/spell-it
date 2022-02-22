import React from "react";
import LoginDesktop from "../../components/Login/LoginDesktop";
import LoginMobile from "../../components/Login/LoginMobile";
import "./styles.css";

function App() {
  return (
    <div className="app login">
      <LoginDesktop />
      <LoginMobile />
    </div>
  );
}

export default App;

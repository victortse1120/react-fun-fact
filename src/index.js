import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App(props) {
  const [darkMode, setDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setDarkMode(prevMode => ! prevMode)
  }
  return (
    <div className="container">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode} />
    </div>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import Portfolio from "./pages/portfolio-page/page";
import "./App.css";

/**
 * Senior Architect Note:
 * The App component now serves as the root boundary.
 * All section orchestration is delegated to the Enclosure.
 */
const App: React.FC = () => {
  return (
    <div className="appRoot">
      <Portfolio />
    </div>
  );
};

export default App;

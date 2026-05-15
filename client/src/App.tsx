import React from "react";
import "./App.css";
import AuthRoute from "./shared/routes/route";

/**
 * Senior Architect Note:
 * The App component now serves as the root boundary.
 * All section orchestration is delegated to the Enclosure.
 */
const App: React.FC = () => {
  return (
    <div className="appRoot">
      <AuthRoute />
    </div>
  );
};

export default App;

import React from "react";

import "./App.css";
import CombatScreen from "./components/combat/CombatScreen";

const App: React.FC = () => {
  return (
    <div className="container">
      <CombatScreen />
    </div>
  );
};

export default App;

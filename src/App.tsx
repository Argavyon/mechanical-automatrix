import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import CombatScreen from "./components/combat/CombatScreen";

const App: React.FC = () => {
  const player = useSelector((state: any) => state.player);

  if (player.isInCombat === false) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <CombatScreen />
    </div>
  );
};

export default App;

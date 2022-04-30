import ResourceScreen from "components/nonCombat/resources/ResourceScreen";
import React from "react";
import { useSelector } from "react-redux";
import IPlayer from "types/PlayerTypes";
import { IResource } from "types/ResourceTypes";

import "./App.css";
import CombatScreen from "./components/combat/CombatScreen";

const App: React.FC = () => {
  const player: IPlayer = useSelector((state: any) => state.player);
  const resources: IResource = useSelector((state: any) => state.resources);

  if (player.isInCombat === false) {
    return (
      <div className="container">
        <ResourceScreen />
      </div>
    );
  }

  return (
    <div className="container">
      <CombatScreen />
    </div>
  );
};

export default App;

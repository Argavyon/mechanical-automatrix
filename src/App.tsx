import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IPlayer from "types/PlayerTypes";
import { IResource } from "types/ResourceTypes";

import "./App.css";
import CombatScreen from "./components/combat/CombatScreen";

const App: React.FC = () => {
  const player: IPlayer = useSelector((state: any) => state.player);
  const resource: IResource = useSelector((state: any) => state.resource);
  const dispatch = useDispatch();

  if (player.isInCombat === false) {
    return <div></div>;
  }

  return (
    <div className="container">
      <CombatScreen />
    </div>
  );
};

export default App;

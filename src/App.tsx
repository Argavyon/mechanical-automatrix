import Resource from "components/nonCombat/resources/Resource";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
        <Resource
          name="Heat"
          costPerItem={{ resource: "heat", amount: 0 }}
          timeToMake={10}
          timeToMakeCostToImprove={{ resource: "heat", amount: 2 }}
          amountCurrent={3}
          amountMax={10}
          amountMaxCostToImprove={{ resource: "heat", amount: 2 }}
          improvementCostExponent={1.5}
          isUnlocked={true}
        />
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

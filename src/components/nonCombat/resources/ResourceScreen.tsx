import React from "react";
import Resource from "./Resource";
import "styles/nonCombat/ResourceScreen.css";

type Props = {};

const ResourceScreen = (props: Props) => {
  return (
    <div className="resourceScreen">
      <Resource
        name="Heat"
        costPerItem={{ resource: "heat", amount: 0 }}
        timeToMake={10}
        timeToMakeCostToImprove={{ resource: "heat", amount: 2 }}
        timeToMakeLevel={1}
        amountCurrent={1}
        amountMax={10}
        amountMaxLevel={1}
        amountMaxCostToImprove={{ resource: "heat", amount: 2 }}
        improvementCostExponent={1.5}
        isUnlocked={true}
      />
    </div>
  );
};

export default ResourceScreen;

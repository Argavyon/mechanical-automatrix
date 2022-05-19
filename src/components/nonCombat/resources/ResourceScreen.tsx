import React from "react";
import Resource from "./Resource";
import "styles/nonCombat/ResourceScreen.css";
import { useSelector } from "react-redux";
import { RootState } from "gameState/store";
import { IResource } from "types/ResourceTypes";

type Props = {};

const ResourceScreen = (props: Props) => {
  const resources = useSelector((state: RootState) => state.resources);
  let resourceArray: IResource[] = [];

  for (let resource in resources) {
    const resourceState = resources[resource as keyof typeof resources];
    resourceArray.push(resourceState);
  }

  return (
    <div>
      {resourceArray
        .filter((resource) => resource.isUnlocked)
        .map((resource) => (
          <Resource
            key={resource.name}
            name={resource.name}
            costPerItem={resource.costPerItem}
            timeToMake={resource.timeToMake}
            timeToMakeCostToImprove={resource.timeToMakeCostToImprove}
            timeToMakeLevel={resource.timeToMakeLevel}
            amountCurrent={resource.amountCurrent}
            amountMax={resource.amountMax}
            amountMaxLevel={resource.amountMaxLevel}
            amountMaxCostToImprove={resource.amountMaxCostToImprove}
            improvementCostExponent={resource.improvementCostExponent}
            isUnlocked={resource.isUnlocked}
          />
        ))}
    </div>
  );
};
export default ResourceScreen;

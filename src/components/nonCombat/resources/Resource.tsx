import React from "react";
import { IResource } from "types/ResourceTypes";
import "styles/nonCombat/resources/Resource.css";
import ResourceButton from "./ResourceButton";
import { useDispatch } from "react-redux";
import { improveParameter } from "gameState/resourceSlice";
import { ResourceHeader } from "./ResourceHeader";

const Resource = (props: IResource) => {
  const dispatch = useDispatch();

  return (
    <div className="resourceContainer">
      <ResourceHeader
        name={props.name}
        amountCurrent={props.amountCurrent}
        amountMax={props.amountMax}
        timeToMake={props.timeToMake}
      ></ResourceHeader>
      <div className="resourceButtonsContainer">
        <ResourceButton
          onclick={() =>
            dispatch(
              improveParameter({
                name: props.name,
                parameter: "timeToMake",
                cost: "timeToMakeCostToImprove",
                action: "DECREASE",
              })
            )
          }
          buttonName="Job speed"
          cost={props.timeToMakeCostToImprove}
          level={props.timeToMakeLevel}
        />
        <ResourceButton
          onclick={() =>
            dispatch(
              improveParameter({
                name: props.name,
                parameter: "amountMax",
                cost: "amountMaxCostToImprove",
                action: "INCREASE",
              })
            )
          }
          buttonName="Capacity"
          cost={props.amountMaxCostToImprove}
          level={props.amountMaxLevel}
        />
      </div>
    </div>
  );
};

export default Resource;

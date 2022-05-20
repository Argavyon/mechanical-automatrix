import React from "react";
import { IResource, IResourcesState } from "types/ResourceTypes";

import "styles/nonCombat/resources/Resource.css";
import ResourceButton from "./ResourceButton";
import Bar from "components/utils/Bar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "gameState/store";
import {
  improveTimeToMake,
  improveAmountMax,
  makeResource,
} from "gameState/resourceSlice";

const Resource = (props: IResource) => {
  // The name prop has to be defined as a keyof IResourcesState or typescript
  // will burn everything to the ground.
  const resourceState = useSelector(
    (state: RootState) => state.resources[props.name as keyof IResourcesState]
  );

  const dispatch = useDispatch();

  // console.log(resourceState);

  return (
    <div className="resourceContainer">
      <div className="resourceHeader">
        <p
          className="resourceName"
          onClick={() => dispatch(makeResource(props.name))}
        >
          {props.name}
        </p>
        <Bar
          value={props.amountCurrent}
          max={props.amountMax}
          color={"whitesmoke"}
        />
      </div>
      <div className="resourceButtonsContainer">
        <ResourceButton
          onclick={() => dispatch(improveTimeToMake(props.name))}
          buttonName="Job speed"
          cost={props.timeToMakeCostToImprove}
          level={props.timeToMakeLevel}
        />
        <ResourceButton
          onclick={() => dispatch(improveAmountMax(props.name))}
          buttonName="Capacity"
          cost={props.amountMaxCostToImprove}
          level={props.amountMaxLevel}
        />
      </div>
    </div>
  );
};

export default Resource;

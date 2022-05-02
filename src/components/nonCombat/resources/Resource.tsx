import React from "react";
import { IResource, IResourcesState } from "types/ResourceTypes";

import "styles/nonCombat/resources/Resource.css";
import ResourceButton from "./ResourceButton";
import Bar from "components/utils/Bar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "gameState/store";
import { setTimeToMake } from "gameState/resourceSlice";

const Resource = (props: IResource) => {
  // The name prop has to be defined as a keyof IResourcesState or typescript
  // will burn everything to the ground.
  const resourceState = useSelector(
    (state: RootState) =>
      state.resource[props.name.toLowerCase() as keyof IResourcesState]
  );

  const dispatch = useDispatch();

  console.log(resourceState);

  return (
    <div className="resourceContainer">
      <div className="resourceHeader">
        <p
          onClick={() => dispatch(setTimeToMake("heat"))}
          className="resourceName"
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
          buttonName="Job speed"
          cost={{ resource: "heat", amount: 1 }}
          level={props.timeToMakeLevel}
        />
        <ResourceButton
          buttonName="Capacity"
          cost={{ resource: "heat", amount: 1 }}
          level={props.amountMaxLevel}
        />
      </div>
    </div>
  );
};

export default Resource;

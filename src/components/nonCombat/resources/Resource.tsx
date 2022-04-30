import React from "react";
import { IResource } from "types/ResourceTypes";

import "styles/nonCombat/Resource.css";
import ResourceButton from "./ResourceButton";

const Resource = (props: IResource) => {
  return (
    <div className="resourceContainer">
      <div>
        <p className="resourceName">{props.name}</p>
      </div>
      <div className="resourceButtonsContainer">
        <ResourceButton
          buttonName="Job speed"
          cost={{ resource: "heat", amount: 1 }}
        />
        <ResourceButton
          buttonName="Capacity"
          cost={{ resource: "heat", amount: 1 }}
        />
      </div>
    </div>
  );
};

export default Resource;

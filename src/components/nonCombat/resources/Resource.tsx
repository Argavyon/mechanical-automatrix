import React from "react";
import { IResource } from "types/ResourceTypes";

import "styles/nonCombat/resources/Resource.css";
import ResourceButton from "./ResourceButton";
import Bar from "components/utils/Bar";

const Resource = (props: IResource) => {
  return (
    <div className="resourceContainer">
      <div className="resourceHeader">
        <p className="resourceName">{props.name}</p>
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

import React from "react";
import { IResourceCost } from "types/ResourceTypes";

type Props = {
  buttonName: string;
  cost: IResourceCost;
  level: number;
  onclick: () => any;
};

const ResourceButton = (props: Props) => {
  return (
    <div>
      <p className="resourceButton" onClick={props.onclick}>
        {props.buttonName}
      </p>
      <p className="alignLeft">
        Cost: {props.cost.amount} {props.cost.resource} <br />
        Level: {props.level}
      </p>
    </div>
  );
};

export default ResourceButton;

import React from "react";
import { IResourceCost } from "types/ResourceTypes";

type Props = { buttonName: string; cost: IResourceCost; level: number };

const ResourceButton = (props: Props) => {
  return (
    <div>
      <p className="resourceButton">{props.buttonName}</p>
      <p className="alignLeft">
        Cost: {props.cost.amount} {props.cost.resource} <br />
        Level: {props.level}
      </p>
    </div>
  );
};

export default ResourceButton;

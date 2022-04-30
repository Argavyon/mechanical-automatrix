import React from "react";
import { IResourceCost } from "types/ResourceTypes";

type Props = { buttonName: string; cost: IResourceCost };

const ResourceButton = (props: Props) => {
  return (
    <div className="resourceButton">
      <p>{props.buttonName}</p>
      <p>
        {props.cost.amount} {props.cost.resource}
      </p>
    </div>
  );
};

export default ResourceButton;

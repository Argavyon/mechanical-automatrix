import React, { useLayoutEffect, useRef } from "react";
import Bar from "components/utils/Bar";
import { BASE_RESOURCE_BUTTON_COLOR } from "utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { makeResource, setIsBeingMade } from "gameState/resourceSlice";
import { RootState } from "gameState/store";
import { IResourcesState } from "types/ResourceTypes";

interface resourceHeaderProps {
  name: string;
  amountCurrent: number;
  amountMax: number;
  timeToMake: number;
}

export const ResourceHeader = (props: resourceHeaderProps) => {
  const resourceState = useSelector(
    (state: RootState) => state.resources[props.name as keyof IResourcesState]
  );

  const boxRef = useRef<HTMLParagraphElement>(null);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    boxRef.current!.style.backgroundColor = BASE_RESOURCE_BUTTON_COLOR;
    boxRef.current!.style.transition = `background-color ${
      resourceState.timeToMake / 2
    }s`;
  }, []);

  const handleClick = () => {
    if (resourceState.isBeingMade) {
      console.log("already making");
      return;
    }

    let style = boxRef.current!.style;
    style.backgroundColor = "#000";

    dispatch(setIsBeingMade({ name: props.name, isBeingMade: true }));
    console.log(resourceState.isBeingMade);

    setTimeout(() => {
      style.backgroundColor = BASE_RESOURCE_BUTTON_COLOR;
      dispatch(makeResource(props.name));
      dispatch(setIsBeingMade({ name: props.name, isBeingMade: false }));
    }, resourceState.timeToMake * 1000);
  };

  return (
    <div className="resourceHeader">
      <p className="resourceName" onClick={handleClick} ref={boxRef}>
        {props.name}
      </p>
      <Bar
        value={props.amountCurrent}
        max={props.amountMax}
        color={"whitesmoke"}
        textColor={"black"}
      />
    </div>
  );
};

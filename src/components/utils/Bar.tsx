import React, { useEffect, useRef } from "react";
import "styles/utils/Bar.css";
import calculatePercentage from "utils/calculatePercentage";

type BarProps = {
  value: number;
  max: number;
  color: string;
};

const Bar: React.FC<BarProps> = (props: BarProps) => {
  const barRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    barRef.current!.style.width = `${calculatePercentage(
      props.value,
      props.max
    )}%`;
    if (props.value <= 0) {
      barRef.current!.style.width = `0%`;
    }
  }, [props.value]);

  return (
    <div className="barContainer">
      <p
        style={{ backgroundColor: props.color }}
        className="innerBar"
        ref={barRef}
      >
        {props.value}
      </p>
    </div>
  );
};

export default Bar;

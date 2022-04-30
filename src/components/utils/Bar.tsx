import React, { useEffect, useRef } from "react";
import "styles/utils/Bar.css";

type BarProps = {
  value: number;
};

const Bar: React.FC<BarProps> = (props: BarProps) => {
  const barRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    barRef.current!.style.width = `${props.value}%`;
    if (props.value <= 0) {
      barRef.current!.style.width = `0%`;
    }
  }, [props.value]);

  return (
    <div className="barContainer">
      <p className="innerBar" ref={barRef}>
        {props.value}
      </p>
    </div>
  );
};

export default Bar;

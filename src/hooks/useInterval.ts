// Hook written by Dan Abramov
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
//
// savedCallback is typed as any because typing useRef is a pain.

import React, { useState, useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number) {
  const savedCallback: any = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

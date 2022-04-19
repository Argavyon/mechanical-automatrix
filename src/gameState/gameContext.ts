import { createContext } from "react";
import playerState from "./playerContext";

const gameState = {
  playerState,
};

const gameContext = createContext(gameState);

export default gameContext;

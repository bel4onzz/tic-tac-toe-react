import { useState } from "react";
import { PLAYERS } from "../constants/players";

import { deriveActivePlayer } from "./deriveMethods";

export const useAppLocalState = () => {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const handleRestart = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((previousPlayers) => {
      return {
        ...previousPlayers,
        [symbol]: newName,
      };
    });
  };

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((previousTurns) => {
      const currentPlayer = deriveActivePlayer(previousTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...previousTurns,
      ];

      return updatedTurns;
    });
  };

  return {
    properties: {
      players,
      gameTurns,
    },
    methods: {
      handlePlayerNameChange,
      handleSelectSquare,
      handleRestart,
    },
  };
};

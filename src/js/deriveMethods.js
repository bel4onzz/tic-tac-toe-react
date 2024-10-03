import { WINNING_COMBINATIONS } from "../constants/winning-combinations";
import { INITIAL_GAMEBOARD } from "../constants/initial-game-board";

export const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

export const deriveWinner = (gameBoard, players) => {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      console.log("WINNER ::> ", players);
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
};

export const deriveGameBoard = (gameTurns) => {
  let gameBoard = [
    ...INITIAL_GAMEBOARD.map((boardFieldsArray) => [...boardFieldsArray]),
  ];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
};

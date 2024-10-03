import { useAppLocalState } from "./js/useAppLocalState";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import {
  deriveActivePlayer,
  deriveWinner,
  deriveGameBoard,
} from "./js/deriveMethods";

function App() {
  const { properties, methods } = useAppLocalState();

  const activePlayer = deriveActivePlayer(properties.gameTurns);
  const gameBoard = deriveGameBoard(properties.gameTurns);
  const winner = deriveWinner(gameBoard, properties.players);
  const hasDraw = properties.gameTurns.length === 9 && !winner;

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            // initialName={PLAYERS.X}
            initialName={properties.players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={methods.handlePlayerNameChange}
          />
          <Player
            initialName={properties.players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={methods.handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={methods.handleRestart} />
        )}
        <GameBoard
          onSelectSquare={methods.handleSelectSquare}
          board={gameBoard}
        />
      </div>

      <Log turns={properties.gameTurns} />
    </main>
  );
}

export default App;

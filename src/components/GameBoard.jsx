
const GameBoard = ({ onSelectSquare, board }) => {
  

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => {
                // col is playerSymbol
                return (
                  <li key={colIndex}>
                    <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={col !== null}>
                      {col}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;

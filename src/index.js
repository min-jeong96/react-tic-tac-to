import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

function Square(props) {
  return (
    <button className={`square ${props.className} ${props.value}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function AgainButton(props) {
  const winner = calculateWinner(props.squares);
  const isFinished = props.squares.find(square => square === null) === undefined;

  return (
    <div className="button">
      <button
        disabled={!winner && !isFinished}
        onClick={() => props.reset()}
        >Again
      </button>
    </div>
  )
}

function Board(props) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameStatus, setGameStatus] = useState(undefined);
  const [winnerLine, setWinnerLine] = useState([]);

  function reset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStatus(undefined);
    setWinnerLine([]);
  }

  function handleClick(i) {
    const winner = calculateWinner(squares);
    
    if (winner || squares[i]) {
      return;
    }

    const newSquares = [...squares];
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);

    const newXIsNext = !xIsNext;
    setXIsNext(newXIsNext);
  }

  useEffect(() => {
    const winner = calculateWinner(squares);
    setWinnerLine(calculateWinnerLine(squares));

    if (winner) {
      setGameStatus(`Winner: ${winner}`);
    } else {
      setGameStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
    }
  }, [squares, xIsNext]);

  return (
    <div className="game-board">
      <div className="status">{gameStatus}</div>
      <AgainButton squares={squares} reset={reset}/>
      {
        [0, 1, 2].map((row) => {
          return (
            <div key={row} className="board-row">
              {
                [0, 1, 2].map(col => {
                  return (
                    <Square key={row * 3 + col}
                      className={winnerLine.includes(row * 3 + col) ? 'highlighted':''}
                      value={squares[row * 3 + col]}
                      onClick={() => handleClick(row * 3 + col)}
                      />
                  )
                })
              }
            </div>
          );
        })
      }
    </div>
  );
}

function Game(props) {
  return (
    <div className="game">
      <Board />
    </div>
  );
}

// <div className="game-info">
// <div>{/* status */}</div>
// <ol>{/* TODO */}</ol>
// </div>

function calculateWinnerLine(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return [null];
}

function calculateWinner(squares) {
  return squares[calculateWinnerLine(squares)[0]];
}

// ========================================

const root = createRoot(document.getElementById("root"));
root.render(<Game />);
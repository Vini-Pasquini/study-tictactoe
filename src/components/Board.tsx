import { useState } from "react";
import Square from "./Square";

export default function Board() {
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isGameRunning, setGameRunning] = useState(true);

    function validateTie(squares:string[]): boolean {
        for (let index = 0; index < squares.length; index++) {
            if (squares[index] == '') {
                 return false;
            }
        }
        return true;
    }

    function validateWin(squares:string[]): boolean {
        const combinations = [
            /* Rows */
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            /* Columns */
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            /* Diagonals */
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let index = 0; index < combinations.length; index++) {
            let combinationIndexes = combinations[index];
            
            let indexOne = combinationIndexes[0];
            let indexTwo = combinationIndexes[1];
            let indexThree = combinationIndexes[2];

            let squareOne = squares[indexOne];
            let squareTwo = squares[indexTwo];
            let squareThree = squares[indexThree];

            if (squareOne != '' && squareTwo != '' && squareOne == squareTwo && squareTwo == squareThree) {
                return true;
            }
        }

        return false;
    }

    function handleSquareClick(index:number) {
        if (!isGameRunning || squares[index] != '') {
            return;
        }

        const nextSquares = squares.slice();
        nextSquares[index] = currentPlayer == 1 ? 'X' : 'O';
        setSquares(nextSquares);

        let tieFlag = validateTie(nextSquares);
        if (tieFlag) {
            setCurrentPlayer(0);
            setGameRunning(false);
            return;
        }

        let winFlag = validateWin(nextSquares);
        if (winFlag || tieFlag) {
            setCurrentPlayer(tieFlag ? 3 : currentPlayer);
            setGameRunning(false);
            return;
        }

        setCurrentPlayer(currentPlayer == 1 ? 2 : 1);
    }

    function resetGame() {
        setCurrentPlayer(1);
        setSquares(Array(9).fill(''));
        setGameRunning(true);
    }
    
    let playerHeader = <h3>Player {currentPlayer}'s Turn</h3>;

    if (!isGameRunning) {
        playerHeader = currentPlayer > 0 ? <h3>WINNER: Player {currentPlayer}!</h3> : <h3>Tic Tac TIE!</h3>
    }

    return (
        <div>
            <div>
                {playerHeader}
            </div>
            <div className="board-row">
                <Square value={squares[0]} onClickCallback={() => handleSquareClick(0)}/>
                <Square value={squares[1]} onClickCallback={() => handleSquareClick(1)}/>
                <Square value={squares[2]} onClickCallback={() => handleSquareClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClickCallback={() => handleSquareClick(3)}/>
                <Square value={squares[4]} onClickCallback={() => handleSquareClick(4)}/>
                <Square value={squares[5]} onClickCallback={() => handleSquareClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClickCallback={() => handleSquareClick(6)}/>
                <Square value={squares[7]} onClickCallback={() => handleSquareClick(7)}/>
                <Square value={squares[8]} onClickCallback={() => handleSquareClick(8)}/>
            </div>
            <div>
                {!isGameRunning && <button onClick={resetGame}>Restart Game</button>}
            </div>
        </div>
    );
}
import { useState } from "react";
import Square from "./Square";

export default function Board() {
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(index:number) {
        if (squares[index] != null) return;
        const nextSquares = squares.slice();
        nextSquares[index] = currentPlayer == 0 ? 'X' : 'O';
        setSquares(nextSquares);
        setCurrentPlayer(currentPlayer == 0 ? 1 : 0);
    }

    return (
        <div>
            <h3>Player {currentPlayer + 1}'s Turn</h3>
            <div className="board-row">
                <Square value={squares[0]} onClickCallback={() => handleClick(0)}/>
                <Square value={squares[1]} onClickCallback={() => handleClick(1)}/>
                <Square value={squares[2]} onClickCallback={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClickCallback={() => handleClick(3)}/>
                <Square value={squares[4]} onClickCallback={() => handleClick(4)}/>
                <Square value={squares[5]} onClickCallback={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClickCallback={() => handleClick(6)}/>
                <Square value={squares[7]} onClickCallback={() => handleClick(7)}/>
                <Square value={squares[8]} onClickCallback={() => handleClick(8)}/>
            </div>
        </div>
    );
}
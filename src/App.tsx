import React from "react";
import Square from "./components/Square";
import { createRoot } from "react-dom/client";

function App() {
    return (
        <div>
            <h2>Tic Tac Toe</h2>
            <div>
                <div className="board-row">
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
                <div className="board-row">
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
                <div className="board-row">
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
            </div>
        </div>
    );
}

const root = createRoot(document.body);
root.render(<App/>)

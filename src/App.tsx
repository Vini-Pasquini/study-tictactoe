import React from "react";
import Board from "./components/Board";
import { createRoot } from "react-dom/client";

function App() {
    return (
        <div>
            <h2>Tic Tac Toe</h2>
            <Board/>
        </div>
    );
}

const root = createRoot(document.body);
root.render(<App/>)

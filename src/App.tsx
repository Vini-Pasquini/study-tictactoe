import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return (
        <h2>Tic Tac Toe</h2>
    );
}

const root = createRoot(document.body);
root.render(<App/>)

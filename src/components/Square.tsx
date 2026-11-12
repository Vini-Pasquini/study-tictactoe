import { useState } from "react";

export default function Square({value, onClickCallback}:{value:string, onClickCallback:any}) {
    return (
        <button
            className="square"
            onClick={onClickCallback}
        >
            {value}
        </button>
    );
}

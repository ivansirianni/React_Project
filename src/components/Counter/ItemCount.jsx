import { useState } from "react";

export default function ItemCounter(){
    const [counter, setCounter] = useState(0);

    const reduceOnClick = () => {
        setCounter(counter - 1)
    }

    const addOnClick = () => {
        setCounter(counter + 1)
    }


    return (
        <div className="counter-container">
            <button onClick={ reduceOnClick }> - </button>
            <span className="count-color">{ counter }</span>
            <button onClick={ addOnClick }> + </button>
        </div>
    )
}
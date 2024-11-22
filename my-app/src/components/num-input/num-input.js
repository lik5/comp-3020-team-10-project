import { useState } from "react";
import './num-input.css';

function NumInput() {
    let [count, setCount] = useState(1);
    let disable = count <= 1;

    function incrementCount(event) {
      event.preventDefault();
      count = count + 1;
      setCount(count);
    }
    function decrementCount(event) {
      event.preventDefault();
      count = count - 1;
      setCount(count);
    }

    return (
    <div className="quantity-wrapper">
      <button className="quantity-btn" onClick={(event) => incrementCount(event)}>+</button>
      <input type="number" id="quantity-input" min="1" value={count} onChange={(event)=> setCount(event.target.value)}/>
      <button disabled = {disable} className="quantity-btn" onClick={(event) => decrementCount(event)}>-</button>
    </div>)
}

export default NumInput;
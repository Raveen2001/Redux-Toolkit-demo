import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/slices/counterSlice";

import { setText } from "./redux/slices/nameSlice";

import { createItem } from "./redux/slices/productSlice";

function App() {
  const count = useSelector((state) => state.cnt);
  const name = useSelector((state) => state.name);
  const products = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const [amount, setAmount] = useState(20);
  useEffect(() => {
    console.log("count : " + count);
  }, [count]);

  return (
    <div className="App">
      <h1>{count !== null ? count : "NULL"}</h1>
      <button onClick={() => dispatch(increment())}>increament</button>
      <button onClick={() => dispatch(decrement())}>decreament</button>
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        increament by amout
      </button>

      <br></br>
      <input
        onChange={(e) => {
          dispatch(setText(e.target.value));
        }}
      ></input>

      <h1>{name}</h1>

      <button
        onClick={() => {
          dispatch(
            createItem({
              name: name,
              value: { price: 10, description: name, quantity: count },
            })
          );
        }}
      >
        create item
      </button>
      <ul>
        {Object.keys(products).map((key, index) => (
          <li>
            {key}, {products[key].quantity}, {products[key].price},{" "}
            {products[key].description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

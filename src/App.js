import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h2>Name :{props.name}</h2>
      <p>Price :{props.price}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
   const newCount = count + 1;
    setCount(newCount)
  };
  return (
    <div>
      <h2>Counter :{count}</h2>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

// const products = [
//   {name: 'laptop' ,price: '55500'},
//   {name: 'Smartphon' ,price: '75000'},
//   {name: 'Watch' ,price: '320000'},
//   {name: 'Taaablate' ,price: '45000'},
//   {name: 'Bike' ,price: '275500'},
// ]

// {
//   products.map(product => <Product name ={product.name} price={product.price}></Product>)
// }
export default App;

import { useContext } from "react";
import Items from "./components/Items";
import "./App.css";
import Cart from "./components/Cart";
function App() {
  return (
    <>
    <Items name = "macbook" price = {10000}/>
    <Items name = "iphone" price = {2000}/>
    <Items name = "watch" price = {700}/>
    <Cart />
    </>
  );
}

export default App;

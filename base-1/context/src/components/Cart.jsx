
import { useCart } from "../context/Cart"
const Cart = ()=> {
  const cart = useCart()
  const total = cart.items.reduce((a,b)=>a+b.price,0)
  return (
    <div className="cart">
      <h1>Cart</h1>
      {
        cart && cart.items.map((items) => <li>{items.name} - ${items.price}</li>)
      }
      <h5>Total bill : ${total}</h5>
    </div>
  )
}

export default Cart
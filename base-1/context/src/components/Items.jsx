import { useCart } from "../context/Cart"
const Items = (props) =>{
  const cart = useCart()
  return(
    <div className="items">
      <h4>{props.name}</h4>
      <p>${props.price}</p>
      <button onClick={()=>{
        cart.setItems([
          ...cart.items, {name: props.name , price: props.price},
        ])
      }}>Add to cart</button>
    </div>
  )
}

export default Items
import React, { useContext } from 'react'
import './ItemsDisplay.css'
import Item from '../Items/Items'
import { StoreContext } from '../../Context/StoreContext'

const ItemsDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext);

  return (
    <div className='shop-display' id='shop-display'>
      <h2>Top Choices</h2>
      <div className='shop-display-list'>
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return <Item key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id} />
          }
          return null;
        })}
      </div>
    </div>
  )
}

export default ItemsDisplay
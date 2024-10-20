import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({category, setCategory}) => {
  const { menu_list } = useContext(StoreContext);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Collection</h1>
      <p className='explore-menu-text'>
        Discover a diverse range of high-quality products tailored to meet your needs. From the latest gadgets to stylish home decor, find everything you’re looking for in one place.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div 
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
            key={index} 
            className='explore-menu-list-item'
          >
            <img src={item.menu_image} className={category === item.menu_name ? "active" : ""} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu;
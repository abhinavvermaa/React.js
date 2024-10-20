import React, { useContext, useState } from 'react'
import './Items.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const Item = ({ image, name, price, desc, id }) => {

    const [itemCount, setItemCount] = useState(0);
    const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);

    return (
        <div className='shop-item'>
            <div className='shop-item-img-container'>
                <img className='shop-item-image' src={url + "/images/" + image} alt={name} />
                {!cartItems[id]
                ? <img className='add-to-cart' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to cart" />
                : <div className="shop-item-counter">
                    <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="Remove from cart" />
                    <p>{cartItems[id]}</p>
                    <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="Add more" />
                  </div>
                }
            </div>
            <div className="shop-item-info">
                <div className="shop-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_stars} alt="Rating" />
                </div>
                <p className="shop-item-desc">{desc}</p>
                <p className="shop-item-price">{currency}{price}</p>
            </div>
        </div>
    )
}

export default Item
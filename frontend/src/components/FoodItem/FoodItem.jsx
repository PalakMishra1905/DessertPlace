import React, {useContext} from 'react'
import './FoodItem.css'
import { StoreContext } from '../../Context/storeContext';

const FoodItem = ({id, name, price, description, image}) => {
  
    const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

  return (
    <div className='food-item'>
       <div className="food-item-image-container">
        <img className="food-item-image" src={url+"/images/"+image} alt="" />
        {
            !cartItems[id] ? <img className="add" onClick={()=>addToCart(id)} src="add_icon_white.png"/>
            : <div className="food-item-counter">
                <img  onClick={()=>removeFromCart(id)} src="remove_icon_red.png" alt="" />
                <p>{cartItems[id]}</p>
                <img  onClick={()=>addToCart(id)} src="add_icon_green.png" alt="" />
            </div>
        }
       </div>
       <div className="food-item-info">
         <div className="food-item-name-rating">
            <p>{name}</p>
            <img src="rating_starts.png" alt="" />
         </div>
         <p className="food-item-desc">
            {description}
         </p>
         <p className="food-item-price">&#8377;{price}</p>
       </div>
    </div>
  )
}

export default FoodItem
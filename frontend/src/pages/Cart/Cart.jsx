import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext';
import {useNavigate} from 'react-router-dom'


const Cart = () => {

  const navigate = useNavigate();
  const {cartItems, removeFromCart, food_list, getTotalCartAmount, url} = useContext(StoreContext);

  return (
    <div className='cart'>
        <div className="cart-items">
           <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
           </div>
           <br/>
           <hr/>
           {food_list.map((item, index)=>{
             if(cartItems[item._id] > 0){
               return(
                <div>
                    <div className='cart-items-title cart-items-item'>
                    <img src={url+"/images/"+item.image} alt="" className='cart-img'/>
                    <p>{item.name}</p>
                    <p>&#8377;{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>&#8377;{item.price * cartItems[item._id]}</p>
                    <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                  </div>
                  <hr/>

                </div>
               )
             }
           })}
        </div>
        <div className="cart-bottom">
           <div className="cart-total">
             <h2>Cart Total</h2>
             <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>&#8377;{getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                 <p>Delivery Fee</p>
                 <p>&#8377;{getTotalCartAmount()===0?0:20}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <b>Total</b>
                <b>&#8377;{getTotalCartAmount() ===0?0:getTotalCartAmount()+20}</b>
              </div>
             </div>
             <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
           </div>
           <div className="cart-promocode">
              <div>
                <p>If you have a promocode, Enter it here</p>
                <div className="cart-promocode-input">
                   <input type="text" placeholder='Enter promocode'/>
                   <button>Submit</button>
                </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Cart
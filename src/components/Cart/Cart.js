import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './cart.css'

        //--add every prime minister in different cart--//


const Cart = (props) => {
   
    const {name, img, country, age, selary}= props.person;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <div className = "person">
            <h2>PRIME MINISTER</h2>
            <img src={img} alt="" />
           <h4>Name: {name}</h4> 
           <h6>Age: {age}</h6> 
           <h6>Counrty: {country}</h6> 
           <h6>Selary: {selary}</h6> 
           <button onClick={()=>props.handleAddToCart(props.person)}>{element} Add to cart</button>
           <p>
           <i class="fab fa-facebook-square icon"></i>
           <i class="fab fa-twitter-square icon"></i>
           </p>
           </div>
             
        </div>
    );
};

export default Cart;
import React from 'react'
import './compo.css';


export default function Cart(props) {
    // const {cartItems}=props;
    return (
        <div className="cart-div">
          <h1>The Cart</h1>
            <div>
                {props.cartItems.length ===0 && <div>
                    Cart is Empty<br></br>
                    The cart has {props.cartItems.length}Products.
                    </div>
                    }
            </div>
            
        </div>
    )
}

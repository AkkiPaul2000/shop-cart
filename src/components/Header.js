import React from 'react';
import './compo.css';


export default function Header(props) {
    return (
        <div class="block">
         <div class="head">
            <a href="#/" >Shop-cart</a>
         </div>
         <div class="user">
             <a href="#/cart">Cart</a> &nbsp<a href="#/signin">SignIn</a>
         </div>
         </div >
    )
}

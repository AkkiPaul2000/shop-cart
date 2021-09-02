import React from 'react'
import './compo.css';

export default function Item(props) {
    const {product}=props;
 console.log(product)
    return (
        <div className="item">
            <img className="pic" src={product.image}/>
            <h3>{product.name}</h3>
            <div>{product.price}</div>
            {
                product.available===0 && 
                <h1>OUT OF STOCK</h1>
            }
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

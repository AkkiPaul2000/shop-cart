import React from 'react';
import './compo.css';
import Item from './Item';

export default function Products(props){
    // const {products} =props;
    console.log(props)
    
    return <div className="products">
        <div className="items">
            {props.category==0 && props.shop.map((product)=>(
                <Item key={product.id} product={product} />
            )) } 
            {props.shop.map((product)=>(
                (props.category == product.category) && <Item key={product.id} product={product} />
            ))}
        </div>
        </div>
}
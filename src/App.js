import {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Products from './components/Products.js';
import Cart from './components/Cart';
import axios from 'axios';
import shop from './shop.json';

function App() {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [categories, setCategories] = useState("0")


  const categ = new Set()
  // useEffect(() => {
  //   axios.get('./shop.json')
  //   .then(r=>setProducts(r.data))
  //   .catch(e=>console.log(e))
  // }, [])
 
  // function inCat(cat) {
  //   for(i in cat )
  //     if(categ.has(i))
  //     return true
    
  //   categ.push(cat)
  //   return
  // }

  function handleChange(event) {
    setCategories(event.target.value);
}

  return (
    <div className="App">
      <Header/>
      <div className="body">    
        <div className="product">
        <select value={categories} onChange={handleChange}>
        <option value="0" >Default</option> 
      <option value="Vegetables">Vegetables</option>
      <option value="Fruits">Fruits</option> 
      </select>
          <Products shop={shop} category={categories}  />
        </div>
        <aside className="cart">
          <Cart shop={shop} category={categories} />
        </aside>
      </div>
     
    </div>
  );
}

export default App;

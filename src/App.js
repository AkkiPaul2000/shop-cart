import {useState} from 'react';
import './App.css';
import Head from './components/Head';
import Products from './components/Products.js';
import Cart from './components/Cart';
import axios from 'axios';
import shop from './shop.json';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ItemSlider from './components/ItemSlider';
import Footer from './components/Footer';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function App() {
  const classes = useStyles();
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [categories, setCategories] = useState("0")


//Seleect from material ui
//Item  cart side bar material ui


  //const categ = new Set()

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
      <Head />
      <div className="form">
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          categories
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={categories}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="0">
            <em>Default</em>
          </MenuItem>
          <MenuItem value="Vegetables">Vegetables</MenuItem>
          <MenuItem value="Fruits">Fruits</MenuItem>
         
        </Select>
        <FormHelperText>Choose from Categories</FormHelperText>
      </FormControl></div>
      <div className="body">    
        <div className="product">
        <Products shop={shop} category={categories} />
        </div>
        <div className="cart">
          <Cart shop={shop} category={categories} cartItems={cartItems} />
        </div>
      </div>
      <Footer />
          </div>
  );
}

export default App;

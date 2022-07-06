import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './styles/App.scss';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import { getProducts } from './redux/slices/catalogSlice';
import axios from 'axios';
import Cart from './components/Cart/Cart';
import Catalog from './components/Catalog/Catalog';
import Registration from './components/Registration/Registration';

function App() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.catalog.products);

  useEffect(() => {
    axios.get('https://62a089f9202ceef70870490b.mockapi.io/api/v2/products').then(resp => {
      dispatch(getProducts(resp.data))
    })
  }, []);

  console.log(products)

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderMenu/>
        <Routes>
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/" exact element={<Catalog />} />
          <Route path="/registration" exact element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

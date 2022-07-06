import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './styles/App.scss';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import { getProducts } from './redux/slices/catalogSlice';
import axios from 'axios';

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
      <HeaderMenu/>
    </div>
  );
}

export default App;

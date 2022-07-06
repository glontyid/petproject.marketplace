import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getProducts } from './redux/slices/catalogSlice';
import { Backdrop, CircularProgress } from '@mui/material';
import { AuthContext } from './context/auth-context';
import { useAuth } from './hooks/auth-hook';
import axios from 'axios';
import Cart from './components/Cart/Cart';
import Catalog from './components/Catalog/Catalog';
import Registration from './components/HeaderMenu/Registration/Registration';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import './styles/App.scss';

function App() {
  const {login, logout, token, userId, isReady, admin} = useAuth();
  const isLogin = !!token;
  const dispatch = useDispatch();
  const {products, preloader} = useSelector(state => state.catalog);

  useEffect(() => {
    axios.get('https://62a089f9202ceef70870490b.mockapi.io/api/v2/products').then(resp => {
      dispatch(getProducts(resp.data))
    })
  }, []);

  console.log('isLogin', isLogin)

  return (
    <AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin, admin}}>
    <div className="App">
      <BrowserRouter>
        <HeaderMenu isLogin={isLogin} logout={logout}/>
        { preloader ?
          <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={preloader}>
            <CircularProgress color="inherit" />
          </Backdrop>
        :
          <Routes>
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/" exact element={<Catalog products={products}/>} />
            <Route path="/registration" exact element={<Registration />} />
          </Routes>
        }
      </BrowserRouter>
    </div>
    </AuthContext.Provider>
  );
}

export default App;

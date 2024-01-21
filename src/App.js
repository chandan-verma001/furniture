import './App.css';
import Header from './components/common/header';
import Footer from './components/common/footer';
import React from 'react';
import {createBrowserRouter,RouterProvider,Routes,Route,Link,BrowserRouter,
} from "react-router-dom";
// page list
// import Index from './pages';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog'
import Cart from './pages/cart'
import Productdetails from './pages/productdetails';
import Shop from './pages/shop';
import Wishlist from './pages/wishlist';
import Login from './pages/login.js'
import Register from './pages/register';
import  Superform  from './pages/superform';


let Notfound = () =>{
  return(
    <>
    NOT FOUND
    </>
  )
}



function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<Shop/>} path='/shop' />
            <Route element={<Cart/>} path='/cart' />
            <Route element={<Blog/>} path='/blog' />
            <Route element={<About/>} path='/about' />
            <Route element={<Login/>} path='/login' />
            <Route element={<Register/>} path='/register' />
            <Route element={<Productdetails/>} path='/productdetails' />
            <Route element={<Wishlist/>} path='/wishlist' />
            <Route element={<Superform/>} path='/superform' />
        </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;

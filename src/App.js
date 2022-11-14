import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import ProductLists from './pages/ProductList';
import ProductItem from './pages/ProductItem'
import About from './pages/About'
import { ContextProvider } from './context/ContextApi';


function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductLists />} />
          <Route path='/products/product/:id' element={<ProductItem />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
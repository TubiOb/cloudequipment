import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Pages/Products';
import Company from './Pages/Company';
import Resources from './Pages/Resources';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Products />}></Route>
          <Route path="/company" element={<Company />} ></Route>
          <Route path='/resources' element={<Resources />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

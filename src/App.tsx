import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/user'
import Homepage from './pages/homepage'
import Detailpage from './pages/detailpage'
import Dashboard from './pages/dashborad'
import ProductUpdate from './pages/product-update'
import AdminLayout from './components/layout/admin'
import ProductAdd from './pages/product-add'
import ProductCart from './pages/product-cart'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/cart' element={<ProductCart />}> </Route>

      <Route path='/' element={<UserLayout />}>
        <Route index element={<Homepage />} />
        <Route path='product/:id' element={<Detailpage />} />
      </Route>

      <Route path='/admin' element={<AdminLayout />} >
        <Route index element={<Dashboard />} />
        <Route path='product/:id' element={<ProductUpdate />} />
        <Route path='add' element={<ProductAdd />} />      </Route>

    </Routes>
  </BrowserRouter>

}

export default App

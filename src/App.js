import React from 'react';
import './styles/main.css';
import Login from './Pages/Login';
import Users from './Pages/Dashboard/User/Users';
import Tenants from './Pages/Dashboard/User/Tenants';
import Iframes from './Pages/Dashboard/User/Iframes';
import Layout from './Components/Layout';
import UpdatePassword from './Pages/Dashboard/UpdatePassword';
import AddIframes from './Pages/Dashboard/AddIframes';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Layout />}>
        <Route index element={<Users />} />
        <Route path=':id' element={<Tenants />} />
        <Route path='/dashboard/iframes/:id' element={<Iframes />} />
        <Route path='/dashboard/tenants/:id' element={<Tenants />} />
        <Route path='/dashboard/iframes' element={<AddIframes />} />
        <Route path='/dashboard/updatePassword' element={<UpdatePassword />} />

        <Route
          path='*'
          element={
            <div className='d-flex justify-center align-center'>
              <h1 className='heading-1'>No Page Found.</h1>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

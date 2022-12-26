import React, {Fragment} from 'react'

import Dashboard from './pages/Dashboard'
import EditUser from './pages/EditUser'
import CreateUser from './pages/CreateUser'
import ErrorPage from './pages/ErrorPage'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <Fragment>
      <h1>Hello, world!</h1>

      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Dashboard />}></Route>
          <Route path={"/edit/:userId"} element={<EditUser />}></Route>
          <Route path={"/create"} element={<CreateUser />}></Route>
          <Route path={"*"} element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
      
    </Fragment>
  )
}
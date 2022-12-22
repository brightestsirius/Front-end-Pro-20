import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import EditUser from "./pages/EditUser";
import CreateUser from "./pages/CreateUser";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <div>
      <h1>Hello, world</h1>
        <Router>
          <Routes>
            <Route path={"/"} element={<Dashboard />}></Route>
            <Route path={"/edit/:userId"} element={<EditUser />}></Route>
            <Route path={"/create"} element={<CreateUser />}></Route>
            <Route path={"*"} element={<ErrorPage />}></Route>
          </Routes>
        </Router>
    </div>
  );
}
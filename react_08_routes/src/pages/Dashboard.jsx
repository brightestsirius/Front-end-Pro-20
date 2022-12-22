import React from "react";

import { Link } from "react-router-dom";

import Table from "./../components/UserTable/Table";
import Filter from "./../components/Filter/Filter";

import UsersContext from "./../context/UsersContext";

import useFilter from "./../hooks/useFilter";

export default function Dashboard() {
  return (
    <div>
      <h3>Dashboard</h3>
      <Link to="/create">Create user</Link>
      <UsersContext.Provider value={useFilter()}>
        <Filter />
        <Table />
      </UsersContext.Provider>
    </div>
  );
}

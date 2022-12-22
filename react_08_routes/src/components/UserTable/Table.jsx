import React, { useEffect } from "react";

import TableItem from "./TableItem";

import useUsers from './../../hooks/useUsers';

export default function Table() {
  const { filteredUsers, renderUsers, deleteUser } = useUsers();

  useEffect(() => {
    renderUsers();
  }, []);

  return (
    <table>
      <tbody>
        {filteredUsers.map((item) => (
          <TableItem key={item.id} item={item} deleteUser={deleteUser} />
        ))}
      </tbody>
    </table>
  );
}
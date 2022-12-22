import { useState, useContext, useMemo } from "react";

import { getUsers, deleteItem } from "./../services/userService";
import UsersContext from "./../context/UsersContext";

import { USER_MARRIED, USER_MARRIED_NON } from "./../constants/user";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const { filterMarried } = useContext(UsersContext);

  const filterUsers = () =>
    users.filter((item) => {
      switch (filterMarried) {
        case USER_MARRIED:
          return item.married;
        case USER_MARRIED_NON:
          return !item.married;
        default:
          return item;
      }
    });

  const filteredUsers = useMemo(() => filterUsers(), [filterMarried, users]);

  const renderUsers = async () => {
    setUsers(await getUsers());
  };

  const deleteUser = async (id) => {
    await deleteItem(id);
    setUsers((prevState) => prevState.filter((item) => item.id !== id));
  };

  return { filteredUsers, renderUsers, deleteUser };
}

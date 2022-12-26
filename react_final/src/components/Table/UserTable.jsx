import React, {useContext} from "react";
import "./style.sass";

import ThemeContext from "../../context/ThemeContext";

import { Link } from "react-router-dom";

import useUsers from './../../hooks/useUsers';

export default function UserTable() {
  const {users, deleteUserHook} = useUsers();
  const {color} = useContext(ThemeContext);

  const handleDelete = async id => {
    await deleteUserHook(id);
    console.log(`Delete user ${id}`);
  }

  return (
    <table style={{color}}>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.married ? `married` : `non-married`}</td>
            <td>
              <Link to={`/edit/${user.id}`}>Edit</Link>
            </td>
            <td>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

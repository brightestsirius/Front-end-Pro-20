import React from "react";
import { Link } from "react-router-dom";

export default function TableItem({ item, deleteUser }) {
  
  const handleDelete = () => deleteUser(item.id);

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.country}</td>
      <td>{item.married ? `❤️` : `🖤`}</td>
      <td>
        <Link to={`/edit/${item.id}`}>Edit</Link>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

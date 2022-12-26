import React from "react";

import { useParams, useNavigate } from "react-router-dom";

import { createUser, changeUser } from "./../../services/userService";

import useUser from "./../../hooks/useUser";

export default function UserForm({ createForm }) {
  const navigation = useNavigate();
  const { userId } = useParams();

  const { user, modifyUser } = useUser(userId);

  const handleInput = (e) => modifyUser(e.target.name, e.target.value);
  const handleCheckbox = (e) => modifyUser(e.target.name, e.target.checked);

  const handleSubmit = async (e) => {
    e.preventDefault();
    createForm ? await createUser(user) : await changeUser(user.id, user);
    navigation(`/`);
  };

  const handleCancel = () => navigation(`/`);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name{" "}
        <input
          name="name"
          type="text"
          defaultValue={user.name}
          onChange={handleInput}
        />
      </label>

      <label>
        Married{" "}
        <input
          name="married"
          type="checkbox"
          defaultChecked={user.married}
          onChange={handleCheckbox}
        />
      </label>

      <div>
        <button>{createForm ? `Create user` : `Save changes`}</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

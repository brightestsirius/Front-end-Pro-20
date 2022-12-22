import React from 'react'
import {useParams, useNavigate} from 'react-router-dom';

import useUser from './../../hooks/useUser';

export default function Form({createForm}) {
  const {userId} = useParams();
  const {user, changeUser, createUser, saveChanges} = useUser(userId);
  const navigation = useNavigate();

  const changeInput = e => changeUser(e.target.name, e.target.value);
  const changeCheckbox = e => changeUser(e.target.name, e.target.checked);

  const handleSubmit = async e => {
    e.preventDefault();
    createForm ? await createUser() : await saveChanges();
    navigation("/");
  }

  const handleCancel = () => navigation("/");

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Name: <input type="text" name="name" defaultValue={user.name} onBlur={changeInput} />
        </label>
        <label>
            Country: <input type="text" name="country" defaultValue={user.country} onBlur={changeInput} />
        </label>
        <label>
            Married: <input type="checkbox" name="married" checked={user.married} onChange={changeCheckbox} />
        </label>
        <button>{createForm ? `Create user` : `Save changes`}</button>
        <button type='button' onClick={handleCancel}>Cancel</button>
    </form>
  )
}
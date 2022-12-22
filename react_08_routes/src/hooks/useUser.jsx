import { useState, useEffect } from "react";

import {getUser, changeItem, addItem} from './../services/userService';

export default function useUser(userId) {
  const [user, setUser] = useState({name: ``, country: ``, married: false});

  useEffect(()=>{
    if(userId){
      (async () => {
        setUser(await getUser(userId));
      })();
    }
  }, [userId])

  const changeUser = (name, value) => setUser(prevState => ({...prevState, [name]: value}));

  const saveChanges = () => changeItem(user.id, user);

  const createUser = () => addItem(user);

  return {user, changeUser, saveChanges, createUser};
}

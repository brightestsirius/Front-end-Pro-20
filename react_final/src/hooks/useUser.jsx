import { useState, useEffect } from "react";

import { getUser } from "./../services/userService";

export default function useUser(userId) {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (userId) {
      (async () => {
        setUser(await getUser(userId));
      })();
    }
  }, []);

  const modifyUser = (key, value) =>
    setUser((prevState) => ({ ...prevState, [key]: value }));

  return { user, modifyUser };
}

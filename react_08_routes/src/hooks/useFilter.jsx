import { useState, useEffect } from "react";
import { USER_ALL } from "./../constants/user";

export default function useFilter() {
  const [filterMarried, setFilterMarried] = useState(localStorage.getItem(`filterMarried`) ? localStorage.getItem(`filterMarried`) : USER_ALL);

  useEffect(() => {
    localStorage.setItem(`filterMarried`, filterMarried);
  }, [filterMarried])
  
  return {filterMarried, setFilterMarried}
}

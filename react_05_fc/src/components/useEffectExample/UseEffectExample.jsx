import React, { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [x, setX] = useState(10);
  const [theme, setTheme] = useState(true); // true => pink, false => black

  useEffect(() => {
    // componentDidMount +
    // componentDidUpdate +
    
    const int = setInterval(() => {
        // service for user
        console.log(`in interval`);
    }, 1000);

    return function(){
        // clear service for user
        // componentWillUnmount
        clearInterval(int);
    }
  }, [])

//   useEffect(() => {
//     // componentDidMount +
//     // componentDidUpdate -
//     // componentWillUnmount -
//     console.log(`in useEffect`);

//     setTimeout(() => {
//       setX((prevState) => prevState + 1);
//     }, 1500);
//   }, []);

//   useEffect(() => {
//     // componentDidMount +
//     // componentDidUpdate + theme
//     // componentWillUnmount
//     console.log(`fetch new theme status`, theme);
//   }, [theme]);

//   useEffect(() => {
//     // componentDidMount +
//     // componentDidUpdate + theme || x
//     console.log(`in useEffect for theme & x`);
//   }, [theme, x]);

  const handleTheme = (e) => {
    setTheme(e.target.checked);
  };

  return (
    <div style={{ background: theme ? `pink` : `black` }}>
      <input type="checkbox" defaultChecked={theme} onChange={handleTheme} />
      {x}
    </div>
  );
}

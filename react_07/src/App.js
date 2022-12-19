import React, {useState} from "react";

import Todo from "./components/Todo";
import ColorSwitcher from "./components/ColorSwitcher";
import CaseSwitcher from "./components/CaseSwitcher";
import BackgroundSwitcher from './components/BackgroundSwitcher'

import { TEXT_COLOR, CASE_CAPITALIZE } from "./constants/theme";

import ThemeContext from "./context/ThemeContext";
import TodoContext from "./context/TodoContext";

import useLocalStorage from './hooks/useLocalStorage';
import useTodo from './hooks/useTodo';

export default function App() {
  
  const [textColor, setTextColor] = useLocalStorage(`textColor`, TEXT_COLOR);
  const [textCase, setTextCase] = useLocalStorage(`textCase`, CASE_CAPITALIZE);
  const {todo, changeCompleted, getList} = useTodo();

  const [bgColor, setBgColor] = useState();

  const liftingBgColor = value => setBgColor(value);

  return (
    <ThemeContext.Provider
      value={{ textColor, setTextColor, textCase, setTextCase, bgColor }}
    >
      <ColorSwitcher />
      <hr></hr>
      <CaseSwitcher />
      <hr></hr>
      <BackgroundSwitcher liftingBgColor={liftingBgColor} />
      <hr></hr>
      <TodoContext.Provider value={{ changeCompleted }}>
        <Todo getList={getList} todo={todo} />
      </TodoContext.Provider>
    </ThemeContext.Provider>
  );
}
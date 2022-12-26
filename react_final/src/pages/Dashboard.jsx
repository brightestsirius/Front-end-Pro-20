import React, {useState} from "react";

import UserTable from "./../components/Table/UserTable";
import ColorPicker from "./../components/ColorPicker/ColorPicker";

import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import ThemeContext from "./../context/ThemeContext";

export default function Dashboard() {
  const [color, setColor] = useState(`#000000`);

  return (
    <div>
      <Button
        component={Link}
        variant="contained"
        to="/create"
        endIcon={<AddCircleIcon />}
        sx={{ mb: 1 }}
      >
        Create user
      </Button>

      <ThemeContext.Provider value={{color, setColor}}>
        <ColorPicker />
        <UserTable />
      </ThemeContext.Provider>
    </div>
  );
}

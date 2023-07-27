import { Box, Typography } from "@mui/material";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import type {UserDataType} from "../types";

const Navbar = () => {
  const [user] = useState<UserDataType>(useAuth());

  return (
    <Box p={"1rem 2rem"} bgcolor={"#007ACC"} display={'flex'} justifyContent={'space-between'}>
      <Typography color={"white"}>App</Typography>
      <Typography color={"white"}>{user.name}</Typography>
    </Box>
  );
};

export default Navbar;

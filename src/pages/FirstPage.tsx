import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import {
  Alert,
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useSetLocalStorage } from "../hooks/useLocalStorage";
import { useLocation, useNavigate } from "react-router-dom";
import type { UserDataType } from "../types";



function FirstPage() {
  
  const navigate = useNavigate();
  
  const [error, setError] = useState<string | null>();

  const [userData, setUserData] = useState<UserDataType>({
    name: "",
    phone_number: "",
    email: "",
  });

  const location = useLocation();
  useEffect(()=>{

    const queryParams = new URLSearchParams(location.search);
    const re = queryParams.get('re');
    if(re) setError("you must enter all the data below to procceed") 
  },[])


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    useSetLocalStorage("user_data", userData);
    navigate("/home");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        p: 2,
      }}
    >
      <Card sx={{ p: 3, width: { xs: "100%", sm: "40rem" } }} elevation={5}>
        <form onSubmit={(e) => submitForm(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography fontWeight={"bold"}>Please Fill The Form</Typography>
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Alert severity="error">{error}</Alert>
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                label="Name"
                required
                variant="outlined"
                fullWidth
                value={userData?.name}
                name="name"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                required
                type="number"
                variant="outlined"
                fullWidth
                value={userData?.phone_number}
                name="phone_number"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                required
                type="email"
                variant="outlined"
                fullWidth
                value={userData.email}
                name="email"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>
  );
}

export default FirstPage;

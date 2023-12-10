import React from "react";
import { Grid, TextField, Button, Box } from "@mui/material";

const Register = () => {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          width: { xs: "30ch", sm: "40ch" },
        }}
      >
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{ width: "100%", marginY: "7px" }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{ width: "100%", marginY: "7px" }}
        />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          sx={{ width: "100%", marginY: "7px" }}
        />
        <Button variant="contained" sx={{ width: "100%", marginTop: "10px" }}>
          Register
        </Button>
      </Box>
    </Grid>
  );
};

export default Register;

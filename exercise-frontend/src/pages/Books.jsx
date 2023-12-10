import React from "react";
import Book from "../components/Book";
import { Grid, Box, TextField } from "@mui/material";

const Books = () => {
  return (
    <Grid container spacing={1}>
      <Grid
        item
        xs={8}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "24px",
          marginTop: "24px",
        }}
      >
        <Book />
        <Book />
        <Book />
        <Book />
      </Grid>
      <Grid item sx={3}>
        <Box>
          <TextField
            id="outlined-basic"
            label="Search Books"
            variant="outlined"
            sx={{ width: "40ch" }}
          />
          <TextField
            id="outlined-basic"
            label="Filter Books"
            variant="outlined"
            sx={{ width: "40ch" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Books;

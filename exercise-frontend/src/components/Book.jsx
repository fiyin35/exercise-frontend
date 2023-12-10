import React from "react";
import BookCover from "../assets/Book cover.jpg";
import { Typography, Grid, Box } from "@mui/material";

const Book = () => {
  return (
    <Grid className="container">
      <Grid xs={3} item>
        <Box
          sx={{
            borderColor: "#d5dbdb",
            borderStyle: "solid",
            borderWidth: "1px",
            minWidth: "210px",
            maxWidth: "300px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* BOOK IMAGE */}
            <Box>
              <img src={BookCover} alt="book cover" />
            </Box>
            {/* BOOK TITLE */}
            <Box>
              <Typography>Title: Book Title</Typography>
            </Box>
            {/* BOOK AUTHOR */}
            <Box>
              <Typography>Writer: Book Writer</Typography>
            </Box>
            {/* BOOK PRICE */}
            <Box>
              <Typography>Price: Book Price</Typography>
            </Box>
            {/* BOOK TAG */}
            <Box>
              <Typography>#fun #novel #drama</Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Book;

import React, { useState } from "react";
import "./Create.css";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  return (
    <Box
    noValidate
    autoComplete="off"
    sx={{ width: "300px" }} component={"form"}>
      <TextField
        onChange={(eo) => {
          setTitle(eo.target.value);
        }}
        fullWidth={true}
        label="Enter your Expens"
        id="outlined-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AddIcon />
              </InputAdornment>
            ),
          },
        }}
      />
      <TextField
        onChange={(eo) => {
          setPrice(Number(eo.target.value));
        }}
        fullWidth={true}
        label="Cash"
        id="outlined-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
      />
      <Button
        onClick={() => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, price }),
          }).then(()=>{
            navigate("/")
          })
        }}
        sx={{ mt: "10px", ml: "10px" }}
        variant="contained"
        color="primary"
      >
        Submit
        <KeyboardArrowRightIcon />
      </Button>
    </Box>
  );
};

export default Create;

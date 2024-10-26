import React, { useEffect, useState } from "react";
import "./Home.css";
import Paper from "@mui/material/Paper";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Typography, IconButton } from "@mui/material";

const Home = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setMyData(data));
  }, [myData]);

  let totalExpense = 0;
  return (
    <Box>
      {myData.map((item) => {
        totalExpense += item.price;
        return (
          <Paper
            key={item.id}
            sx={{
              position: "relative",
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              mt: "20px",
              mb: "20px",
              pt: "27px",
              pd: "7px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ ml: "16px", fonstsize: "1.3em", mb: "10px" }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mr: "33px",
                fonstsize: "1.4em",
                fontWeight: "500",
                mb: "10px",
              }}
            >
              $ {item.price}
            </Typography>
            <IconButton
              onClick={() => {
                fetch(`http://localhost:3100/mydata/${item.id}`, {
                  method: "DELETE",
                });

                const newArr = myData.filter((myObject) => {
                  return myObject.id !== item.id;
                });
                setMyData(newArr);
              }}
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <ClearIcon sx={{ fontsize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}
      <Typography mt="55px" textAlign="center" variant="h5">
        Total Expense : $ {totalExpense}
      </Typography>
    </Box>
  );
};

export default Home;

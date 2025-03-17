import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const Timer = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      py={2}
      bgcolor="#f5f5f5"
    >
      {["15", "23", "15"].map((time, index) => (
        <Grid item key={index}>
          <Box
            width={80}
            height={80}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgcolor="red"
            color="white"
            borderRadius={2}
          >
            <Typography variant="h4" fontWeight="bold">{time}</Typography>
            <Typography variant="body2">{["годин","хвилин","секунд"][index]}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Timer;

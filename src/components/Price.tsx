import React from "react";
import { Stack, Typography } from "@mui/material";
import PercentIcon from "@mui/icons-material/Percent";
import { Opacity } from "@mui/icons-material";

const Price = () => {
  return (
    <Stack
      flexDirection="row"
      justifyContent={{xs: "space-around", md: "center"}}
      alignItems="center"
      gap={{xs: 0, md: 5}}
    >
      <Stack>
        <Typography textTransform="uppercase">Звичайна ціна:</Typography>
        <Stack  flexDirection="row" justifyContent="center" alignItems="center">
          <Typography
            fontSize={30}
            fontWeight="bold"
            sx={{
              textDecoration: "line-through",
              textDecorationThickness: "4px",
            }}
          >
            275
          </Typography>
          <Typography fontSize={30}>грн</Typography>
        </Stack>
      </Stack>
      <PercentIcon fontSize="large" sx={{ opacity: "25%" }} />
      <Stack>
        <Typography textTransform="uppercase">Ціна за акцією:</Typography>
        <Typography fontSize={30} color="warning" fontWeight="bold">
          249 грн
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Price;

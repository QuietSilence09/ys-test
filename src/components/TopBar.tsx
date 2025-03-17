import React from "react";
import { Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PercentIcon from "@mui/icons-material/Percent";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const TopBar = () => {
  return (
    <Stack direction="row"  spacing={3} justifyContent="space-around" color="MenuText" bgcolor="white" p={2} >
      <Stack direction="row" alignItems="center" spacing={1}>
        <StarIcon color="warning" />
        <Stack direction="column">
          <Typography fontWeight="bold">Новинка</Typography>
          <Typography variant="body2">2025 року</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <PercentIcon color="warning" />
        <Stack direction="column">
          <Typography fontWeight="bold">Оплата</Typography>
          <Typography  variant="body2">Після перевірки</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <LocalShippingIcon color="warning" />
        <Stack direction="column">
          <Typography fontWeight="bold">Швидка</Typography>
          <Typography variant="body2">Доставка</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopBar;

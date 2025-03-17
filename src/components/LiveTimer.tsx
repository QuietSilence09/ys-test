import React, { useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const LiveTimer = () => {
  const [time, setTime] = useState({ hours: 15, minutes: 23, seconds: 13 });
  useEffect(() => {
    const interval = setInterval(() => {
        setTime((prev) => {
            let { hours, minutes, seconds } = prev;

            if(seconds > 0){
                seconds -= 1;
            } else {
                if(minutes > 0){
                    minutes -=1;
                    seconds = 59;
                }
                else{
                    hours -=1;
                    minutes = 59;
                    seconds = 59;
                }
            }
            return {hours, minutes, seconds};
        })
    }, 1000);
    return () => clearInterval(interval)
  }, []);
  return <Grid container spacing={2} justifyContent="center" py={2} bgcolor="#f5f5f5">
  {[
    { value: time.hours, label: "годин" },
    { value: time.minutes, label: "хвилин" },
    { value: time.seconds, label: "секунд" },
  ].map(({ value, label }, index) => (
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
        overflow="hidden"
        position="relative"
      >
        <motion.div
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            {String(value).padStart(2, "0")}
          </Typography>
        </motion.div>
        <Typography variant="body2">{label}</Typography>
      </Box>
    </Grid>
  ))}
</Grid>;
};

export default LiveTimer;

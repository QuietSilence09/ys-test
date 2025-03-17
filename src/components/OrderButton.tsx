import { Button } from "@mui/material";

export const OrderButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        
        background: "linear-gradient(180deg, #f2d024 0%, #F79824 100%)",
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase", 
        borderRadius: "8px",       
        
        marginY: 4,
        paddingX: 4,
        paddingY: 1.5,
        fontSize: "1rem",
      }}
    >
      ЗАМОВИТИ ЗАРАЗ
    </Button>
  );
};

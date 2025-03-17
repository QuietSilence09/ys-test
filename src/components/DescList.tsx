import React from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const descriptions = [
  "Якісний гіпоалергенний матеріал",
  "Вирівнювання, приховування недоліків",
  "Акція: -50 грн на другу покупку",
];

const DescList = () => {
  return <List sx={{bgcolor: "white", color: "black"}}>
    {descriptions.map((desc,index) => (
        <ListItem key ={index} sx={{borderBottom: index !== descriptions.length - 1 ? "1px solid #ddd" : "none"}}>
            <ListItemIcon>
                <CheckCircleOutlinedIcon color="warning"/>
            </ListItemIcon>
            <ListItemText primary={desc}/>
        </ListItem>
    ))}
  </List>;
};

export default DescList;

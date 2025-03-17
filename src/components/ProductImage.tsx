import { Box } from '@mui/material'
import React from 'react'
import image from "../assets/image.png"

const ProductImage = () => {
  return (
    <Box display="flex" justifyContent="center" >
        <Box component="img" src={image} alt='Мереживна накидка' sx={{
            width: "100%",
            maxWidth: 300,
            height: "auto",
            borderRadius: 2
        }}/>
    </Box>
  )
}

export default ProductImage
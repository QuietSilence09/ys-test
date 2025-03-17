import { Box } from '@mui/material'
import React from 'react'
import TopBar from './TopBar'
import ProductInfo from './ProductInfo'
import DescList from './DescList'
import Timer from './Timer'
import ProductImage from './ProductImage'
import LiveTimer from './LiveTimer'
import Price from './Price'
import { OrderButton } from './OrderButton'

const ProductCard = () => {
  return (
    <Box bgcolor="#f5f5f5">
        <TopBar/>
        <ProductInfo/>
        <ProductImage/>
        <DescList/>
        <LiveTimer/>
        <Price/>
        <OrderButton/>
    </Box>
  )
}

export default ProductCard
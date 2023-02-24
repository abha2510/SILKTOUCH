import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const CartPage = () => {
  return (
    <div>
            <Box border={"2px solid black"} > 
            <div> <hr></hr></div>
        <Flex gap={25} justifyContent={"space-around"}  w={"60%"} bgColor="blue.100">
           <text>item</text>
          
        {/* </Flex>
        <Flex  gap={55} justifyContent={"space-around"} w={"100%"} bgColor="red.100" ml={"50%"}>  */}
            <text>price</text>
           <text>quantity</text>
           <text>subtotal</text>
           </Flex>
        <div> <hr></hr></div>
            </Box>
    </div>
  )
}

export default CartPage
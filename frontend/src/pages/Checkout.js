import React from 'react';
import {Box, Image} from "@chakra-ui/react"
import logo from "../assets/nbg.png";
const Checkout = () => {
  return (
    <div>
      <Box border={"1px solid black"} height={90} width={"100%"}>
        <Image src={logo} width={"13%"} height={160} ml={255} mt={-8}/>
      </Box>
      <Box bg={'trasparent'}height={200} width={"100%"}>

      </Box>
    </div>
  )
}

export default Checkout;

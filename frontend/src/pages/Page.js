import { Box, Button, Center, Flex, Heading, Image, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Page = () => {
  return (
    <div >
        <Flex  border={"5px solid black"}>

        <Box width={"50%"} p={5} >
            <Image src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/13812005-4724980887145978.jpg" />
        </Box>


        <Box width={"50%"} mt={20} justifyContent={"Center"}  border={"0px solid red"} ml={50} p={10} >
            <Heading fontSize={25} textAlign={'left'} >Best of Dermstore The Necessities Kit - $431 Value</Heading>
            <Box  mt={10}><hr/></Box>
            <Heading fontSize={15} mt={5}>
            Earn 500 reward points when purchasing this product as a rewards member*
            </Heading>
            <Heading fontSize={25} mt={12} textAlign={'left'}>$100.00</Heading>
            <Box  mt={10}><hr/></Box>
            <Flex gap={14}  mt={5}>
                <Box>
                    <Heading fontSize={15} textAlign={'left'} p={2} >Quantity</Heading>
                    <Flex gap={1}>
                       <Button>-</Button>
                       <Button>1</Button>
                       <Button>+</Button>
                    </Flex>
                </Box>
                <Link to="/cartpage">
                <Button mt={8} >Add to cart</Button>
                </Link>
            </Flex>
           <Box  mt={10}><hr/></Box>
        <Box border={"1px solid black"} textAlign={'center'}  w={"60%"} mt={5} >Up to 65% Savings on Best of Dermstore</Box>
       <Heading fontSize={15} fontWeight={"light"} textAlign={'left'} mt={5} >Save up to 65% on Best of Dermstore kits. While stock lasts.</Heading>
     <Box border={"1px solid black"}  mt={5}>Shop All</Box>
        </Box>
        </Flex>
    </div>
  )
}

export default Page
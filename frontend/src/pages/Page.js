import { Box, Button, Center, Flex, Heading, Image, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Page = () => {

let singlePage = JSON.parse(localStorage.getItem("product"))

  return (
    <div >
        <Flex  border={"5px solid black"}>

        <Box width={"50%"} p={5} >

            <Image src={singlePage.img_url_1}  />
            {/* <img src={data[1].img_url_1} alt="img" /> */}
        </Box>


        <Box width={"50%"} mt={20} justifyContent={"Center"}  border={"0px solid red"} ml={50} p={10} >
            {/* <Heading fontSize={25} textAlign={'left'} >{data[1].name}</Heading> */}
            <Box  mt={10}><hr/></Box>
            <Heading fontSize={15} mt={5}>
            Earn 500 reward points when purchasing this product as a rewards member*
            </Heading>
            <Heading fontSize={25} mt={12} textAlign={'left'}>{singlePage.mrp}</Heading>
            <Box  mt={10}><hr/></Box>
            <Flex gap={14}  mt={5}>
                <Box>
                    <Heading fontSize={15} textAlign={'left'} p={2} >{singlePage.quantity}</Heading>
                    <Flex gap={1}>
                       <Button>-</Button>
                       <Button>1</Button>
                       <Button>+</Button>
                    </Flex>
                </Box>
                <Link to="/cartpage">
                <Button mt={8}>Add to cart</Button>
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
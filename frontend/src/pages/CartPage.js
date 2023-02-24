import { border, Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { GiJusticeStar } from "react-icons/gi";
import { FaGooglePay } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { GrPaypal } from "react-icons/gr";
const CartPage = () => {
  return (
    <div>
            <Box border={"0px solid black"}  p={5}> 
            <div> <hr></hr></div>
        <Flex  >
          <Flex gap={25} justifyContent={"left"}  w={"50%"} mt={4} >
          <text>item</text>
          </Flex>
          
        {/* </Flex>
        <Flex  gap={55} justifyContent={"space-around"} w={"100%"} bgColor="red.100" ml={"50%"}>  */}
         <Flex w={"40%"} justifyContent={"space-around"} gap={25} mt={4} >
         <text >price</text>
           <text>quantity</text>
           <text>subtotal</text>
         </Flex>
           </Flex>
        <Box mt={4}> <hr></hr></Box>
            </Box>












            <Box border={"0px solid black"}  p={5}> 
          
        <Flex  >
          <Flex gap={25} justifyContent={"left"}  w={"50%"}  >
         <Image w={"20%"} src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/12915557-2954917112863726.jpg"></Image>
            <Box>
         <Text mt={3}>Oribe Gold Lust Repair Restore Shampoo (8.5 fl. oz.)</Text>
         <Text textAlign={"left"}>In stock</Text>
          <Flex mt={5} gap={2}>

         <AiOutlineHeart/>
         <Text mt={-1.5}>Save to My Favorites</Text>
          </Flex>

            </Box>
          </Flex>
          
        {/* </Flex>
        <Flex  gap={55} justifyContent={"space-around"} w={"100%"} bgColor="red.100" ml={"50%"}>  */}
         <Flex w={"50%"} justifyContent={"space-around"} gap={25} mt={4} >
         <text >$53.00</text>
                    <Flex gap={1}>
                       <Button>-</Button>
                       <Button>1</Button>
                       <Button>+</Button>
                    </Flex>
         <text >$53.00</text>
         <Button>X</Button>
         </Flex>
           </Flex>
        <Box mt={4}> <hr></hr></Box>
            </Box>
     





            <Box border={"0px solid black"}  p={5}> 
           
        
          
        {/* </Flex>
        <Flex  gap={55} justifyContent={"space-around"} w={"100%"} bgColor="red.100" ml={"50%"}>  */}
         <Flex w={"100%"} justifyContent={"space-around"} gap={25} mt={4} >
          <Flex gap={25}> 
           < GiJusticeStar/>
           <Text mt={-1}>Rewards members earn 265 points on this order</Text>
          </Flex>
           <Flex gap={25}>
            <Text>Cart Subtotal:</Text>
            <Text>$550</Text>
           </Flex>
         </Flex>
          
        <Box mt={4}> <hr></hr></Box>
            </Box>



            <Flex justifyContent={"space-around"}>
               <button style={{border:"1px solid black",padding:"5px"}}>Continue Shoping</button>
             <Flex gap={20} size={"20px"} >
             <FaGooglePay size={"20px"}/>
              < GrPaypal />
              <SiPaytm/>
             </Flex>
            </Flex>

    </div>
  )
}

export default CartPage
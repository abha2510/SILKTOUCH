import { border, Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { GiJusticeStar } from "react-icons/gi";
import { FaGooglePay } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { GrPaypal } from "react-icons/gr";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CartPage = () => {
    const [value,setValue]=useState(1);
   const [shop,setshop] = useState([])
   const [total,settotal]=useState(0)   


 const totalSum =()=>{

  let newsum = shop.reduce((aq,current)=>{
   aq+=  current.mrp

   return aq
   
  },0)
  return newsum

 }

 const handleSub=()=>{
  if(value===0){
      return;
  }
  setValue(value-1)
};
const handleAdd=()=>{
  setValue(value+1)
}
//  totalSum()
useEffect(()=>{
  let ttol = totalSum()
  settotal (ttol)
},[])
  useEffect(()=>{

    fetch("https://prickly-beret-goat.cyclic.app/carts",{
       headers:{
        "Authorization":localStorage.getItem("token")
       },
       
   })
   .then(res=>res.json())
   .then(res=>
    setshop(res)
   )

//  console.log(total,"total")
 },[])




  return (
 
     
    <div>
      <Navbar/>
  {/* {
    shop.map((el)=>{
      return <div key={el._id}>
     <h1>{el.name}</h1>
     <img src={el.img_url_1} alt="" />
     <h3>{el.mrp}</h3>

<h4>{total}</h4>
      </div>
    })
  }
        */}



{
 shop.map((el)=>{
  return <div key={el._id}>

<Box border={"0px solid black"}  p={5}> 
            
<div> <hr></hr></div>
<Flex  >
<Flex gap={25} justifyContent={"left"}  w={"50%"} mt={4} >
<text>item</text>
</Flex>

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
<Image w={"20%"} src={el.img_url_1}></Image>
<Box>
<Text mt={3}>Oribe Gold Lust Repair Restore Shampoo (8.5 fl. oz.)</Text>
<Text textAlign={"left"}>In stock</Text>
<Flex mt={5} gap={2}>

<AiOutlineHeart/>
<Text mt={-1.5}>Save to My Favorites</Text>
</Flex>

</Box>
</Flex>


<Flex w={"50%"} justifyContent={"space-around"} gap={25} mt={4} >
<text >${el.mrp}</text>
        <Flex gap={1}>
           <Button disabled={value===0} onClick={()=>handleSub(1)}>-</Button>
           <Button>{value}</Button>
           <Button disabled={value===0} onClick={()=>handleAdd(1)}>+</Button>
        </Flex>
<text >${Math.floor(value*el.mrp)}</text>
<Button>X</Button>
</Flex>
</Flex>
<Box mt={4}> <hr></hr></Box>
</Box>






<Box border={"0px solid black"}  p={5}> 




<Flex w={"100%"} justifyContent={"space-around"} gap={25} mt={4} >
<Flex gap={25}> 
< GiJusticeStar/>
<Text mt={-1}>Rewards members earn 265 points on this order</Text>
</Flex>
<Flex gap={25}>
<Text>Cart Subtotal:</Text>
<Text>${el.total}</Text>
</Flex>
</Flex>

<Box mt={4}> <hr></hr></Box>
</Box>



<Flex justifyContent={"space-around"}>
  <Link to="/checkout">
   <button style={{border:"1px solid black",padding:"5px"}}>Checkout</button>
   </Link>
 <Flex gap={20} size={"20px"} >
 <FaGooglePay size={"50px"}/>
  < GrPaypal size={"50px"}/>
  <SiPaytm size={"50px"}/>
 </Flex>
</Flex>

</div>
})


}

   <Footer/>
    </div>
  )
}

export default CartPage
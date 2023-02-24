import {Box, Center, Flex, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ProductSlider1 from './sliders/ProductSlider1'
import ProductSlider2 from './sliders/ProductSlider2'
import SliderImage from './sliders/Slider'
import BrandSlider from "./sliders/BrandSlider"
import Footer from '../components/Footer'
import { FaShippingFast} from "react-icons/fa";
import { RiBattery2ChargeFill, RiCoinsFill } from "react-icons/ri";
import { MdOutlineSmartphone } from "react-icons/md";
import {FiClock,FiCheck} from "react-icons/fi"
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
 
       <Box bgColor="#f2f2f2" alignItems="center" id="bottom_nav">
        <Box mt={106}
          alignItems="center"
          display="flex"
          py={5}
          pl={20}
          pr={20}
          fontSize="14px"
          justifyContent="space-evenly"
        >
          <Box display="flex" alignItems="center" gap="10px">
            <FaShippingFast size="1.5em" />
            <p>FREE US Sheeping Over $49</p>
          </Box>

          <Box display="flex" alignItems="center" gap="10px">
            <RiCoinsFill size="1.5em" />
            <p> Refer a Friend, Get $15</p>
          </Box>

          <Box display="flex" alignItems="center" gap="10px">
            <RiBattery2ChargeFill size="1.5em" />
            <p>Dermstore Rewards</p>
          </Box>

          <Box display="flex" alignItems="center" gap="10px">
            <FiClock size="1.5em" />
            <p>Ask To Esthetician</p>
          </Box>

          <Box display="flex" alignItems="center" gap="10px">
            <MdOutlineSmartphone size="1.5em" />
            <p>Download Our App</p>
          </Box>

          <Box display="flex" alignItems="center" gap="10px">
            <FiCheck size="1.5em" />
            <p>Refer a Friend,Get$51</p>
          </Box>
        </Box>
      </Box>
      <Box h={"60px"} w={"100%"} p={0} m={0} border={"1px solid #CCCCCC"} bgColor={"#CCCCCC"}>
      <Text mt={3}>Discover all the latest skin, hair and beauty mush-haves. SHOP NEW ARRIVALS</Text>
      </Box>
{/* ------------------------------------------------------ */}
      <Box>
        <SliderImage/>
      </Box>

{/* --------------------------------shop by cateogry---------------------------- */}
<Box width={"80%"} margin={"auto"}>
<Text fontSize={28} mb="14px" mt={20} align="center">Shop by Category</Text>
      <Box mt={8} alignItems='center' w='85%' margin='auto'>

        <Box display={['grid', 'grid', 'flex']} justifyContent='space-between' gridTemplateColumns={'1fr 1fr'} >
          <Link>
            <Image w={205} src='https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png' alt="cat-1" />
          </Link>
          <Link>
            <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/208-us/36/DS_Round_Nav_-_Untitled_Page_%2833%29-085536.png" alt="cat-2" />
          </Link>
          <Link>
            <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/208-us/32/DS_Round_Nav_-_Untitled_Page_%289%29-052632.png" alt="cat-3" />
          </Link>
          <Link>
            <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/208-us/03/DS_Round_Nav_-_Untitled_Page_%2810%29-052703.png" alt="cat-4" />
          </Link>
          <Link>
            <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/208-us/49/DS_Round_Nav_-_Untitled_Page_%2813%29-053649.png" alt="cat-5" />
          </Link>
          <Link>
            <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/208-us/36/DS_Round_Nav_-_Untitled_Page_%2825%29-063536.png" alt="cat-6" />
          </Link>
        </Box>

      </Box>


      {/* ------------------------------Bestsellers------------------------ */}

      <Text fontSize={28} mt={16} mb={"14px"} align="center">Bestsellers</Text>
      <Box mt={6}><ProductSlider1 /></Box>


      {/* -------------------------Get Ready for the Beauty Refresh Sale on March 1st-------- */}

      <Text fontSize={28} mt={16} mb={"14px"}>Get Ready for the Beauty Refresh Sale on March 1st</Text>
      <Stack  direction={{ base: 'column', md: 'row' }} mt={5} gap={5}>
        <Stack>
      <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/38/1027-STDCRE-42686-DS-EF-Cyber-Waitlist_676x556_1-040238.jpg"/>
      <Text fontSize={18}>Earn 250 Points, NOW </Text>
      <p>Become a Dermstore Rewards member & get 250 points just for signing up to save even more at the Beauty Refresh Sale.</p>
       <button style={{border:"2px solid black", padding:"5px",width:"50%",marginLeft:"25%"}}>JOIN NOW</button>
        </Stack>
        <Stack>
      <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/40/1027-STDCRE-42686-DS-EF-Cyber-Waitlist_676x556_2-040240.jpg"/>
      <Text fontSize={18}>Download & Save</Text>
      <p>Download the Dermstore App & be among the first to shop the Beauty Refresh Sale.Become a Dermstore Rewards member</p>
      <button style={{border:"2px solid black", padding:"5px",width:"50%",marginLeft:"25%"}}>SHOP NOW</button>
        </Stack>
        <Stack>
      <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/46/1027-STDCRE-42686-DS-EF-Cyber-Waitlist_676x556_3-040246.jpg"/>
      <Text fontSize={18}>15% Off: That's What Friend </Text>
      <p>Get $15 for every friend you refer to Dermstore & they'll get 15% off (hint: our Beauty Refresh Sale is coming up...................).</p>
      <button style={{border:"2px solid black", padding:"5px",width:"50%",marginLeft:"25%"}}>INVITE NOW</button>
        </Stack>
   </Stack>
          {/* -------------------------------------Banner-------------------- */}
   <Box mt={8}>
    <Image src="https://static.thcdn.com/images/large/webp/widgets/208-us/56/Dermstore_Referral_BAU_Jan__-_Landing_Page_-_New_Page_%281%29-024656.png"/>
    </Box>
      
       {/* ----------------------------------------------slider----------------------------- */}
     
       <Text fontSize={28} mt={16} mb={"14px"} align="center">New Arrivals</Text>
      <Box mt={6}><ProductSlider2 /></Box>

    {/* --------------------------------------------Feature Brands--------------------------- */}
    
    <Text fontSize={28} mt={16} mb={"14px"} align="center">Feature Brand</Text>
    <Box mt={12}>
        <Center>
          <Box display={['grid', 'grid', 'flex']} gap={8} justifyContent='center' gridTemplateColumns={'1fr 1fr'}>
            <Link to="/skin">
              <Image w={205} src='https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png' alt="cat-1" />
            </Link>
            <Link to="/skin">
              <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png" alt="cat-2" />
            </Link>
            <Link to="/skin">
              <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png" alt="cat-3" />
            </Link>
            <Link to="/skin">
              <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png" alt="cat-4" />
            </Link>
            <Link to="/skin">
              <Image w={190} src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png" alt="cat-5" />
            </Link>
            <Link to="/skin">
              <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png" alt="cat-6" />
            </Link>
          </Box>
        </Center>
      </Box>

    {/* -------------------------------------------From The Blog------------------------ */}

    <Text fontSize={28} mt={"20px"} align="center">From The Blog</Text>
          <Box w={['100%', '100%', '100%']}>
            <BrandSlider/>
         </Box>

          </Box>
          {/* <Footer/> */}
    </div>
  )
}

export default Home

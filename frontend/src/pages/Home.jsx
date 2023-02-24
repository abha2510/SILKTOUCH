import {Box, Flex, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ProductSlider1 from './sliders/ProductSlider1'
import ProductSlider2 from './sliders/ProductSlider2'
import SliderImage from './sliders/Slider'
import BrandSlider from "./sliders/BrandSlider"
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
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
    

    <Box mt={8} >
    <Text fontSize={28} mt={16} mb={14} align="center">Feature Brand</Text>
    <Box display={['grid', 'grid', 'flex']} justifyContent={"space-between"} gap={8}>
      <Image h={150} w={280} src="https://static.thcdn.com/images/small/webp/widgets/208-us/34/original-220322-ELTAMD-LOGO-RGB-01_%28002%29-014534.png"/>
      <Image h={150} w={280} src="https://static.thcdn.com/images/small/webp/widgets/208-us/26/original-MicrosoftTeams-image_%283%29-032926.png"/>
      <Image h={150} w={280} src="https://static.thcdn.com/images/small/webp/widgets/208-us/08/SkinMedica-014608.jpg"/>
      <Image h={150} w={280} src="https://static.thcdn.com/images/small/webp/widgets/208-us/21/augustinusbader-124221.gif"/>
      </Box>
    </Box>

    {/* -------------------------------------------From The Blog------------------------ */}

    <Text fontSize={35} mt={"14px"} mb="14px" align="center">From The Blog</Text>
          <Box w={['100%', '100%', '100%']}>
            <BrandSlider/>
         </Box>

          </Box>
          <Footer/>
    </div>
  )
}

export default Home

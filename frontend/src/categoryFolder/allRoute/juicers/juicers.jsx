import React from 'react'
import { useEffect,useState} from 'react';
import "./juicers.css"
import {
  Card, CardBody, Heading, Box, Checkbox, Text, Image, Skeleton, Stack, CloseButton, useDisclosure,Flex,
  Modal, ModalContent, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, Button,Hide
} from '@chakra-ui/react'
import {RiHeartAddFill} from "react-icons/ri"
import { Search2Icon } from '@chakra-ui/icons'
import { AiFillStar, AiOutlineHeart, AiFillHeart,AiOutlineStar } from "react-icons/ai"
 import useCustom from '../../customs/custom';
import { Link } from 'react-router-dom';

const Juicers = () => {
   let [posts,loading,datas,asc,desc,filter,filterBack,cart,loader,wishList,wish,addtocart,wishRemove] = useCustom()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [arr, setArr] = useState([])

  console.log("p", posts)
  if (!datas[0]) {
    datas = posts
  }

 
  useEffect(() => {
    loader("Juicers")
  }, []);

  // converting number of ratings into stars to show in ui
  let star = (n) => {
    if (n > 0 && n <= 1.4) {
      return<>
      <AiFillStar size="1.5rem" />
      <AiOutlineStar size="1.5rem"/>
      <AiOutlineStar size="1.5rem"/>
      <AiOutlineStar size="1.5rem"/>
      <AiOutlineStar size="1.5rem"/>
      </>
    } else if (n >= 1 && n <= 2.4) {
      return <>
        <AiFillStar size="1.5rem" />
        <AiFillStar size="1.5rem" />
        <AiOutlineStar size="1.5rem"/>
        <AiOutlineStar size="1.5rem"/>
        <AiOutlineStar size="1.5rem"/>
      </>
    } else if (n >= 2.5 && n <= 3.4) {
      return <>
        <AiFillStar size="1.5rem" />
        <AiFillStar size="1.5rem" />
        <AiFillStar size="1.5rem" />
        <AiOutlineStar size="1.5rem"/>
        <AiOutlineStar size="1.5rem"/>
      </>
    } else if (n >= 3.5 && n <= 4.4) {
      return <>
        <AiFillStar size="1.5rem" />
        <AiFillStar size="1.5rem" />
        <AiFillStar size="1.5rem" />
        <AiFillStar size="1.5rem" />
        <AiOutlineStar size="1.5rem"/>
      </>
    }else if(n===0){
      return<>
      <AiOutlineStar size="1.5rem"/>
      <AiOutlineStar size="1.5rem"/>
      <AiOutlineStar size="1.5rem"/>
      <AiOutlineStar size="1.5rem"/>
      <AiOutlineStar size="1.5rem"/>
      </>
    } else {
      return <>
        <AiFillStar size="1.5rem" />
        <AiFillStar size="1.5rem" />
        <AiFillStar size="1.5rem" />
        <AiFillStar size="1.5rem" />
        <AiFillStar size="1.5rem" />
      </>
    }
   
  }

  // localStorage.setItem('carts', JSON.stringify(cart))

  // localStorage.setItem('wish', JSON.stringify(wish))

  // if page loads show skeleton
  if (loading) {
    return <Stack>
      <Skeleton height='14vh' />
      <Skeleton height='14vh' />
      <Skeleton height='14vh' />
      <Skeleton height='14vh' /><Skeleton height='14vh' /><Skeleton height='14vh' /><Skeleton height='14vh' />
    </Stack>
  }

  return (
    <>
     <br/><br/><br/><br/><br/><br/>
      <div style={{ display: "flex" }}>
        {/* ui left part */}
        <Box className="m-left">

          {/* filter   feading    */}
          <Card className='filter' bg={'whiteAlpha.900'} w={[100, 150, 200, 300]}>
            <CardBody>
              <Heading size='x' textTransform='uppercase' textStyle='h5'>
                Filters
              </Heading>
            </CardBody>
          </Card>

          {/* filter by brand */}
          <Card className='brand' bg={'whiteAlpha.900'}>
            <Box display='flex'>
              <CardBody>
                Brand
              </CardBody>
              <Hide below='sm'>
              <CardBody>
                <Search2Icon />
              </CardBody>
              </Hide>
            </Box>
            <Box className='checkbox' mt="-2rem">
              <Checkbox onChange={() => { filter('Usha') }}>Usha </Checkbox>
              <Checkbox onChange={() => { filter('Philips') }}>Philips </Checkbox>
              <Checkbox onChange={() => { filter('Kelvinator') }}>Kelvinator </Checkbox>
              <Checkbox onChange={() => { filter('BPL') }}>BPL </Checkbox>
            </Box>
          </Card>
          {/* filter by price and discount */}
          <Card className='brand' bg={'whiteAlpha.900'}>
            <Box display='flex'>
              <CardBody>
                discount
              </CardBody>
              <Hide below='sm'>
              <CardBody>
                <Search2Icon />
              </CardBody>
              </Hide>
            </Box>
            <Box className='checkbox' mt="-2rem">
              <Checkbox onClick={() => { filter('Usha') }}>20% - 25% </Checkbox>
              <Checkbox onClick={() => { filter('Philips') }}>25% - 30%</Checkbox>
              <Checkbox onClick={() => { filter('Kelvinator') }}>30% - 35% </Checkbox>
              <Checkbox onClick={() => { filter('BPL') }}>35% - 40% </Checkbox>
            </Box>
          </Card>
        </Box>
        <Box className='m-right'>
          
          <Card border="1px solid black" h={["7vh","10vh","12vh",'15vh']} p={["0.5rem","1rem","1.5rem",'2rem']}fontSize={["8px","12px","16px",'18x']}>
            <Flex>
            <Box w="80%">
                <Flex>
                <Text w="10%">Sort By :</Text>
                <Text className='text' onClick={asc}>Price(Low-High) </Text> 
                <Text className='text' onClick={desc}>Price(High-Low)</Text>
              </Flex>
              </Box>
              <Link to="/wish">
              <Box w="20%">
              <RiHeartAddFill size="2rem" justifyContent={"flex-end"}/>
              </Box>
              </Link>
            </Flex>
          </Card>
          {/* ui fetched data */}
          {!loading &&
            <Box className="details" h="auto">
              {datas.map((el)=>(
                <Card key={el.id} h={['80vh']} mt={["0.5rem","1rem","1.5rem","2rem"]}>
                  
                  <Box onClick={onOpen} height={"auto"} >
                  <AiOutlineHeart size="1.6rem" marginRight="2px" border="5px solid black"/>
                  </Box>
                  <Image src={el.url} h="68%"/>
                  <Box style={{ height: '32%' }} _hover={{boxShadow:"none"}}>
                    <Box m="auto" w="90%" h="40%" overflow={'hidden'} p="0.2rem">
                    <Text>{el.description}</Text>
                    </Box>
                    <Text border="1px solid black" w="60%" m="auto">&#36;11 SkinCeuticals Gift</Text>
                    <Text><b>&#36; {el.price}</b></Text>
                    <Text style={{ display: "flex", marginLeft: "30%" }}>{el.rating ? star(el.rating) : star(0)}</Text>
                   {/* <Link to="/page"> */}
                    <Button color="white" bg="black" w="100%" borderRadius={"0px"} _hover={{bg:"grey"}} onClick={()=>addtocart(el)}>Add To Cart</Button>
                    {/* </Link> */}
                  </Box>

                  {/* adding to wish list */}
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalContent>
                      <ModalHeader>Please Confirm!!</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Text><b>Do You Want To Add This Item To Your Wish List?</b></Text>
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                          Close
                        </Button>
                        
                        <Button variant='ghost' onClick={() => { wishList(el) }}>Add</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>

                </Card>
              ))}
            </Box>
          }
        </Box>
      </div>
    </>
  )
}

export default Juicers

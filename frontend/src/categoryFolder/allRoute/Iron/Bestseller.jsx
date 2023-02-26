import React from 'react'
import { useEffect,useState} from 'react';
import "./Iron.css"
import {
  Card, CardBody, Heading, Box, Checkbox, Text, Image, Skeleton, Stack, CloseButton, useDisclosure,Flex,
  Modal, ModalContent, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, Button,Hide, SkeletonCircle, SimpleGrid
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { AiFillStar, AiOutlineHeart,AiOutlineStar } from "react-icons/ai"
 import useCustom from '../../customs/custom';
import { getPostsIron, getPostsJuicers } from '../../api/api.action';
import { useDispatch } from 'react-redux';

const Bestsellers = () => {
   let [posts,loading,datas,asc,desc,filter,filterBack,cart,loader,wishList,wish] = useCustom()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()


  let addtocart=(elem)=>{
    let store = JSON.parse(localStorage.getItem("product"))
    if(store==null){ store=[]};
    store.push(elem)
    localStorage.setItem("product",JSON.stringify(store))
    console.log(store)
   }

  // console.log("p", posts)
  if (!datas[0]) {
    datas = posts
  }

  useEffect(() => {
    dispatch(getPostsIron())
  }, []);

  // converting number of ratings into stars to show in ui
  let star = (n) => {
    if (n > 0 && n <= 1.4) {
      <AiFillStar size="1.5rem" />
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
  

  localStorage.setItem('carts', JSON.stringify(cart))

  localStorage.setItem('wish', JSON.stringify(wish))

  // if page loads show skeleton
  if (loading) {
   

    // return <Stack>
    //   <Skeleton height='14vh' />
    //   <Skeleton height='14vh' />
    //   <Skeleton height='14vh' />
    //   <Skeleton height='14vh' /><Skeleton height='14vh' /><Skeleton height='14vh' /><Skeleton height='14vh' />
    // </Stack>
  }

  return (
    <>
     <br/><br/>
      <div style={{ display: "flex" ,marginTop:"80px"}}>
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
              <Box w="50%">
                <Flex>
                <Text w="30%">Sort By :</Text>
                <Text className='text' onClick={asc}>Price(Low-High) </Text> 
                <Text className='text' onClick={desc}>Price(High-Low)</Text>
              
              </Flex>
              </Box>
              <Box w="50%"></Box>
            </Flex>
          </Card>
          {/* ui fetched data */}
          {loading ?(
          <SimpleGrid w="100%" columns={[2, 2, 3]} spacing="40px" pt="10">
          {Array(10)
            .fill("")
            .map((e) => (
              <Box padding="6" h="470px " boxShadow="md" bg="white">
                <Skeleton
                  h="200px"
                  startColor="pink.100"
                  mb="25px"
                  endColor="orange.100"
                  size="10"
                />
                <Skeleton
                  h="16px"
                  w="100%"
                  startColor="orange.300"
                  endColor="pink.200"
                  mb="15px"
                />
                <Skeleton h="16px" w="85%" mb="15px" />
                <Skeleton h="30px" mb="15px" w="55%" />
                <Flex mb="15px">
                  {Array(5)
                    .fill("")
                    .map(() => (
                      <SkeletonCircle
                        endColor="yellow.100"
                        startColor="gold"
                        mr="5px"
                        size="15px"
                      />
                    ))}
                </Flex>
                <Skeleton h="20px" mb="15px" w="30%" />
                <Skeleton h="30px" mb="15px" w="100%" endColor="gray.600" />
              </Box>
            ))}
        </SimpleGrid>
      ) 
          :
            (<Box className="details" h="auto">
              {datas.map((el)=>(
          
                <Card key={el.id} h={['90vh']} mt={["0.5rem","1rem","1.5rem","2rem"]}>
                  
                  <Box onClick={onOpen} height={"auto"} >
                  <AiOutlineHeart size="1.6rem" marginRight="2px" border="5px solid black"/>
                  </Box>
                  <Image src={el.api_featured_image} h="68%"/>
                  <Box style={{ height: '32%' }} _hover={{boxShadow:"none"}}>
                    <Box m="auto" w="90%" h="40%" overflow={'hidden'} p="0.2rem">
                    <Text>{el.name}</Text>
                    </Box>
                    <Text border="1px solid black" w="60%" m="auto">&#36;11 SkinCeuticals Gift</Text>
                    <Text><b>&#36; {el.price}</b></Text>
                    <Text style={{ display: "flex", marginLeft: "30%" }}>{el.rating ? star(el.rating) : star(0)}</Text>
                   {/* <Link to="/page"> */}
                    <Button color="white" bg="black" w="100%" borderRadius={"0px"} _hover={{bg:"grey"}}
                    onClick={()=>addtocart(el)}
                    >Add To Cart</Button>
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
                        
                        <Button variant='ghost' onClick={() => { wishList(el.id) }}>Add</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>

                </Card>
              ))}
            </Box>)
          }
        </Box>
      </div>
    </>
  )
}

export default Bestsellers

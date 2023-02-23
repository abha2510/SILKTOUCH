
import {Alert, AlertIcon, Box,Center,Checkbox,Flex,FormLabel,Heading,Image, Input, InputGroup, InputLeftElement, Select} from "@chakra-ui/react"
import logo from "../assets/nbg.png";
import React from 'react';
import { Stack, Text, Button } from '@chakra-ui/react';
import {MdHome,MdLocationOn} from "react-icons/md";
import {SearchIcon} from "@chakra-ui/icons"

const Checkout = () => {
  return (
    <div>
      <Box border={"1px solid black"} height={90} width={"100%"}>
        <Image src={logo} width={"13%"} height={160} ml={255} mt={-8}/>
      </Box>
  
      <Stack bg={"#f2f2f2"}height={"auto"} width={"100%"} >

    <Stack p="4" boxShadow="lg" borderRadius="sm" bgColor={"white"} mt={10} width={"40%"} ml={"20%"}border={"1px solid black"} letterSpacing={"wider"}>
      <Stack direction="row" alignItems="center">
        <Text fontWeight={700} fontSize={22} fontFamily={"CormorantGaramond Times New Roman serif"}>Login or sign up</Text>
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}>
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'} fontFamily={"Raleway, Helvetica, Arial, sans-serif"}>
        Checkout faster with saved details and get access to exclusive offers 
        </Text>
       
          <Button  bgColor={"black"} color={"white"} p={6} mt={-10}>
            LOGIN/SIGNUP
          </Button>
      </Stack>
    </Stack>

    <Stack>
     
    <Stack p="4" boxShadow="lg" borderRadius="sm" bgColor={"white"} mt={5} width={"40%"} ml={"20%"}border={"1px solid black"} letterSpacing={"wider"}>
      <Stack direction="row" alignItems="center">
        <Text fontWeight={700} fontSize={22} fontFamily={"CormorantGaramond Times New Roman serif"}>Checkout as a guest</Text>
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'column' }}>
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'} fontFamily={"Raleway, Helvetica, Arial, sans-serif"}>
        Complete your order without signing up, or sign up after payment. 
        </Text>

        <Text textAlign={"left"}>1. Email and delivery address</Text>
        <FormLabel>*Email address</FormLabel>
        <Input h="38px" border="1px solid black" mb="30px" isRequired name="email" type='email' placeholder="Enter email" />
        <Text textAlign={"left"} fontSize={"small"}>We'll send the purchase receipt to this email.</Text>
      <Stack direction={{ base: 'column', md: 'row' }}>
       <Button _hover={{border:"1px solid black"}}><MdHome/>Delivery</Button>
       <Button _hover={{border:"1px solid black"}}><MdLocationOn/>Click & Collect</Button>
      </Stack>
      <FormLabel>*Country/Region</FormLabel>
      <Select placeholder='Select option' border={"1px solid black"}>
       <option value='option2'>Canada</option>
       <option value='option3'>United State</option>
    </Select>
    <FormLabel>*Full Name</FormLabel>
     <Input h="38px" border="1px solid black" mb="30px" isRequired name="email" type='email' placeholder="Enter your Full Name" />
     <FormLabel>Address Search</FormLabel>
     <InputGroup border="1px solid gray">
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='black' />}
    />
    <Input type='address' placeholder='Start Typing your address' />
  </InputGroup>
    <Text textAlign={"left"} fontSize={"small"} textDecoration={"underline"}>or Enter Address Manually</Text>
      
    <FormLabel>Contact Number</FormLabel>
    <Input placeholder="Enter Contact Number" border="1px solid black"/>
    <Text textAlign={"left"} fontSize={"small"} textDecoration={"underline"}>Why do we need your number?</Text>
      </Stack>
    </Stack>
    
    </Stack>
    <Stack>
    <Stack p="4" boxShadow="lg" borderRadius="sm" bgColor={"white"} mt={5} width={"40%"} ml={"20%"}border={"1px solid black"}>
    <Text textAlign={"left"}>2. Select Delivery Option</Text>
    <Alert status='info'>
    <AlertIcon />
    Please enter your address so we can calculate your delivery options.
  </Alert>
  </Stack>
    </Stack>
     <Stack>
      <Stack  p="4" boxShadow="lg" borderRadius="sm" bgColor={"white"} mt={5} width={"40%"} ml={"20%"}border={"1px solid black"}>
              <Text textAlign='left'> 3. Select Payment Method</Text>
      <Center>
            <Box w='100%' mt={10} border={"double"} p={6}>
              <Flex justify={'space-between'} cursor='pointer'>
                <Image w={'10%'} src='https://s1.thcdn.com/checkout/resources/images/3c2e42cbf9d0b0df0d3b3bb81aa41d6a.svg' alt='1' />
                <Image w={'10%'} src='https://s1.thcdn.com/checkout/resources/images/57987be4eb98b4c77644d93d92df80fa.svg' alt='1' />
                <Image w={'10%'} src='https://s1.thcdn.com/checkout/resources/images/932e82ef072c7df18e91e66b96dfdf5d.svg' alt='1' />
                <Image w={'10%'} src='https://s1.thcdn.com/checkout/resources/images/6732c0137a7dab50b23daf1337fe2f30.svg' alt='1' />
                <Image w={'10%'} src='https://s1.thcdn.com/checkout/resources/images/0528692e7541ff3755880b3408793969.svg' alt='1' />
                <Image w={'10%'} src='https://s1.thcdn.com/checkout/resources/images/8ba3dc816042268141a2205e3bfc3971.svg' alt='2' />
                <Image w={'10%'} src='https://s1.thcdn.com/checkout/resources/images/248074ffdeeeaeffed9c5db35f35fe45.svg' alt='2' />
              </Flex>
              <Text fontSize={'15'} textAlign='left' mt={7} >* Card Number</Text>
              <Input placeholder='Enter Card Number' mt={'2'} ></Input>
              <Text fontSize={'15'} textAlign='left' mt={7} >* Name on card</Text>
              <Input placeholder='Enter Name on card' mt={'2'} ></Input>
              <Text fontSize={'15'} textAlign='left' mt={7} >* Expiry Date</Text>

              <Flex justify={'space-between'} >
                <Select placeholder='Month'>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </Select>
                <Select placeholder='Year'>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                  <option>32</option>
                  <option>33</option>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                  <option>38</option>
                  <option>39</option>
                  <option>40</option>
                </Select>
              </Flex>
              <Text fontSize={'15'} textAlign='left' mt={7} >* Security Code (CV2)</Text>
              <Input placeholder='Enter CVV' mt={'2'}  ></Input>
              <Checkbox defaultChecked float={"left"} mt={5}>Use my shipping address as my cardholder address</Checkbox>
            </Box>
          </Center>


      </Stack>
     </Stack>
     
      </Stack>
    </div>
  )
}

export default Checkout;

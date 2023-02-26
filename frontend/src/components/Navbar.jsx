import {
  border,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../assets/nbg.png";
import "../css/Navbar.css";
import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import { VscAccount } from "react-icons/vsc";
import { FaShippingFast, FaShoppingCart } from "react-icons/fa";
import { RiBattery2ChargeFill, RiCoinsFill } from "react-icons/ri";
import { MdLocalOffer, MdOutlineSmartphone } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { TbDiscount2, TbGift } from "react-icons/tb";
import { HiMenu } from "react-icons/hi"
import { VscReferences } from "react-icons/vsc";
import { CgSearch } from "react-icons/cg"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons'
import { userLogin, userLogout } from '../Redux/auth.action'
import {HiHome} from "react-icons/hi"
import {MdKeyboardArrowRight} from "react-icons/md";
const data =require("./seach.json")

const Navbar = () => {
  const [value, setValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  // const cartItems = useSelector((state) => state.cartManager.products);
  // const username = useSelector((state) => state.authManager.userdata.username);
  // const isAuth = useSelector((state) => state.authManager.isAuth)
  const btnRef = React.useRef();
  const toast = useToast();

  const handleLogOut = () => {
    // if (!isAuth) {
    //     toast({
    //         position: 'top-left',

    //         duration: 1200,

    //         render: () => (
    //             <Flex color='white' border="4px solid white" p={"10px"} bgColor='red' >

    //                 <WarningIcon w={30} h={30} /><Text size="lg" ml="15px">You have not Signed in yet!!!</Text>
    //             </Flex >
    //         ),
    //     })

    // } else {

    //     toast({
    //         position: 'top-left',
    //         duration: 1200,
    //         render: () => (
    //             <Flex color='white' border="4px solid white" p={"10px"} bgColor='green.400'>

    //                 <CheckCircleIcon w={30} h={30} /><Text size="lg" ml="15px">You have not Signed Out Successfully!!!</Text>
    //             </Flex >
    //         ),
    //     })
    //     dispatch(userLogout())
    // }



}
  return (
    <div>
      <Box id="top-bar"
        style={{
          backgroundColor: "#F2F2F2",
          padding: "10px",
          paddingRight: "30px",
          position: "sticky",
         
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItem: "center",
            gap: "50px",
            flexDirection: "row-reverse",
          }}
        >
          <Text>Help</Text>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",

            }}
          >
            <Image
              style={{ width: "20px", height: "20px", borderRadius: "50%" }}
              src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
            />
            <Text>us - USD</Text>
          </Box>
        </Box>
      </Box>
      <Box position={'fixed'} top='0px' zIndex={100} bgColor='white' w='100%'mt={"-5px"}>
        <Box id="after-top"  >

          <Box mt={-12} >
            <Link to='/'>
              <Box >
                <Image
                className="logo"
                src={logo}
                alt="logo"
                border={"0px solid black"}
               
              />
              </Box>
            </Link>

          </Box>

              <Flex>
              <Stack
                spacing={3}
                w={["200px", "300px", "400px"]}
                ml={["15%", "15%", "10%"]}
                // mt={"99px"}
              >
                <Box position={"absolute"} marginTop={"-35px"} >
                  <InputGroup width={"120%"} ml={"-20px"}>
                    <InputLeftElement
                      p={6}
                      pointerEvents="none"
                      children={
                        <SearchIcon
                          color="gray.500"
                          ml={"8px"}
                          fontSize={15}
                          
                        />
                      }
                    />

                    <Input
                      value={value}
                      onChange={onChange}
                      type="text"
                      placeholder="Search for a Product or a Brand"
                      width={["50%", "50%", "100%"]}
                      h={["25px", "30px", "45px"]}
                      color={"black"}
                      borderWidth="1px"
                      fontSize={["8px", "8x", "15px"]}
                      boxShadow={
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                      }
                    />

                  </InputGroup>

                  {/* -------------------------- search dropdown--------------------------------------------------------- */}

                  <Box
                    zIndex={99}
                    position="relative"
                    className="dropdown"
                    // boxShadow={
                    //   "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                    // }
                    fontSize={"14px"}>
                    {data
                      .filter((item) => {
                        const searchTerm = value.toLowerCase();
                        const fullName = item.name.toLowerCase();

                        return (
                          searchTerm &&
                          fullName.startsWith(searchTerm) &&
                          fullName !== searchTerm
                        );
                      })
                      .slice(0, 10)
                      .map((item) => (
                        <Link to={item.href}>
                          <Flex>
                            <SearchIcon
                              color="gray.500"
                              mt={"20px"}
                              ml={"10px"}
                              fontSize={15}
                            />
                            <Box
                              padding={4}
                              onClick={() => onSearch(item.name)}
                              key={item.name}>
                              {item.name}
                            </Box>
                          </Flex>
                        </Link>
                      ))}
                  </Box>
                </Box>
              </Stack>
            </Flex>

          <div style={{ display: "flex", gap: "50px" ,width:"150px",marginTop:"-30px"}} >
            <div id="dropdown-account">
              <div >
                <Link to="/register" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <VscAccount size="1.6em" />Account
                  {/* <Text>{isAuth ? username : "Account"}</Text> */}
                </Link>
              </div>
              <div id="dropdown-account-content">
              {/* <Button onClick={handleLogOut}
                  colorScheme="none"
                  w="full"
                  bgColor="black"
                  borderRadius={0}
                >
                  LOGOUT
                </Button>:<Link to="/login"><Button
                colorScheme="none"
                w="full"
                bgColor="black"
                borderRadius={0}
              >
                LOGIN
              </Button></Link> */}
             <Link to="/login">
              <Button
              colorScheme="none"
              w="full"
              bgColor="black"
              borderRadius={0}>LOGIN</Button>
              </Link>
                <Link to="/register">
                  <Button
                    colorScheme="none"
                    mt={4}
                    borderRadius={0}
                    color="black"
                    w="full"
                    variant="outline"
                  >
                    REGISTER
                  </Button>
                </Link>

                <div
                  style={{
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    marginTop: "20px",
                    fontSize: "16px",
                  }}
                >
                  <p>My Favorites</p>
                  <p>Your Orders</p>
                  <p>Your Auto-Replenishments</p>
                  <p>Your Referrels</p>
                </div>
              </div>
            </div>

            <div class="dropdown">
              <Link to="/cartpage"><div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                <div id="cart-icon">
                  <FaShoppingCart size="1.6em" />
                  {/* <p className="cartValue">{cartItems.length}</p> */}
                </div>
                 
                <Text>Cart</Text>
              </div></Link>
              <div class="dropdown-content">
                {/* <p>{`There are currently ${cartItems.length} items in your cart.`}</p> */}
              </div>
            </div>
          </div>
        </Box>

        <Box id="menu_nav"  mt={-14} borderBottom='1px solid gainsboro'>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-evenly"
            width="84%"
            margin="auto"
            id="hover-black"
          >
            <Link to=''><div id="menu-title">Brands</div></Link>
            <div id="menu-dropdown">
              <Link to='/browserby'><div id="menu-title">Brower By</div></Link>
              <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Brands
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>SkinCeuticals</p></Link>
                      <Link to=''><p>EltaMD</p></Link>
                      <Link to=''><p>SkinMedica</p></Link>
                      <Link to=''><p>Obagi</p></Link>
                      <Link to=''><p>iS Clinical</p></Link>
                      <Link to=''><p>Eminence Organic SkinCare</p></Link>
                      <Link to=''><p>Neocutis</p></Link>
                      <Link to=''><p>Oribe</p></Link>
                      <Link to=''><p>Sunday Riley</p></Link>
                      <Link to=''><p>PCA SKIN</p></Link>
                    </div>
                  </div>
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Corcern
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Acne</p></Link>
                      <Link to=''><p>Acene Scars</p></Link>
                      <Link to=''><p>Aging Skin</p></Link>
                      <Link to=''><p>Blackheads</p></Link>
                      <Link to=''><p>Dark Circles</p></Link>
                      <Link to=''><p>Dark Spots</p></Link>
                      <Link to=''><p>Rosacea</p></Link>
                      <Link to=''><p>Oil Control</p></Link>
                      <Link to=''><p>Irritated Skin</p></Link>
                      <Link to=''><p>Large Pores</p></Link>
                      <Link to=''><p>Strech Marks</p></Link>
                      <Link to=''><p>Wrinkles</p></Link>
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Skin Type
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Acne-Prones skin</p></Link>
                      <Link to=''><p>Sensitive Skin</p></Link>
                      <Link to=''><p>Dry Skin</p></Link>
                      <Link to=''><p>Mature Skin</p></Link>
                      <Link to=''><p>Combination Skin</p></Link>
                      <Link to=''><p>Oily Skin</p></Link>
                      <Link to=''><p>Normal Skin</p></Link>
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                     Ingredient 
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Vitamin C</p></Link>
                      <Link to=''><p>Hyaluronic Acid</p></Link>
                      <Link to=''><p>Retinol</p></Link>
                      <Link to=''><p>Antioxidants</p></Link>
                      <Link to=''><p>Zinc Oxide</p></Link>
                      <Link to=''><p>Niacinamide</p></Link>
                      <Link to=''><p>Peptides</p></Link>
                      <Link to=''><p>Glycolic Acid</p></Link>
                      <Link to=''><p>Vitamin A</p></Link>
                      <Link to=''><p>Lactic Acid</p></Link>
                    </div>
                  </div>
                </Box>
              </div>
            </div>

            <div id="menu-dropdown">
              <Link to='/bestseller'> <div id="menu-title">Bestsellers</div></Link>
              <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div>
                      <div
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "20px",
                          paddingLeft: "30px",
                          paddingRight: "30px",
                          backgroundColor: "#f1f1f1",
                          border: "2px solid #f1f1f1",
                          borderRadius: "10px",
                        }}
                      >
                        <Flex gap={4} alignItems="center">
                          <BiDollar size="1.5em" />
                          <Link to=''> <p style={{ fontSize: "20px" }}>Sale</p></Link>
                        </Flex>
                      </div>
                      <div
                        style={{
                          paddingTop: "20px",
                          marginTop: "20px",
                          paddingBottom: "20px",
                          paddingLeft: "30px",
                          paddingRight: "30px",
                          backgroundColor: "#f1f1f1",
                          border: "2px solid #f1f1f1",
                          borderRadius: "10px",
                        }}
                      >
                        <Flex gap={4} alignItems="center">
                          <MdLocalOffer size="1.5em" />
                          <Link to=''><p style={{ fontSize: "18px" }}>All Coupons</p></Link>
                        </Flex>
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "20px",
                          paddingLeft: "30px",
                          paddingRight: "30px",
                          backgroundColor: "#f1f1f1",
                          border: "2px solid #f1f1f1",
                          borderRadius: "10px",
                        }}
                      >
                        <Flex gap={4} alignItems="center">
                          <Link to=''><p style={{ fontSize: "18px" }}>Key Workers Discount</p></Link>
                        </Flex>
                      </div>
                      <div
                        style={{
                          paddingTop: "20px",
                          marginTop: "20px",
                          paddingBottom: "20px",
                          paddingLeft: "30px",
                          paddingRight: "30px",
                          backgroundColor: "#f1f1f1",
                          border: "2px solid #f1f1f1",
                          borderRadius: "10px",
                        }}
                      >
                        <Flex gap={4} alignItems="center">
                          <TbDiscount2 size="1.5em" />
                          <Link to=''><p style={{ fontSize: "18px" }}>Fetures Offer</p></Link>
                        </Flex>
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "20px",
                          paddingLeft: "30px",
                          paddingRight: "30px",
                          backgroundColor: "#f1f1f1",
                          border: "2px solid #f1f1f1",
                          borderRadius: "10px",
                        }}
                      >
                        <Flex gap={4} alignItems="center">
                          <VscReferences size="1.5em" />
                          <p style={{ fontSize: "18px" }}>Refer a Friend</p>
                        </Flex>
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "20px",
                          paddingLeft: "30px",
                          paddingRight: "30px",
                          backgroundColor: "#f1f1f1",
                          border: "2px solid #f1f1f1",
                          borderRadius: "10px",
                        }}
                      >
                        <Flex gap={4} alignItems="center">
                          <TbGift size="1.5em" />
                          <p style={{ fontSize: "18px" }}>Gift and Sets</p>
                        </Flex>
                      </div>
                    </div>
                  </div>
                </Box>
              </div>
            </div>

            <div id="menu-dropdown">
              <Link to="/mobiles"><div id="menu-title">Skin Care</div></Link>
              <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Cleansers & Exfoliators
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=""><p>Cleansers</p></Link>
                      <Link to=""><p>Exfoliants,Peels & Scrubs</p></Link>
                      <Link to=""><p>Toners & Mist</p></Link>
                      <Link to=""><p>Face Wash</p></Link>
                      <Link to=""><p>Makeup Remover</p></Link>
                      <Link to=""><p>Men's Cleanser & Exfoliators</p></Link>
                    
                    </div>
                  </div>
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Treatments And Serums
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=""><p>Face Serums</p></Link>
                      <Link to=""><p>Face Masks</p></Link>
                      <Link to=""><p>Neck Cream</p></Link>
                      <Link to=""><p>Wrinkel Cream</p></Link>
                      <Link to=""><p>Acne Treatments</p></Link>
                      <Link to=""><p>Dark Spot Corrector</p></Link>
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                     Moisturizers
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=""><p>Face Moisturizer</p></Link>
                      <Link to=""><p>Face Oils</p></Link>
                      <Link to=""><p>Night Cream</p></Link>
                      <Link to=""><p>Tinted Moisturizers</p></Link>
                      <Link to=""><p>Essences</p></Link>
                      <Link to=""><p>Men's Moisturizers & Treatments</p></Link>
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                        Eye Care
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <p>Eye Cream & Moisturizers</p>
                      <p>Eye Treatments & Serum</p>
                      <p>Eye Masks</p>
                  
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Lip Care
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=""><p>Lip Balms & Treatments</p></Link>
                      
                    </div>
                  </div>
                </Box>
              </div>
            </div>

            <div id="menu-dropdown">
              <Link to=''><div id="menu-title">Hair Care</div></Link>
              <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Shop  By Category
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Shampoo</p></Link>
                      <Link to=''><p>Dry Sampoo</p></Link>
                      <Link to=''><p>Conditioner</p></Link>
                      <Link to=''><p>Hair Loss Products</p></Link>
                      <Link to=''><p>Anti-Dandruff & Scalp Care</p></Link>
                      <Link to=''><p>Hair Treatments</p></Link>
                      <Link to=''><p>Styling Products</p></Link>
                      <Link to=''><p>Tools & Brushes</p></Link>
                      <Link to=''><p>Natural Hair Care</p></Link>
                    </div>
                  </div>
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                     Shop By Hair Type
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''> <p>Coarse</p></Link>
                      <Link to=''> <p>Frizzy</p></Link>
                      <Link to=''> <p>Color-Treated</p></Link>
                      <Link to=''> <p>Curly</p></Link>
                      <Link to=''> <p>Dry or Damaged</p></Link>
                      <Link to=''> <p>Fine</p></Link>
                      <Link to=''><p>Oily</p></Link>
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                        More
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Anti Dandruff Scale Care</p></Link>
                      <Link to=''><p>Coarse & Textured Hair</p></Link>
                      <Link to=''><p>Colored hair</p></Link>
                      <Link to=''><p>Curly & Wavy Hair</p></Link>
                      <Link to=''><p>Damaged Hair</p></Link>
                      <Link to=''><p>Dry Hair</p></Link>
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Electrical
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <p>Flat Irons</p>
                      <p>Hair Dryers</p>
                      <p>Rollers & Curling Tongs</p>
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Hair Removal
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Hair Removal Devices</p></Link>
                      <Link to=''><p>Hair Removal Products</p></Link>
                      <Link to=''><p>Men Shaving Products</p></Link>
                    </div>
                  </div>
                </Box>
              </div>
            </div>

            <div id="menu-dropdown">
              <Link to='/makeup'><div id="menu-title">Makeup</div></Link>
              <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Shop  By Category
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Shampoo</p></Link>
                      <Link to=''><p>Dry Sampoo</p></Link>
                      <Link to=''><p>Conditioner</p></Link>
                      <Link to=''><p>Hair Loss Products</p></Link>
                      <Link to=''><p>Anti-Dandruff & Scalp Care</p></Link>
                      <Link to=''><p>Hair Treatments</p></Link>
                      <Link to=''><p>Styling Products</p></Link>
                      <Link to=''><p>Tools & Brushes</p></Link>
                      <Link to=''><p>Natural Hair Care</p></Link>
                    </div>
                  </div>
                  </Box>
            </div>
            </div>
            <div>
              <Link to='/bath&beauty'><div id="menu-title">Bath & Body</div></Link>
            </div>
            <div>
              <Link to=''><div id="menu-title">Fragrance Shop</div></Link>
            </div>
            <div>
              <Link to=""><div id="menu-title">Gift & Sets</div></Link>
            </div>
            <div>
              <Link to=''><div id="menu-title">BeautyFIX</div></Link>
            </div>
            <div>
              <Link to=''><div id="menu-title">Offers</div></Link>
            </div>
            <div>
              <Link to=''><div id="menu-title">New</div></Link>
            </div>
            <div>
              <Link to=''><div id="menu-title">Skin 101</div></Link>
            </div>
          </Box>
        </Box>
      </Box>


      <div id="mobile_bar" style={{position : "fixed", backgroundColor : "white", width : "100%", top:"0", zIndex: "100", marginBottom: "300px", borderBottom: "1px solid gainsboro"}}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ marginLeft: "30px" }}>
            <HiMenu ref={btnRef} colorScheme="teal" onClick={onOpen} size="1.6em" />
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
              height="100vh"
              size="xs"
              
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                {/* {
                  isAuth? */}
                   <DrawerHeader onClick = {onClose} display="flex" gap={12}>
                    {/* <Text > {isAuth ? "Hii " + username : "Account"}</Text> */}
                    <Link to="/">
                    <Button bgColor="black" color="white" colorScheme="none"><HiHome/> {" "}Home</Button>
                    </Link>
                </DrawerHeader> : <DrawerHeader >
                <Link to="/login" onClick={onClose}>
                  <Button bgColor="black" color="white" colorScheme="none">Login</Button>
                </Link>
                <Link to="/register" onClick={onClose}>
                  <Button variant="outline" border=" 1px solid black" ml={4} colorScheme="none">Register</Button>
                </Link>
              </DrawerHeader>
                {/* } */}

                <DrawerBody>
                  <Box display="flex" flexDirection="column" gap="20px">
                    <Flex justifyContent={"space-between"} mt={2}>
                    <Link to="" onClick={onClose}>Brands</Link>
                    <MdKeyboardArrowRight/>
                    </Flex>
                    <Flex>
                    <Link to="" onClick={onClose}>Browse By</Link>
                    </Flex>
                    <Flex justifyContent={"space-between"} mt={2}>
                    <Link to="" onClick={onClose}>Bestsellers</Link>
                    </Flex>
                    <Flex justifyContent={"space-between"} mt={2}>
                    <Link to="" onClick={onClose}>Skin Care</Link>
                    <MdKeyboardArrowRight/>
                    </Flex>
                    <Flex justifyContent={"space-between"} mt={2}>
                    <Link to="" onClick={onClose}>Hair Care</Link>
                    <MdKeyboardArrowRight/>
                    </Flex>
                    <Flex justifyContent={"space-between"} mt={2}>
                    <Link to="" onClick={onClose}>Makeup</Link>
                    <MdKeyboardArrowRight/>
                    </Flex>
                    <Flex justifyContent={"space-between"} mt={2}>
                    <Link to="" onClick={onClose}>Tools & Devices</Link>
                    <MdKeyboardArrowRight/>
                    </Flex>
                    <Flex justifyContent={"space-between"} mt={2}>
                    <Link to="" onClick={onClose}>Bath & Body</Link>
                    <MdKeyboardArrowRight/>
                    </Flex>
                    <Flex justifyContent={"space-between"} mt={2}>
                    <Link to="" onClick={onClose}>Fragrance Shop</Link>
                    <MdKeyboardArrowRight/>
                    </Flex>
                    <Flex justifyContent={"space-between"} mt={2}>
                    <Link to="" onClick={onClose}>Gifts & Sets</Link>
                    <MdKeyboardArrowRight/>
                    </Flex>
                    <Flex justifyContent={"space-between"} mt={2}>
                    <Link to="" onClick={onClose}>BeautyFIX</Link>
                    <MdKeyboardArrowRight/>
                    </Flex>
                    <Flex justifyContent={"space-between"} mt={2}>
                    <Link to="" onClick={onClose}>Offers</Link>
                    <MdKeyboardArrowRight/>
                    </Flex>
                    <Flex justifyContent={"space-between"} mt={2}>
                    <Link to="" onClick={onClose}>New</Link>
                    <MdKeyboardArrowRight/>
                    </Flex>
                    <Flex justifyContent={"space-between"} mt={2}>
                    <Link to="" onClick={onClose}>Skin 101</Link>
                    <MdKeyboardArrowRight/>
                    </Flex>
                    
                  </Box>
                  <Box>
                    <Flex justifyContent={"space-between"} mt={5}>
                      <Box>
                  <Image
                 style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                 src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                       />
                    
                    </Box>
                    <Box>
                      <Text textDecoration={"underline"}>Change</Text>
                    </Box>
                    </Flex>
                  </Box>
                </DrawerBody>

              </DrawerContent>
            </Drawer>
          </div>

        <Image src={logo} h={70} w={130}/>

         <Box ml={270}>

          {/* <CgSearch size="1.5em" /> */}
         </Box>
        </div>

        <div>
          <Link to="/">
            <img style={{ width: "90px", height: "25px" }} src={logo} alt="logo" />
          </Link>
        </div>

        <div style={{ display: "flex", gap: "30px", alignItems: "center",align:"right" }}>
          <Link to="/login">
            <VscAccount size="1.6em" />
          </Link>
          <div class="dropdown" style={{ paddingRight: "50px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div id="cart-icon">
                <Link to="/carts">
                  <FaShoppingCart size="1.6em" />
                  {/* <p className="cartValue">{cartItems.length}</p> */}
                </Link>

              </div>
            </div>
          </div>
        </div>
      
      </div>
      
    </div>
   
  );
};

export default Navbar;

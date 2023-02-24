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
  InputRightElement,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/nbg.png";
import "../css/Navbar.css";
import { Search2Icon } from "@chakra-ui/icons";
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
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
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

          <div id="search-bar" style={{marginTop:"-30px"}}>
            <InputGroup>
              <Input placeholder="Search for a Product or a Brand" />
              <InputRightElement children={<Search2Icon color="gray.500" />} />
            </InputGroup>
          </div>

          <div style={{ display: "flex", gap: "50px" ,marginTop:"-30px"}}>
            <div id="dropdown-account">
              <div >
                <Link to="/register" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <VscAccount size="1.6em" />
                  {/* <Text>{isAuth ? username : "Account"}</Text> */}
                </Link>
              </div>
              <div id="dropdown-account-content">
              <Button onClick={handleLogOut}
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
              </Button></Link>
              
                <Link to="/signup">
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
                  <p>Wishlist</p>
                  <p>Your Orders</p>
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
              <Link to='/mobiles'><div id="menu-title">Brower By</div></Link>
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
                      Populer Categories
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Show All Products by Beuty Gift</p></Link>
                      <Link to=''><p>Our Favorite Beuty Gift Sets</p></Link>
                      <Link to=''><p>Skinstore Exclusive Gifts</p></Link>
                      <Link to=''><p>SkinStore's Holiday Edit Box</p></Link>
                      <Link to=''><p>Holiday Gift Ideas for Her</p></Link>
                      <Link to=''><p>Holiday Gift Ideas for Him</p></Link>
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
                      By Gift Idea
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Budget Friendly and Small Gifts</p></Link>
                      <Link to=''><p>Stocking Stuffer Ideas</p></Link>
                      <Link to=''><p>Thoughtful Gifts for Smart Splurges</p></Link>
                      <Link to=''><p>Luxury Holiday Gifts</p></Link>
                      <Link to=''><p> Last Minute Gift Ideas</p></Link>
                      <Link to=''><p>Gifts For You</p></Link>
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
                      By Price
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Gifts Under $25</p></Link>
                      <Link to=''><p>Gifts Under $50</p></Link>
                      <Link to=''><p>Gifts Under $100</p></Link>
                      <Link to=''><p>Gifts Over $100</p></Link>
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
                      By Category
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Skin Care Gifts</p></Link>
                      <Link to=''><p>Body Care Gifts</p></Link>
                      <Link to=''><p>Home Scents and Candle Gifts</p></Link>
                      <Link to=''><p>Makeup Gifts</p></Link>
                      <Link to=''><p>Hair Care Gifts</p></Link>
                      <Link to=''><p>Beauty Tools and Hair Styling Gifts</p></Link>
                    </div>
                  </div>
                </Box>
              </div>
            </div>

            <div id="menu-dropdown">
              <Link to='/iron'> <div id="menu-title">Bestsellers</div></Link>
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
                      Populer Categories
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=""><p>View All Skin Care</p></Link>
                      <Link to=""><p>New In</p></Link>
                      <Link to=""><p>Clean skincare</p></Link>
                      <Link to=""><p>5 Rated Products</p></Link>
                      <Link to=""><p>Gift and Sets</p></Link>
                      <Link to=""><p>Suprizes & Duo</p></Link>
                      <Link to=""><p>Travel Sizes</p></Link>
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
                      By Product Types
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=""><p>Cleaners</p></Link>
                      <Link to=""><p>Moisturizers</p></Link>
                      <Link to=""><p>Serums</p></Link>
                      <Link to=""><p>Eye Serum</p></Link>
                      <Link to=""><p>Exfoliators</p></Link>
                      <Link to=""><p>Masks</p></Link>
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
                      By Ingredient
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=""><p>Vitamin C</p></Link>
                      <Link to=""><p>AHA</p></Link>
                      <Link to=""><p>Caffeine</p></Link>
                      <Link to=""><p>Retinol</p></Link>
                      <Link to=""><p>Lactic Acid</p></Link>
                      <Link to=""><p>Salicylic Acid</p></Link>
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
                      By Specific Concern
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <p>Acne & Blemishes</p>
                      <p>Fine Lines & Wrinkes</p>
                      <p>Dark Circles</p>
                      <p>Dry Skin</p>
                      <p>Dullness</p>
                      <p>Lack of Firmness</p>
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
                      Sunscreen & Suncare
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=""><p>Take the SPF Quiz</p></Link>
                      <Link to=""><p>SPF 30 and Over</p></Link>
                      <Link to=""><p>SPF 50 and Over</p></Link>
                      <Link to=""><p>After Sun</p></Link>
                      <Link to=""><p>Tinted</p></Link>
                      <Link to=""><p>Mineral</p></Link>
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
                      Populer Categories
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>View All Hair Care</p></Link>
                      <Link to=''><p>New In</p></Link>
                      <Link to=''><p>Clean Hair Care</p></Link>
                      <Link to=''><p>5 Rated Products</p></Link>
                      <Link to=''><p>Gift and Sets</p></Link>
                      <Link to=''><p>Travel Sizes</p></Link>
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
                      Products Type
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''> <p>Shampoo</p></Link>
                      <Link to=''> <p>Conditioners</p></Link>
                      <Link to=''> <p>Hair Treatments</p></Link>
                      <Link to=''> <p>Hair Masks</p></Link>
                      <Link to=''> <p>Hair Oils</p></Link>
                      <Link to=''> <p>Hair Sprays</p></Link>
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
                      Hair Types
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

            <div>
              <Link to=''><div id="menu-title">Makeup</div></Link>
            </div>
            <div>
              <Link to=''><div id="menu-title">Bath & Body</div></Link>
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
                   <DrawerHeader mt={12} onClick = {onClose} display="flex" gap={12}>
                    {/* <Text > {isAuth ? "Hii " + username : "Account"}</Text> */}
                    <Button bgColor="black" color="white" colorScheme="none" onClick={handleLogOut}>Logout</Button>
                 
                </DrawerHeader> : <DrawerHeader mt={12}>
                <Link to="/login" onClick={onClose}>
                  <Button bgColor="black" color="white" colorScheme="none">Login</Button>
                </Link>
                <Link to="/signup" onClick={onClose}>
                  <Button variant="outline" border=" 1px solid black" ml={4} colorScheme="none">Register</Button>
                </Link>
              </DrawerHeader>
                {/* } */}

                <DrawerBody>
                  <Box display="flex" flexDirection="column" gap="20px">
                    <Link to="" onClick={onClose}>Brands</Link>
                    <Link to="" onClick={onClose}>Holiday Gif</Link>
                    <Link to="" onClick={onClose}>Sale</Link>
                    <Link to="" onClick={onClose}>Skin Care</Link>
                    <Link to="" onClick={onClose}>Hair Care</Link>
                    <Link to="" onClick={onClose}>Makeup</Link>
                    <Link to="" onClick={onClose}>Bath & Body</Link>
                    <Link to="" onClick={onClose}>Admin</Link>
                    <Link to="" onClick={onClose}>Latest</Link>
                  </Box>
                </DrawerBody>

              </DrawerContent>
            </Drawer>
          </div>

          <CgSearch size="1.5em" />
        </div>

        <div>
          <Link to="/">
            <img style={{ width: "90px", height: "25px" }} src={logo} alt="logo" />
          </Link>
        </div>

        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
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

import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ButtonMain from "./ButtonMain";
import { useNavigate } from "react-router-dom";
import {  FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Redux/authSlice";

import { SearchDrawer } from "./SearchDrawer";
const Navbar = () => {
  const { auth, user } = useSelector((store) => store.auth);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [current, setCurrent] = useState("deals");
  const [serachDrawerOpen, setSearchDrawerOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("userTokenBuyCars");
    dispatch(logoutUser());
  };
  return (
    <>
      <SimpleGrid
        bg="skyblue"
        p={2}
        zIndex={5}
        width={"100%"}
        pos="fixed"
        columns={3}
      >
         <SearchDrawer
         nav={true}
       sendSelected={(e)=>null}
        serachDrawerOpen={serachDrawerOpen}
        setSearchDrawerOpen={(e) => setSearchDrawerOpen(e)}
      />
      
        <Image
        onClick={()=>nav("/")}
          borderRadius={5}
          width={"70px"}
          src="https://attryb.com/assets/attrybNavLog.svg"
        />
        <Flex justifyContent={"space-around"} alignItems={"center"}>
          
          <Text
            style={
              current === "addnewdeal"
                ? { backgroundColor: "blue", color: "white" }
                : null
            }
            p={2}
            textAlign={"center"}
            borderRadius={5}
            _hover={{ bg: "blue", color: "white" }}
            onClick={() => [nav("/addnewdeal"),setCurrent("addnewdeal")]}
          >
            Add Products
          </Text>
          <Text
            style={
              current === "deals"
                ? { backgroundColor: "blue", color: "white" }
                : null
            }
            p={2}
            textAlign={"center"}
            borderRadius={5}
            _hover={{ bg: "blue", color: "white" }}
            onClick={() =>[ nav("/deals"),setCurrent("deals")]}
          >
            All Products
          </Text>
        </Flex>

        <Flex justifyContent={"space-evenly"}>
        <Button
              colorScheme="blue"
              onClick={() => setSearchDrawerOpen(true)}
            >
              <FaSearch />
            </Button>
          {!auth ? (
            <ButtonMain onClick={() => nav("/login")} title={"Login"} />
          ) : (
            <>
              <Menu>
                <MenuButton as={"button"}>
                  <Avatar size="md" name={user.name} />
                </MenuButton>
                <MenuList>
                  <MenuItem >
                    <Text color="red" backgroundColor="yellow" colorScheme="blue" onClick={() => handleLogout()}>
                      Logout
                    </Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          )}
        </Flex>
      </SimpleGrid>
    </>
  );
};

export default Navbar;

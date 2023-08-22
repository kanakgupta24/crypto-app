import {  Box,Text} from "@chakra-ui/react";
import React from "react";



const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"10"}
      px={"16"}
      py={["6", "6"]}
    >
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Find information about various Crypto coins and exchanges.
          </Text>
    </Box>
  );
};

export default Footer;

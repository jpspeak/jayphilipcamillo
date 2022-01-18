import { Box, Container, HStack, Link, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <Box as='footer' position='fixed' w='full' bgColor='#212121' zIndex={2}>
        <Container maxW='container.lg' display='flex' alignItems='center' h='100'>
          <Box color='white'>
            <Image src='/jp.svg' alt='logo' height='50' width='64' />
          </Box>
          <Spacer />
          <Box display={{ base: "none", md: "block" }}>
            <Nav />
          </Box>
          <MobileNav />
        </Container>
      </Box>
    </>
  );
};

export default Header;

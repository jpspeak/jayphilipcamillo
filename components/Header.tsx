import { Box, Container, HStack, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Box as='footer' position='fixed' w='full' bgColor='#212121' zIndex={2}>
        <Container maxW='container.lg' display='flex' alignItems='center' h='100'>
          <Link href='/' passHref>
            <Box cursor='pointer'>
              <Image src='/jp.svg' alt='logo' height='50' width='64' />
            </Box>
          </Link>
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

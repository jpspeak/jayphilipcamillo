import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";

import Image from "next/image";

const Footer = () => {
  return (
    <>
      <Box bgColor='#212121' color='white'>
        <Container maxW='container.lg' h='full' py='10'>
          <Stack alignItems='center' justifyContent='center' spacing={4}>
            <Image src='/jp.svg' alt='logo' height='50' width='64' />
            <Text>© Copyright {new Date().getFullYear()}. All right reserved</Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;

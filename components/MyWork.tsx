import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

const MyWork = () => {
  return (
    <>
      <Box id='my-work' min-height='100vh' bgColor='#262626' color='white'>
        <Container maxW='container.lg' h='full' py={{ base: "100", md: "140" }}>
          <Heading textAlign='center'>My Work</Heading>
          <Flex justifyContent='center' mt='20'>
            <Box maxWidth='600' width='full' bgColor='#363636' rounded='lg' overflow='hidden'>
              <Box pb='75%' bgColor='gray.500' width='full' position='relative'>
                <Flex position='absolute'>
                  <Image src='/kenneland_thumbnail.png' alt='kenneland_thumb' objectFit='cover' height={900} width={1200} />
                </Flex>
              </Box>
              <Box px='8' py='4'>
                <Link href='https://kenneland-client.vercel.app/' target='_blank' fontSize='2xl' fontWeight='bold'>
                  Kenneland
                </Link>
                <Text mt='2'>A place for Dog Lovers where you can promote your kennel, follow breeders, find studs and sell your lovely dogs.</Text>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default MyWork;

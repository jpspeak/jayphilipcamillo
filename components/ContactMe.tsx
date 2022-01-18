import { Box, Button, Center, Container, Flex, FormControl, FormLabel, Grid, Heading, HStack, Icon, Input, Spacer, Text, Textarea, VStack } from "@chakra-ui/react";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";
import { FiFacebook } from "react-icons/fi";

const ContactMe = () => {
  return (
    <>
      <Box id='contact-me' min-height='100vh' bgColor='#262626' color='white'>
        <Container maxW='container.lg' h='full' py={{ base: "100", md: "140" }} px={{ base: "0", md: "4" }}>
          <Heading px='4' textAlign='center'>
            Contact Me
          </Heading>
          <Heading as='h3' px='8' mt='4' fontSize='xl' fontWeight='light' textAlign='center' color='gray.200'>
            Let&apos;s work together and bring your ideas to life.
            <br /> I am just a click away.
          </Heading>
          <Grid templateColumns={{ base: "100%", md: "40% 60%" }} mt='20' bgColor={{ md: "#292929" }}>
            <Box display='flex' flexDir='column' p='8' bgColor={{ md: "#212121" }}>
              <Text fontSize={{ base: "xl", md: "2xl" }}>Contact Information</Text>
              <VStack alignItems='normal' mt='10' fontSize='lg' spacing={12}>
                <HStack spacing={6}>
                  <Icon as={HiOutlineMail} h='6' w='6' />

                  <Text>jayphilipcamillo@gmail.com</Text>
                </HStack>
                <HStack spacing={6}>
                  <Icon as={HiOutlinePhone} h='6' w='6' />

                  <Text>+639162408252</Text>
                </HStack>
                <HStack spacing={6}>
                  <Icon as={HiOutlineLocationMarker} h='6' w='6' />

                  <Text>Tibal-og Sto Tomas Davao del Sur</Text>
                </HStack>
              </VStack>
              <Spacer />
              <HStack justifyContent={{ base: "end", md: "center" }} mt={{ base: "14", md: "0" }} spacing={4}>
                <Center
                  as='a'
                  href='https://web.facebook.com/jayphilipcamillo'
                  target='_blank'
                  _hover={{ bgColor: "#0BC5EA", color: "#212121" }}
                  color='#0BC5EA'
                  h='60px'
                  w='60px'
                  rounded='full'
                  border='2px solid #0BC5EA'
                >
                  <Icon as={FiFacebook} h='6' w='6' />
                </Center>
                <Center
                  as='a'
                  href='https://wa.me/+639162408252'
                  target='_blank'
                  _hover={{ bgColor: "#0BC5EA", color: "#212121" }}
                  color='#0BC5EA'
                  h='60px'
                  w='60px'
                  rounded='full'
                  border='2px solid #0BC5EA'
                >
                  <Icon as={SiWhatsapp} h='6' w='6' />
                </Center>
              </HStack>
            </Box>
            <Box p='8'>
              <form>
                <FormControl>
                  <FormLabel htmlFor='fullname'>Full Name</FormLabel>
                  <Input id='fullname' placeholder='Enter your full name' />
                </FormControl>
                <FormControl mt='8'>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input id='email' placeholder='Enter your email address' />
                </FormControl>
                <FormControl mt='8'>
                  <FormLabel htmlFor='message'>Message</FormLabel>
                  <Textarea id='message' placeholder='Write your message' rows={5} />
                </FormControl>
                <Flex justifyContent='end'>
                  <Button size='lg' colorScheme='cyan' color='white' mt='16'>
                    Send Message
                  </Button>
                </Flex>
              </form>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ContactMe;

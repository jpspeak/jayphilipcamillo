import { Box, Button, Center, Container, Flex, FormControl, FormLabel, Grid, Heading, HStack, Icon, Input, Spacer, Text, Textarea, useBoolean, VStack } from "@chakra-ui/react";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";
import { FiFacebook } from "react-icons/fi";
import { ChangeEvent, FormEvent, useState } from "react";
import EmailSentAlert from "./EmailSentAlert";
import ContactIconButton from "./ContactIconButton";

const ContactMe = () => {
  const [isLoading, setIsLoading] = useBoolean();
  const [isEmailSent, setIsEmailSent] = useBoolean();

  const [value, setValue] = useState({
    fullname: "",
    email: "",
    message: ""
  });
  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading.on();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
      });
      setValue({ fullname: "", email: "", message: "" });
      setIsLoading.off();
      setIsEmailSent.on();
    } catch (error) {
      console.log(error);
      setIsLoading.off();
    }
  };

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
                <ContactIconButton href='https://web.facebook.com/jayphilipcamillo' icon={FiFacebook} />
                <ContactIconButton href='https://wa.me/+639162408252' icon={SiWhatsapp} />
              </HStack>
            </Box>
            <Box p='8'>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel htmlFor='fullname'>Full Name</FormLabel>
                  <Input onChange={handleOnChange} name='fullname' value={value.fullname} id='fullname' placeholder='Enter your full name' required />
                </FormControl>
                <FormControl mt='8'>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input onChange={handleOnChange} name='email' value={value.email} id='email' type='email' placeholder='Enter your email address' required />
                </FormControl>
                <FormControl mt='8'>
                  <FormLabel htmlFor='message'>Message</FormLabel>
                  <Textarea onChange={handleOnChange} name='message' value={value.message} id='message' placeholder='Write your message' rows={5} required />
                </FormControl>
                <Flex justifyContent='end'>
                  <Button isLoading={isLoading} loadingText='Sending...' size='lg' rounded='full' colorScheme='cyan' color='white' mt='16' type='submit'>
                    Send Message
                  </Button>
                </Flex>
              </form>
            </Box>
          </Grid>
        </Container>
      </Box>
      <EmailSentAlert isOpen={isEmailSent} onClose={() => setIsEmailSent.off()} />
    </>
  );
};

export default ContactMe;

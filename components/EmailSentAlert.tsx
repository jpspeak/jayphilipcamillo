import { Box, Center, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const EmailSentAlert = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size='2xl'>
        <ModalOverlay />
        <Content />
      </Modal>
    </>
  );
};

export default EmailSentAlert;

const Content = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, ease: "power1.out", duration: 0.5 });
  }, []);
  return (
    <ModalContent rounded='none' ref={containerRef} mx='4'>
      <ModalCloseButton />
      <ModalBody p='12'>
        <Flex justifyContent='center' flexDir='column' alignItems='center'>
          <Image src='/emailsent.svg' alt='Email sent' objectFit='contain' height={250} width={250} />
          <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight='bold' textAlign='center'>
            Thank you for contacting me!
          </Text>
          <Text mt='8' fontSize={{ base: "md", md: "lg" }} color='blackAlpha.600' textAlign='center'>
            I have receive your message.
          </Text>
          <Text mt='2' fontSize={{ base: "md", md: "lg" }} color='blackAlpha.600' textAlign='center'>
            I will reach you out immediately!
          </Text>
        </Flex>
      </ModalBody>
    </ModalContent>
  );
};

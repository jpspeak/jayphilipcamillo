import { Box, Center, Icon } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { IconType } from "react-icons";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

const ContactIconButton = ({ href, icon }: { href: string; icon: IconType }) => {
  const [buttonContainerRef, buttonContainerInView] = useInView({
    threshold: 0.5
  });

  const buttonRef = useRef(null);
  useEffect(() => {
    if (buttonContainerInView) {
      gsap.fromTo(buttonRef.current, { rotation: "360deg" }, { rotation: "0deg", ease: "elastic.out(1, 0.3)", duration: 2 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonContainerInView]);
  return (
    <Box ref={buttonContainerRef}>
      <Center ref={buttonRef} as='a' href={href} target='_blank' _hover={{ bgColor: "#0BC5EA", color: "#212121" }} color='#0BC5EA' h='60px' w='60px' rounded='full' border='2px solid #0BC5EA'>
        <Icon as={icon} h='6' w='6' />
      </Center>
    </Box>
  );
};

export default ContactIconButton;

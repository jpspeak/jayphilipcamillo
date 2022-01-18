import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Icon, IconButton, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Nav from "./Nav";
import { useEffect } from "react";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  useEffect(() => {
    if (!isMobile && isOpen) {
      onClose();
    }
  }, [isMobile, isOpen, onClose]);
  return (
    <>
      <Box display={{ md: "none" }}>
        <IconButton onClick={onOpen} aria-label='Menu' variant='ghost' icon={<Icon as={HamburgerIcon} color='white' h='6' w='6' />} />
        <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
          <DrawerOverlay />
          <DrawerContent maxW='70%'>
            <DrawerCloseButton color='white' />
            <DrawerBody bgColor='#212121' p='4' alignItems='center' justifyContent='stretch' display='flex'>
              <Nav onClick={onClose} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default MobileNav;

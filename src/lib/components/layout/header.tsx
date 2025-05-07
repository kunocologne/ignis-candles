"use client";

import { 
  Box, 
  Container, 
  Flex, 
  HStack, 
  VStack,
  Text, 
  Link, 
  Button, 
  IconButton, 
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Image,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { colors } from "@/styles";
import NextLink from "next/link";

// Simple hamburger icon component
const HamburgerIcon = () => (
  <Box as="span" position="relative" width="24px" height="24px">
    <Box as="span" 
      position="absolute" 
      w="24px" 
      h="2px" 
      bg="currentColor" 
      top="5px" 
      left="0"
    />
    <Box as="span" 
      position="absolute" 
      w="24px" 
      h="2px" 
      bg="currentColor" 
      top="12px" 
      left="0"
    />
    <Box as="span" 
      position="absolute" 
      w="24px" 
      h="2px" 
      bg="currentColor" 
      top="19px" 
      left="0"
    />
  </Box>
);

type NavLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
  children?: React.ReactNode;
};

// Navigation link component
const NavLink = ({ href, label, isActive, hasSubmenu, children }: NavLinkProps) => {
  if (hasSubmenu) {
    return (
      <Menu autoSelect={false}>
        <MenuButton 
          as={Box} 
          px={2} 
          py={1} 
          position="relative"
          fontWeight="500"
          color={isActive ? colors.phoenixOrange : colors.midnightCharcoal}
          _hover={{ color: colors.phoenixOrange }}
          cursor="pointer"
          className="uppercase-title"
          fontSize="sm"
        >
          {label}
          <Box 
            as="span" 
            ml={1} 
            fontSize="10px" 
            transition="transform 0.2s"
            display="inline-block"
          >
            ▼
          </Box>
        </MenuButton>
        <MenuList 
          bg="white" 
          shadow="md" 
          border="none" 
          p={2} 
          minW="200px"
          zIndex={10}
        >
          {children}
        </MenuList>
      </Menu>
    );
  }

  return (
    <Link 
      as={NextLink} 
      href={href}
      px={2}
      py={1}
      position="relative"
      fontWeight="500"
      color={isActive ? colors.phoenixOrange : colors.midnightCharcoal}
      _hover={{ 
        color: colors.phoenixOrange
      }}
      className="uppercase-title"
      fontSize="sm"
      _after={{
        content: '""',
        position: 'absolute',
        width: isActive ? '100%' : '0%',
        height: '2px',
        bottom: '-2px',
        left: '0',
        bg: colors.phoenixOrange,
        transition: 'width 0.3s ease'
      }}
      sx={{
        '&:hover::after': {
          width: '100%'
        }
      }}
    >
      {label}
    </Link>
  );
};

// Main Header component
export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="10"
      bg={scrolled ? "white" : "transparent"}
      transition="all 0.3s ease"
      boxShadow={scrolled ? "sm" : "none"}
      backdropFilter={scrolled ? "blur(10px)" : "none"}
    >
      <Container maxW="1200px" px={4}>
        <Flex 
          h={{ base: "70px", md: "90px" }} 
          align="center" 
          justify="space-between"
        >
          {/* Logo */}
          <Link as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
            <Flex align="center">
              <Text 
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="black"
                color={colors.deepEmber}
                className="nyx-text"
                letterSpacing="wide"
              >
                IGNIS
              </Text>
            </Flex>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <HStack spacing={8}>
              <NavLink href="/" label="Home" isActive />
            </HStack>
          )}

          {/* Action Buttons */}
          <HStack spacing={4}>
            {!isMobile && (
              <Button
                variant="outline"
                size="sm"
                borderColor={colors.phoenixOrange}
                color={colors.phoenixOrange}
                _hover={{ bg: colors.phoenixOrange, color: "white" }}
                rounded="md"
              >
                Shop Now
              </Button>
            )}
            
            {isMobile && (
              <IconButton
                aria-label="Open menu"
                variant="ghost"
                icon={<HamburgerIcon />}
                onClick={onOpen}
                color={colors.midnightCharcoal}
              />
            )}
          </HStack>
        </Flex>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg={colors.offWhite}>
          <DrawerCloseButton color={colors.deepEmber} />
          <DrawerBody p={8}>
            <VStack spacing={6} align="stretch" mt={10}>
              <Link as={NextLink} href="/" fontSize="lg" color={colors.midnightCharcoal} fontWeight="500" onClick={onClose}>
                Home
              </Link>
            </VStack>
            
            <Button
              colorScheme="orange"
              size="md"
              width="full"
              bg={colors.phoenixOrange}
              _hover={{ bg: colors.deepEmber }}
              rounded="md"
              mt={10}
            >
              Shop Now
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

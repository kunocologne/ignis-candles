"use client";

import { 
  Box, 
  Container, 
  Flex, 
  VStack, 
  HStack, 
  Text, 
  Heading, 
  Link, 
  Input, 
  Button, 
  SimpleGrid,
  Divider,
  Icon
} from "@chakra-ui/react";
import { colors } from '@/styles';

export const FooterSection = () => {
  return (
    <Box bg={colors.midnightCharcoal} color="white" py={16}>
      <Container maxW="1200px">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} mb={10}>
          <VStack align="flex-start" spacing={5}>
            <Heading 
              as="h3" 
              fontSize="3xl" 
              fontWeight="black" 
              letterSpacing="widest" 
              className="nyx-text"
              color={colors.phoenixOrange}
            >
              IGNIS
            </Heading>
            <Text fontSize="sm" color={colors.offWhite} maxW="250px">
              Candles for Transformation, Purification, and Rebirth. Tools for your spiritual journey.
            </Text>
            <HStack spacing={4} mt={2}>
              <Link 
                href="#" 
                p={2} 
                bg={colors.deepEmber} 
                rounded="full" 
                _hover={{ bg: colors.phoenixOrange }}
              >
                <Box as="span" fontSize="lg">📱</Box>
              </Link>
              <Link 
                href="#" 
                p={2} 
                bg={colors.deepEmber} 
                rounded="full"
                _hover={{ bg: colors.phoenixOrange }}
              >
                <Box as="span" fontSize="lg">📸</Box>
              </Link>
              <Link 
                href="#" 
                p={2} 
                bg={colors.deepEmber} 
                rounded="full"
                _hover={{ bg: colors.phoenixOrange }}
              >
                <Box as="span" fontSize="lg">📌</Box>
              </Link>
            </HStack>
          </VStack>

          <VStack align="flex-start" spacing={4}>
            <Heading as="h4" fontSize="md" className="uppercase-title" mb={1}>
              Shop
            </Heading>
            <Link href="#" color={colors.offWhite} _hover={{ color: colors.phoenixOrange }}>
              All Candles
            </Link>
            <Link href="#" color={colors.offWhite} _hover={{ color: colors.phoenixOrange }}>
              Phoenix Collection
            </Link>
            <Link href="#" color={colors.offWhite} _hover={{ color: colors.phoenixOrange }}>
              Sacred Flames Collection
            </Link>
            <Link href="#" color={colors.offWhite} _hover={{ color: colors.phoenixOrange }}>
              Ritual Kits
            </Link>
          </VStack>

          <VStack align="flex-start" spacing={4}>
            <Heading as="h4" fontSize="md" className="uppercase-title" mb={1}>
              Rituals & Guides
            </Heading>
            <Link href="#" color={colors.offWhite} _hover={{ color: colors.phoenixOrange }}>
              Fire Ceremony
            </Link>
            <Link href="#" color={colors.offWhite} _hover={{ color: colors.phoenixOrange }}>
              Five Elements Ritual
            </Link>
            <Link href="#" color={colors.offWhite} _hover={{ color: colors.phoenixOrange }}>
              Phoenix Ritual
            </Link>
            <Link href="#" color={colors.offWhite} _hover={{ color: colors.phoenixOrange }}>
              Seven Sacred Flames Ritual
            </Link>
            <Link href="#" color={colors.offWhite} _hover={{ color: colors.phoenixOrange }}>
              Download Guides (PDF)
            </Link>
          </VStack>

          <VStack align="flex-start" spacing={5}>
            <Heading as="h4" fontSize="md" className="uppercase-title" mb={1}>
              Stay Connected
            </Heading>
            <Text fontSize="sm" color={colors.offWhite}>
              Join our community for ritual guidance, special offers, and spiritual insights.
            </Text>
            <VStack spacing={2} w="100%">
              <Input 
                placeholder="Enter your email" 
                bg="rgba(255,255,255,0.1)" 
                border="none" 
                _placeholder={{ color: "gray.400" }}
                size="md"
              />
              <Button 
                w="100%" 
                colorScheme="orange" 
                bg={colors.phoenixOrange}
                _hover={{ bg: colors.terracottaGlow }}
                size="md"
              >
                Subscribe
              </Button>
            </VStack>
            <Text fontSize="xs" color="gray.500">
              We respect your privacy and will never share your information.
            </Text>
          </VStack>
        </SimpleGrid>

        <Divider borderColor="gray.700" my={6} />

        <Flex 
          direction={{ base: "column", md: "row" }} 
          justify="space-between" 
          align={{ base: "center", md: "flex-start" }}
          fontSize="sm"
          color="gray.400"
        >
          <Text>&copy; {new Date().getFullYear()} IGNIS Candles. All rights reserved.</Text>
          <HStack spacing={4} mt={{ base: 4, md: 0 }}>
            <Link href="#" _hover={{ color: colors.phoenixOrange }}>Terms</Link>
            <Link href="#" _hover={{ color: colors.phoenixOrange }}>Privacy</Link>
            <Link href="#" _hover={{ color: colors.phoenixOrange }}>Returns</Link>
            <Link href="#" _hover={{ color: colors.phoenixOrange }}>Contact</Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}; 
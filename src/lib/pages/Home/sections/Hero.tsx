"use client";

import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Button, 
  Image, 
  Stack, 
  VStack,
  Flex,
  Icon,
  Divider
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { colors } from '@/styles';
import { motion } from "framer-motion";
import { FaChevronDown } from 'react-icons/fa';

// Enhanced flame animation keyframes
const flicker = keyframes`
  0% { opacity: 0.9; transform: scale(0.98); filter: brightness(0.95); }
  25% { opacity: 1; transform: scale(1.01); filter: brightness(1.05); }
  50% { opacity: 0.95; transform: scale(0.99); filter: brightness(1); }
  75% { opacity: 1; transform: scale(1); filter: brightness(1.02); }
  100% { opacity: 0.9; transform: scale(0.98); filter: brightness(0.95); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const MotionBox = motion(Box);

export const HeroSection = () => {
  const flickerAnimation = `${flicker} 3s infinite ease-in-out`;
  const floatAnimation = `${float} 6s infinite ease-in-out`;

  return (
    <Box 
      bgGradient={`linear(to-b, ${colors.deepEmber}, ${colors.phoenixOrange}40)`}
      py={{ base: 20, md: 28 }}
      position="relative"
      overflow="hidden"
      minH={{ base: "90vh", md: "95vh" }}
      display="flex"
      alignItems="center"
    >
      {/* Background particles effect */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.05"
        backgroundImage="url('/images/texture-pattern.png')"
        backgroundSize="200px"
        mixBlendMode="overlay"
      />
      
      {/* Primary glow effect */}
      <Box
        position="absolute"
        top="40%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="80%"
        height="70%"
        bg={colors.phoenixOrange}
        opacity="0.15"
        filter="blur(100px)"
        borderRadius="full"
        animation={flickerAnimation}
      />
      
      {/* Secondary ambient glow */}
      <Box
        position="absolute"
        bottom="-5%"
        right="-10%"
        width="50%"
        height="50%"
        bg={colors.terracottaGlow}
        opacity="0.08"
        filter="blur(70px)"
        borderRadius="full"
      />

      <Container maxW="1300px" position="relative" zIndex={1}>
        <Stack 
          spacing={{ base: 12, lg: 16 }} 
          direction={{ base: "column", lg: "row" }} 
          align="center"
          justify="space-between"
        >
          <VStack 
            spacing={{ base: 6, md: 8 }} 
            align="flex-start" 
            maxW={{ base: "100%", lg: "50%" }}
          >
            <Box 
              borderLeft="3px solid" 
              borderColor={colors.burnishedGold} 
              pl={4}
              py={1}
            >
              <Text 
                textTransform="uppercase" 
                letterSpacing="0.15em" 
                color={colors.goldFlame}
                fontWeight="medium"
                fontSize="sm"
              >
                Luxury Ritual Candles
              </Text>
            </Box>
            
            <Heading 
              as="h1" 
              fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }} 
              fontWeight="bold"
              color="white"
              letterSpacing="tight"
              lineHeight="0.9"
              className="uppercase-title"
              textShadow="0 0 25px rgba(255,138,0,0.3)"
              position="relative"
              zIndex={2}
            >
              An Ode <Box as="span" className="gold-text" display="inline">to the</Box> Fire
            </Heading>
            
            <Divider 
              w="120px" 
              borderColor={colors.terracottaGlow} 
              opacity={0.5} 
              my={2}
            />
            
            <Heading 
              as="h2" 
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} 
              fontWeight="normal"
              color={colors.creamyLinen}
              className="zapfino-text"
              letterSpacing="wider"
              lineHeight="1.4"
              textShadow="0 2px 10px rgba(0,0,0,0.2)"
            >
              Ignite Your Inner Flame
            </Heading>
            
            <Text 
              fontSize={{ base: "md", md: "lg", lg: "xl" }} 
              color={colors.offWhite}
              lineHeight="tall"
              fontWeight="300"
              maxW="550px"
              textShadow="0 1px 3px rgba(0,0,0,0.1)"
            >
              Created for rituals of transformation, IGNIS Candles fuse the Five Elements—Earth (concrete base), 
              Water (essential oils), Air (breath feeding the flame), Fire (combustion), and Spirit (intention). 
              Aligned with the Manipura Chakra, they awaken courage, clarity, and personal power.
            </Text>
            
            <Flex 
              gap={4} 
              flexWrap={{ base: "wrap", md: "nowrap" }}
              mt={{ base: 4, md: 6 }}
            >
              <Button 
                size="lg" 
                bg={colors.goldFlame} 
                color={colors.midnightCharcoal} 
                _hover={{ 
                  bg: colors.phoenixOrange,
                  transform: "translateY(-3px)",
                  boxShadow: "0 6px 20px rgba(255,138,0,0.4)"
                }}
                px={8}
                py={7}
                rounded="sm"
                boxShadow="0 4px 15px rgba(255,138,0,0.3)"
                transition="all 0.3s ease"
                fontWeight="500"
                fontSize="md"
              >
                Explore Our Candles
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                color="white" 
                borderColor="white"
                borderWidth="1px"
                _hover={{ 
                  bg: 'rgba(255,255,255,0.1)',
                  transform: "translateY(-3px)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2)"
                }}
                px={8}
                py={7}
                rounded="sm"
                transition="all 0.3s ease"
                fontWeight="500"
                fontSize="md"
              >
                Discover the Rituals
              </Button>
            </Flex>
          </VStack>
          
          <Box
            position="relative"
            width={{ base: "100%", lg: "45%" }}
            height={{ base: "350px", md: "450px", lg: "550px" }}
            borderRadius="md"
            overflow="hidden"
            boxShadow="0 15px 40px rgba(105,46,42,0.4)"
            animation={floatAnimation}
            transformOrigin="center"
            _after={{
              content: '""',
              position: "absolute",
              inset: "0",
              bg: "linear-gradient(180deg, transparent 60%, rgba(105,46,42,0.6) 100%)",
              zIndex: 1
            }}
          >
            <Image 
              src="/images/hero-candle.jpg" 
              alt="IGNIS luxury ritual candle with a warm, fiery glow"
              objectFit="cover"
              width="100%"
              height="100%"
            />
            
            {/* Animated glow overlay */}
            <Box
              position="absolute"
              bottom="0"
              left="0"
              width="100%"
              height="60%"
              bgGradient={`linear(to-t, ${colors.phoenixOrange}80, transparent)`}
              opacity="0.6"
              animation={flickerAnimation}
              zIndex={1}
            />
            
            {/* Luxury brand badge */}
            <Box
              position="absolute"
              top="30px"
              right="30px"
              bg="rgba(0,0,0,0.6)"
              backdropFilter="blur(5px)"
              borderRadius="full"
              p={3}
              zIndex={2}
              boxShadow="0 4px 12px rgba(0,0,0,0.2)"
            >
              <Box
                width="50px"
                height="50px"
                borderRadius="full"
                bg={colors.burnishedGold}
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="0.05em"
                color={colors.midnightCharcoal}
              >
                IGNIS
              </Box>
            </Box>
          </Box>
        </Stack>
        
        {/* Scroll indicator */}
        <Flex 
          justify="center" 
          position="absolute" 
          bottom="-60px" 
          left="0" 
          right="0"
          animation={floatAnimation}
        >
          <Box 
            color="white" 
            display="flex" 
            flexDirection="column" 
            alignItems="center"
            opacity={0.7}
            _hover={{ opacity: 1 }}
            transition="all 0.3s ease"
            cursor="pointer"
          >
            <Text fontSize="xs" letterSpacing="0.1em" mb={2}>SCROLL</Text>
            <Icon as={FaChevronDown} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}; 
"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  VStack,
  Circle,
  Divider,
  useBreakpointValue
} from "@chakra-ui/react";
import { colors } from '@/styles';
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export const FireRitualSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  
  const ritualSteps = [
    {
      number: "01",
      title: "Set Sacred Intention",
      description: "Begin by clarifying the transformation you seek. Be specific, focusing on what you wish to call in rather than release."
    },
    {
      number: "02",
      title: "Prepare Your Space",
      description: "Clear your ritual area of distractions. You may enhance the ambiance with crystals, botanical elements, or other sacred objects."
    },
    {
      number: "03",
      title: "Activate the Elements",
      description: "Light your IGNIS candle mindfully, honoring the flame as a manifestation of transformation and the merging of all elements."
    },
    {
      number: "04",
      title: "Release & Receive",
      description: "Breathe deeply, exhaling what no longer serves you into the flame, and inhaling renewed energy. Visualize your intention coming alive."
    },
    {
      number: "05",
      title: "Integrate & Close",
      description: "Express gratitude to the elements. The ritual continues as your candle burns, carrying your intentions into manifestation."
    }
  ];

  return (
    <Box 
      py={{ base: 24, lg: 32 }}
      position="relative"
      bg="#0F0F11"
      color="white"
      overflow="hidden"
    >
      {/* Animated fire gradient background */}
      <Box
        position="absolute"
        inset="0"
        bgGradient={`radial-gradient(circle at 30% 40%, ${colors.deepEmber}30, transparent 60%),
                     radial-gradient(circle at 70% 60%, ${colors.phoenixOrange}20, transparent 60%)`}
        opacity="0.7"
        zIndex={0}
      />
      
      {/* Subtle pattern overlay */}
      <Box
        position="absolute"
        inset="0"
        bgImage="url('/images/texture-flame.png')"
        bgSize="cover"
        mixBlendMode="overlay"
        opacity="0.08"
        zIndex={0}
      />
      
      {/* Fire embers particles */}
      <Box
        position="absolute"
        top="20%"
        right="10%"
        width="300px"
        height="300px"
        bgImage="url('/images/fire-particles.png')"
        bgSize="contain"
        bgRepeat="no-repeat"
        opacity="0.2"
        zIndex={0}
      />
      
      <Container maxW="1300px" position="relative" zIndex={1}>
        {/* Section header */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          textAlign="center"
          mb={{ base: 16, lg: 20 }}
        >
          <Flex justify="center" mb={6}>
            <Circle
              size="80px"
              bg="rgba(255,138,0,0.2)"
              color={colors.phoenixOrange}
              fontSize="2xl"
            >
              <Icon as={FaFire} />
            </Circle>
          </Flex>
          
          <Text 
            color={colors.phoenixOrange} 
            fontSize="sm"
            fontWeight="medium"
            letterSpacing="0.15em"
            textTransform="uppercase"
            mb={3}
          >
            Ancient Wisdom, Modern Practice
          </Text>
          
          <Heading 
            as="h2" 
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontFamily="var(--font-amadi)"
            mb={5}
            bgGradient={`linear(to-r, ${colors.terracottaGlow}, ${colors.phoenixOrange}, ${colors.goldFlame})`}
            bgClip="text"
          >
            The Phoenix Fire Ritual
          </Heading>
          
          <Divider 
            width="120px" 
            mx="auto"
            borderColor={colors.phoenixOrange} 
            opacity={0.4} 
            my={6}
          />
          
          <Text 
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            maxW="800px"
            mx="auto"
            color="rgba(255,255,255,0.8)"
            fontWeight="300"
            lineHeight="1.8"
          >
            This transformative ritual draws on ancient fire ceremonies practiced across cultures for millennia.
            It's designed to help you shed old patterns, ignite your inner power, and emerge renewed—like
            the mythical phoenix rising from its own ashes.
          </Text>
        </MotionBox>
        
        {/* Ritual steps grid */}
        <Grid 
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }}
          gap={{ base: 6, md: 8 }}
          mb={{ base: 16, lg: 20 }}
        >
          {ritualSteps.map((step, index) => (
            <MotionBox
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GridItem>
                <Box
                  bg="rgba(255,255,255,0.04)"
                  borderRadius="sm"
                  p={6}
                  height="100%"
                  position="relative"
                  backdropFilter="blur(5px)"
                  border="1px solid"
                  borderColor="rgba(255,255,255,0.1)"
                  _hover={{
                    bg: "rgba(255,255,255,0.08)",
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                  }}
                  transition="all 0.3s ease"
                >
                  <VStack spacing={4} align="flex-start">
                    <Text
                      fontSize="4xl"
                      fontWeight="bold"
                      color={colors.phoenixOrange}
                      lineHeight="1"
                      fontFamily="var(--font-sofia-pro)"
                      opacity={0.9}
                    >
                      {step.number}
                    </Text>
                    
                    <Heading
                      as="h3"
                      fontSize={{ base: "lg", md: "xl" }}
                      mb={1}
                      color="white"
                    >
                      {step.title}
                    </Heading>
                    
                    <Text
                      fontSize="md"
                      color="rgba(255,255,255,0.7)"
                      fontWeight="300"
                      lineHeight="1.7"
                    >
                      {step.description}
                    </Text>
                  </VStack>
                </Box>
              </GridItem>
            </MotionBox>
          ))}
        </Grid>
        
        {/* CTA Section */}
        <MotionFlex
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          bg="rgba(0,0,0,0.3)"
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor="rgba(255,255,255,0.1)"
          borderRadius="md"
          p={{ base: 8, md: 12 }}
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={8}
        >
          <Box maxW={{ base: "100%", md: "65%" }}>
            <Flex align="center" mb={4}>
              <Icon as={MdOutlineWbSunny} color={colors.goldFlame} mr={3} fontSize="xl" />
              <Text
                textTransform="uppercase"
                letterSpacing="0.1em"
                fontWeight="medium"
                fontSize="sm"
                color={colors.goldFlame}
              >
                Begin Your Transformation
              </Text>
            </Flex>
            
            <Heading
              as="h3"
              fontSize={{ base: "2xl", md: "3xl" }}
              mb={4}
              fontFamily="var(--font-amadi)"
            >
              Ready to Experience the Power of Ritual Fire?
            </Heading>
            
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="rgba(255,255,255,0.8)"
              fontWeight="300"
              lineHeight="1.7"
            >
              Our complete ritual guide includes timing recommendations based on lunar cycles, 
              suggested crystals and herbs to enhance your practice, and personalized intention-setting techniques.
            </Text>
          </Box>
          
          <VStack spacing={4}>
            <Button
              size="lg"
              bg={colors.phoenixOrange}
              color="white"
              px={8}
              py={7}
              fontWeight="500"
              rounded="sm"
              _hover={{
                bg: colors.goldFlame,
                transform: "translateY(-3px)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
              }}
              transition="all 0.3s ease"
            >
              Download Ritual Guide
            </Button>
            
            <Button
              variant="ghost"
              color="white"
              _hover={{
                bg: "rgba(255,255,255,0.1)"
              }}
              fontWeight="normal"
              fontSize="sm"
            >
              Watch Tutorial Video
            </Button>
          </VStack>
        </MotionFlex>
      </Container>
    </Box>
  );
}; 
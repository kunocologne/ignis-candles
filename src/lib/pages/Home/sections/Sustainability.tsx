"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Icon,
  Grid,
  GridItem,
  Button,
  Image,
  Divider,
  useBreakpointValue
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { colors } from "@/styles";
import { 
  FaLeaf, 
  FaRecycle, 
  FaSeedling, 
  FaHandHoldingHeart
} from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export const SustainabilitySection = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  
  const sustainabilityPractices = [
    {
      icon: FaRecycle,
      title: "Reusable Vessels",
      description: "Our concrete vessels are designed to be refilled, reducing waste and extending product lifecycle.",
      color: colors.greenFlame
    },
    {
      icon: FaSeedling, 
      title: "Sustainable Sourcing",
      description: "All ingredients are ethically sourced from regenerative farms and sustainable suppliers.",
      color: colors.forestSlate
    },
    {
      icon: IoWaterOutline,
      title: "Low-Impact Production",
      description: "Our manufacturing process uses 40% less water than industry standards.",
      color: colors.blueFlame
    },
    {
      icon: FaHandHoldingHeart,
      title: "Community Impact",
      description: "For each candle sold, we plant a tree in areas affected by wildfires.",
      color: colors.deepEmber
    }
  ];

  return (
    <Box 
      py={{ base: 20, lg: 32 }}
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgImage: "url('/images/texture-natural.png')",
        bgSize: "cover",
        bgPosition: "center",
        opacity: 0.05,
        zIndex: 0
      }}
    >
      {/* Gradient overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="300px"
        bgGradient={`linear(to-b, ${colors.offWhite} 0%, transparent 100%)`}
        zIndex={1}
      />
      
      {/* Organic shape accent */}
      <Box
        position="absolute"
        top="5%"
        right="-5%"
        width="400px"
        height="400px"
        bg={colors.creamyLinen}
        borderRadius="63% 37% 54% 46% / 55% 48% 52% 45%"
        opacity={0.4}
        zIndex={0}
        transform="rotate(45deg)"
      />
      
      <Container maxW="1300px" position="relative" zIndex={2}>
        <MotionFlex
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align="center"
          gap={{ base: 12, lg: 20 }}
          mb={{ base: 16, lg: 24 }}
        >
          {/* Left image column */}
          <Box 
            position="relative" 
            flex="1"
            order={{ base: 2, lg: 1 }}
          >
            <Box
              position="relative"
              width="100%"
              height={{ base: "350px", md: "450px", lg: "550px" }}
              borderRadius="md"
              overflow="hidden"
              boxShadow="xl"
            >
              <Image
                src="/images/sustainability.jpg"
                alt="Sustainability at IGNIS"
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Box>
            
            {/* Badge overlay */}
            <Flex
              position="absolute"
              bottom="-30px"
              left="40px"
              bg={colors.greenFlame}
              color="white"
              borderRadius="full"
              boxShadow="lg"
              width={{ base: "110px", md: "140px" }}
              height={{ base: "110px", md: "140px" }}
              align="center"
              justify="center"
              direction="column"
              p={4}
              textAlign="center"
            >
              <Icon as={FaLeaf} fontSize={{ base: "2xl", md: "3xl" }} mb={2} />
              <Text fontWeight="medium" fontSize={{ base: "xs", md: "sm" }} letterSpacing="wide">
                ECO-CERTIFIED
              </Text>
            </Flex>
          </Box>
          
          {/* Right content column */}
          <Box 
            flex="1" 
            order={{ base: 1, lg: 2 }}
          >
            <Box>
              <Text 
                color={colors.greenFlame} 
                fontSize="sm" 
                fontWeight="medium"
                letterSpacing="0.15em"
                textTransform="uppercase"
                mb={3}
              >
                Our Commitment
              </Text>
              
              <Heading 
                as="h2" 
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontFamily="var(--font-amadi)"
                lineHeight="1.1"
                mb={5}
              >
                Conscious <Box as="span" color={colors.greenFlame} display="inline">Creation</Box>
              </Heading>
              
              <Divider 
                width="80px" 
                borderColor={colors.greenFlame} 
                opacity={0.6} 
                my={5}
              />
              
              <Text 
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="300" 
                color={colors.forestSlate}
                lineHeight="1.8"
                mb={6}
                maxW="650px"
              >
                At IGNIS, sustainability isn't just a practice—it's our foundation. We believe that products honoring 
                the Earth's elements must also honor the Earth itself. From sourcing to shipping, every decision 
                is made with environmental impact in mind.
              </Text>
              
              <Text 
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="300" 
                color={colors.forestSlate}
                lineHeight="1.8"
                mb={8}
                maxW="650px"
              >
                Our commitment to sustainable luxury means creating products that nourish both the spirit and 
                the planet, proving that premium quality and environmental consciousness can—and must—coexist.
              </Text>
              
              <Button
                bg={colors.greenFlame}
                color="white"
                fontWeight="400"
                px={8}
                py={6}
                size="lg"
                rounded="sm"
                _hover={{
                  bg: colors.forestSlate,
                  transform: "translateY(-3px)",
                  boxShadow: "lg"
                }}
                transition="all 0.3s ease"
              >
                Explore Our Practices
              </Button>
            </Box>
          </Box>
        </MotionFlex>

        {/* Sustainability practices grid */}
        <Box pt={{ base: 8, md: 16 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            textAlign="center"
            mb={12}
          >
            <Heading 
              as="h3" 
              fontSize={{ base: "2xl", md: "3xl" }}
              mb={5}
              fontFamily="var(--font-amadi)"
            >
              Our Environmental Practices
            </Heading>
            
            <Text 
              fontSize={{ base: "md", md: "lg" }}
              maxW="700px"
              mx="auto"
              color={colors.forestSlate}
            >
              Every IGNIS product embodies these core sustainability principles
            </Text>
          </MotionBox>
          
          <Grid 
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
            gap={8}
          >
            {sustainabilityPractices.map((practice, index) => (
              <MotionBox
                key={practice.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GridItem>
                  <Flex
                    bg="white"
                    borderRadius="sm"
                    boxShadow="md"
                    p={6}
                    direction="column"
                    align="center"
                    textAlign="center"
                    height="100%"
                    position="relative"
                    overflow="hidden"
                    _after={{
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      width: "100%",
                      height: "3px",
                      bg: practice.color,
                      opacity: 0.7
                    }}
                    _hover={{
                      transform: "translateY(-5px)",
                      boxShadow: "lg",
                      _after: {
                        height: "5px"
                      }
                    }}
                    transition="all 0.3s ease"
                  >
                    <Flex
                      width="70px"
                      height="70px"
                      bg={`${practice.color}15`}
                      color={practice.color}
                      borderRadius="full"
                      align="center"
                      justify="center"
                      fontSize="2xl"
                      mb={5}
                    >
                      <Icon as={practice.icon} />
                    </Flex>
                    
                    <Heading 
                      as="h4" 
                      fontSize={{ base: "lg", md: "xl" }}
                      mb={3}
                      color={colors.midnightCharcoal}
                    >
                      {practice.title}
                    </Heading>
                    
                    <Text 
                      fontSize="md"
                      color={colors.forestSlate}
                      fontWeight="300"
                      lineHeight="1.6"
                    >
                      {practice.description}
                    </Text>
                  </Flex>
                </GridItem>
              </MotionBox>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}; 
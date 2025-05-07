"use client";

import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  Button,
  Icon,
  VStack,
  HStack,
  Divider,
  useBreakpointValue
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { colors } from "@/styles";
import { FaLeaf, FaFire, FaWater, FaWind } from "react-icons/fa";
import { RiSparklingFill } from "react-icons/ri";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export const AboutSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  
  const elementIconSize = useBreakpointValue({ base: "30px", md: "40px" });
  
  const elementData = [
    {
      name: "Earth",
      icon: FaLeaf,
      color: colors.greenFlame,
      description: "Our concrete vessels ground your ritual in earthly stability."
    },
    {
      name: "Water",
      icon: FaWater,
      color: colors.blueFlame,
      description: "Essential oils infuse emotional depth and healing vibrations."
    },
    {
      name: "Air",
      icon: FaWind,
      color: colors.violetFlame,
      description: "Your breath feeds the flame, connecting to universal energy."
    },
    {
      name: "Fire",
      icon: FaFire,
      color: colors.phoenixOrange,
      description: "The transformative power of flame transmutes energy."
    },
    {
      name: "Spirit",
      icon: RiSparklingFill,
      color: colors.burnishedGold,
      description: "Your intention imbues each ritual with personal meaning."
    }
  ];

  return (
    <Box 
      py={{ base: 16, md: 24, lg: 32 }}
      bg={colors.offWhite}
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "200px",
        bgGradient: `linear(to-b, ${colors.deepEmber}10, transparent)`,
        zIndex: 0
      }}
    >
      <Container maxW="1300px" position="relative" zIndex={1}>
        {/* Section intro */}
        <Flex 
          direction="column" 
          align="center" 
          textAlign="center"
          mb={{ base: 12, md: 20 }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Box mb={3}>
              <Text 
                color={colors.deepEmber} 
                fontWeight="500" 
                fontSize="sm" 
                letterSpacing="0.15em"
                textTransform="uppercase"
                mb={2}
              >
                Our Philosophy
              </Text>
              
              <Heading 
                as="h2" 
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                lineHeight="1.1"
                mb={5}
                fontFamily="var(--font-amadi)"
              >
                The Essence of <Box as="span" className="ember-glow" display="inline">IGNIS</Box>
              </Heading>
              
              <Divider 
                width="80px" 
                borderColor={colors.terracottaGlow} 
                opacity={0.4} 
                mx="auto" 
                my={5}
              />
              
              <Text 
                fontSize={{ base: "lg", md: "xl" }} 
                maxW="800px" 
                mx="auto"
                color={colors.forestSlate}
                fontWeight="300"
                lineHeight="1.8"
              >
                At IGNIS, we craft more than candles—we create sacred vessels for transformation. 
                Each element of our products is thoughtfully designed to harmonize the five elemental energies, 
                facilitating profound personal rituals.
              </Text>
            </Box>
          </MotionBox>
        </Flex>

        {/* Five Elements Grid */}
        <Grid 
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }}
          gap={{ base: 6, md: 10 }}
          mb={{ base: 16, md: 24 }}
        >
          {elementData.map((element, index) => (
            <MotionBox
              key={element.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Flex 
                bg="white" 
                boxShadow="0 5px 20px rgba(0,0,0,0.05)"
                borderRadius="sm"
                overflow="hidden"
                direction="column"
                height="100%"
                position="relative"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  bg: element.color
                }}
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
                }}
                transition="all 0.3s ease"
              >
                <Flex 
                  align="center" 
                  justify="center" 
                  direction="column"
                  p={6}
                  textAlign="center"
                >
                  <Flex
                    width={elementIconSize}
                    height={elementIconSize}
                    bg={`${element.color}15`}
                    color={element.color}
                    borderRadius="full"
                    align="center"
                    justify="center"
                    mb={4}
                    fontSize={isMobile ? "xl" : "2xl"}
                  >
                    <Icon as={element.icon} />
                  </Flex>
                  
                  <Heading 
                    as="h3" 
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="400"
                    mb={3}
                    fontFamily="var(--font-amadi)"
                  >
                    {element.name}
                  </Heading>
                  
                  <Text 
                    fontSize="md" 
                    color={colors.forestSlate}
                    fontWeight="300"
                  >
                    {element.description}
                  </Text>
                </Flex>
              </Flex>
            </MotionBox>
          ))}
        </Grid>

        {/* Story Section */}
        <MotionFlex
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          direction={{ base: "column", lg: "row" }}
          align="center"
          gap={{ base: 8, md: 12, lg: 16 }}
          mt={{ base: 12, md: 16 }}
        >
          {/* Left image with story */}
          <Box 
            flex="1" 
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: "-15px",
              left: "-15px",
              width: "calc(100% - 30px)",
              height: "calc(100% - 30px)",
              border: "1px solid",
              borderColor: colors.deepEmber,
              zIndex: 0,
              opacity: 0.3
            }}
          >
            <Box
              position="relative"
              borderRadius="sm"
              overflow="hidden"
              boxShadow="xl"
              zIndex={1}
            >
              <Image
                src="/images/ignis-story.jpg"
                alt="The IGNIS journey and founders"
                objectFit="cover"
                w="100%"
                h={{ base: "350px", md: "450px" }}
              />
            </Box>
            
            <Box
              position="absolute"
              bottom="-40px"
              right={{ base: "20px", md: "-40px" }}
              width={{ base: "120px", md: "150px" }}
              height={{ base: "120px", md: "150px" }}
              bg={colors.deepEmber}
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontFamily="var(--font-amadi)"
              fontSize={{ base: "lg", md: "xl" }}
              p={4}
              textAlign="center"
              boxShadow="lg"
              zIndex={2}
            >
              Est. 2022
            </Box>
          </Box>
          
          {/* Right story content */}
          <VStack 
            flex="1" 
            align="flex-start" 
            spacing={5}
          >
            <Box 
              px={4} 
              py={1} 
              bg={colors.creamyLinen} 
              mb={2}
            >
              <Text 
                textTransform="uppercase" 
                fontSize="sm" 
                fontWeight="500" 
                letterSpacing="0.1em"
                color={colors.deepEmber}
              >
                Our Story
              </Text>
            </Box>
            
            <Heading 
              as="h3" 
              fontSize={{ base: "2xl", md: "3xl" }}
              fontFamily="var(--font-amadi)"
              lineHeight="1.2"
              mb={2}
            >
              From Ancient Wisdom to Modern Luxury
            </Heading>
            
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="300"
              color={colors.forestSlate}
              lineHeight="1.8"
              mb={4}
            >
              Founded by master chandler Elena Vasquez, IGNIS emerged from a decade of studying ancient fire rituals across diverse cultures. Drawing from traditions that span from Nordic fire festivals to Vedic flame ceremonies, Elena crafted a collection that honors these sacred practices through modern, luxury candles.
            </Text>
            
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="300"
              color={colors.forestSlate}
              lineHeight="1.8"
              mb={6}
            >
              Each IGNIS candle embodies the transformative power of fire—the element that both destroys and creates anew. Our products are designed to serve as catalysts for personal rebirth, intention setting, and spiritual awakening.
            </Text>
            
            <HStack spacing={5}>
              <Button
                variant="outline"
                color={colors.deepEmber}
                borderColor={colors.deepEmber}
                fontWeight="400"
                size="lg"
                px={8}
                _hover={{
                  bg: colors.deepEmber,
                  color: "white",
                  transform: "translateY(-3px)"
                }}
                transition="all 0.3s ease"
              >
                Our Materials
              </Button>
              
              <Button
                bg={colors.terracottaGlow}
                color="white"
                fontWeight="400"
                size="lg"
                px={8}
                _hover={{
                  bg: colors.phoenixOrange,
                  transform: "translateY(-3px)",
                  boxShadow: "lg"
                }}
                transition="all 0.3s ease"
              >
                Meet Elena
              </Button>
            </HStack>
          </VStack>
        </MotionFlex>
      </Container>
    </Box>
  );
}; 
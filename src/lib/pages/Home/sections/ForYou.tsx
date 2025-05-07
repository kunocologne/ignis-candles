"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  SimpleGrid,
  Image,
  Icon,
  Badge,
  VStack,
  Divider,
  useBreakpointValue
} from "@chakra-ui/react";
import { colors } from '@/styles';
import { motion } from "framer-motion";
import { 
  FaHeart, 
  FaSpa, 
  FaMoon, 
  FaYinYang,
  FaFire
} from "react-icons/fa";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

type ProductCardProps = {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  isNew?: boolean;
  badgeColor?: string;
};

const ProductCard = ({ 
  title, 
  subtitle, 
  description, 
  price, 
  image, 
  badge,
  isNew = false,
  badgeColor = colors.deepEmber
}: ProductCardProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Box
        bg="white"
        borderRadius="sm"
        overflow="hidden"
        boxShadow="lg"
        height="100%"
        position="relative"
        _hover={{
          transform: "translateY(-8px)",
          boxShadow: "xl"
        }}
        transition="all 0.3s ease"
      >
        {/* Image container */}
        <Box
          height="300px"
          position="relative"
          overflow="hidden"
        >
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            width="100%"
            height="100%"
            transition="transform 0.5s ease"
            _groupHover={{
              transform: "scale(1.05)"
            }}
          />
          
          {/* New badge */}
          {isNew && (
            <Badge
              position="absolute"
              top="15px"
              right="15px"
              bg={colors.phoenixOrange}
              color="white"
              fontWeight="500"
              px={3}
              py={1}
              borderRadius="sm"
              textTransform="uppercase"
              fontSize="xs"
              letterSpacing="0.05em"
              boxShadow="md"
            >
              New
            </Badge>
          )}
          
          {/* Optional badge */}
          {badge && (
            <Badge
              position="absolute"
              top={isNew ? "50px" : "15px"}
              right="15px"
              bg={badgeColor}
              color="white"
              fontWeight="500"
              px={3}
              py={1}
              borderRadius="sm"
              textTransform="uppercase"
              fontSize="xs"
              letterSpacing="0.05em"
              boxShadow="md"
            >
              {badge}
            </Badge>
          )}
        </Box>
        
        {/* Content */}
        <Box p={6}>
          <VStack spacing={3} align="flex-start">
            <Text
              color={colors.forestSlate}
              fontSize="sm"
              fontWeight="500"
              textTransform="uppercase"
              letterSpacing="0.05em"
            >
              {subtitle}
            </Text>
            
            <Heading
              as="h3"
              fontSize="xl"
              fontFamily="var(--font-amadi)"
            >
              {title}
            </Heading>
            
            <Text
              color={colors.forestSlate}
              fontSize="md"
              fontWeight="300"
              lineHeight="1.6"
            >
              {description}
            </Text>
            
            <Divider borderColor={colors.creamyLinen} my={2} />
            
            <Flex justify="space-between" width="100%" align="center">
              <Text
                fontWeight="bold"
                fontSize="xl"
                color={colors.deepEmber}
              >
                {price}
              </Text>
              
              <Button
                size="sm"
                bg="transparent"
                color={colors.deepEmber}
                border="1px solid"
                borderColor={colors.deepEmber}
                rounded="sm"
                _hover={{
                  bg: colors.deepEmber,
                  color: "white"
                }}
                transition="all 0.3s ease"
              >
                Add to Cart
              </Button>
            </Flex>
          </VStack>
        </Box>
      </Box>
    </MotionBox>
  );
};

export const ForYouSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  
  const featuredProducts = [
    {
      title: "Phoenix Rebirth",
      subtitle: "Signature Collection",
      description: "Our flagship candle ignites personal transformation with notes of amber, dragon's blood, and sacred cedar.",
      price: "$68",
      image: "/images/product-phoenix.jpg",
      isNew: true
    },
    {
      title: "Lunar Goddess",
      subtitle: "Celestial Collection",
      description: "Embrace divine feminine energy with this moonflower, jasmine, and silver sage infusion.",
      price: "$72",
      image: "/images/product-moon.jpg",
      badge: "Limited"
    },
    {
      title: "Sacred Union",
      subtitle: "Ritual Collection",
      description: "Balance masculine and feminine energies with this harmonizing blend of rose, sandalwood, and vanilla.",
      price: "$65",
      image: "/images/product-sacred.jpg",
      badge: "Bestseller",
      badgeColor: colors.goldFlame
    },
    {
      title: "Chakra Alignment",
      subtitle: "Elements Collection",
      description: "Seven essential oils corresponding to each chakra create a complete energetic tuning experience.",
      price: "$85",
      image: "/images/product-chakra.jpg"
    }
  ];

  return (
    <Box 
      py={{ base: 20, md: 28, lg: 32 }}
      bg={colors.offWhite}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="-5%"
        left="-10%"
        width="300px"
        height="300px"
        bg={`${colors.creamyLinen}60`}
        borderRadius="63% 37% 54% 46% / 55% 48% 52% 45%"
        transform="rotate(45deg)"
        opacity="0.6"
        zIndex={0}
      />
      
      <Box
        position="absolute"
        bottom="-5%"
        right="-10%"
        width="400px"
        height="400px"
        bg={`${colors.creamyLinen}60`}
        borderRadius="37% 63% 46% 54% / 48% 55% 45% 52%"
        transform="rotate(65deg)"
        opacity="0.6"
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
          mb={{ base: 14, lg: 20 }}
        >
          <Flex justify="center" mb={5}>
            <Flex
              width="80px"
              height="80px"
              bg={`${colors.deepEmber}10`}
              color={colors.deepEmber}
              fontSize="xl"
              borderRadius="full"
              align="center"
              justify="center"
            >
              <Icon as={FaHeart} />
            </Flex>
          </Flex>
          
          <Text
            color={colors.deepEmber}
            fontSize="sm"
            fontWeight="500"
            textTransform="uppercase"
            letterSpacing="0.15em"
            mb={3}
          >
            Crafted for Your Journey
          </Text>
          
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontFamily="var(--font-amadi)"
            lineHeight="1.1"
            mb={5}
          >
            Find Your Perfect <Box as="span" color={colors.deepEmber} display="inline">Ritual</Box>
          </Heading>
          
          <Divider
            width="80px"
            borderColor={colors.deepEmber}
            opacity={0.5}
            mx="auto"
            my={5}
          />
          
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="300"
            color={colors.forestSlate}
            maxW="800px"
            mx="auto"
            lineHeight="1.8"
          >
            Explore our curated collection of luxury ritual candles, each designed 
            for specific intentions and energetic frequencies. Which flame will ignite your path?
          </Text>
        </MotionBox>
        
        {/* Product categories */}
        <Flex 
          justify="center" 
          mb={{ base: 12, lg: 16 }}
          display={{ base: "none", md: "flex" }}
        >
          <SimpleGrid columns={4} spacing={8} maxW="800px">
            {[
              { icon: FaFire, name: "Transformation", color: colors.phoenixOrange },
              { icon: FaSpa, name: "Balance", color: colors.greenFlame },
              { icon: FaMoon, name: "Divine Feminine", color: colors.mysticalPurple },
              { icon: FaYinYang, name: "Sacred Union", color: colors.deepEmber }
            ].map((category) => (
              <MotionBox
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Flex
                  direction="column"
                  align="center"
                  py={5}
                  px={3}
                  bg={`${category.color}05`}
                  border="1px solid"
                  borderColor={`${category.color}20`}
                  borderRadius="md"
                  cursor="pointer"
                  _hover={{
                    bg: `${category.color}10`,
                    borderColor: `${category.color}40`
                  }}
                  transition="all 0.3s ease"
                >
                  <Flex
                    width="50px"
                    height="50px"
                    bg={`${category.color}15`}
                    color={category.color}
                    borderRadius="full"
                    align="center"
                    justify="center"
                    fontSize="xl"
                    mb={3}
                  >
                    <Icon as={category.icon} />
                  </Flex>
                  
                  <Text
                    fontWeight="500"
                    fontSize="sm"
                    textAlign="center"
                  >
                    {category.name}
                  </Text>
                </Flex>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Flex>
        
        {/* Featured products */}
        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={8}
          mb={{ base: 12, lg: 16 }}
        >
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              subtitle={product.subtitle}
              description={product.description}
              price={product.price}
              image={product.image}
              badge={product.badge}
              isNew={product.isNew}
              badgeColor={product.badgeColor}
            />
          ))}
        </SimpleGrid>
        
        {/* CTA banner */}
        <MotionFlex
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          bg="white"
          borderRadius="md"
          p={{ base: 8, md: 10 }}
          boxShadow="lg"
          backgroundImage="linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('/images/texture-pattern.png')"
          backgroundSize="cover"
          position="relative"
          overflow="hidden"
          _after={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "5px",
            height: "100%",
            bg: colors.deepEmber
          }}
        >
          <Box maxW={{ base: "100%", md: "60%" }} mb={{ base: 6, md: 0 }}>
            <Heading
              as="h3"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontFamily="var(--font-amadi)"
              lineHeight="1.2"
              mb={4}
              position="relative"
              display="inline-block"
            >
              Looking for something special?
            </Heading>
            
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={colors.forestSlate}
              fontWeight="300"
              lineHeight="1.7"
            >
              Our alchemists can craft a custom ritual candle tailored to your specific intentions, 
              energy needs, or zodiac sign. Create a truly personal transformative experience.
            </Text>
          </Box>
          
          <Button
            size="lg"
            bg={colors.deepEmber}
            color="white"
            px={8}
            py={7}
            fontSize="md"
            fontWeight="500"
            boxShadow="md"
            _hover={{
              bg: colors.terracottaGlow,
              transform: "translateY(-3px)",
              boxShadow: "lg"
            }}
            transition="all 0.3s ease"
          >
            Create Custom Candle
          </Button>
        </MotionFlex>
      </Container>
    </Box>
  );
}; 
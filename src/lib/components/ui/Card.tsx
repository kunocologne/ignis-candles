"use client";

import { Box, BoxProps, Image, Text, Flex, VStack } from "@chakra-ui/react";
import { colors } from "@/styles";
import { Button } from "./Button";

type ProductCardProps = BoxProps & {
  title: string;
  price: string;
  imageUrl: string;
  onAddToCart?: () => void;
};

export const ProductCard = ({ title, price, imageUrl, onAddToCart, ...props }: ProductCardProps) => {
  return (
    <Box 
      bg="white"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      transition="all 0.3s ease"
      _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
      {...props}
    >
      <Box position="relative" height="260px" overflow="hidden">
        <Image 
          src={imageUrl} 
          alt={title}
          objectFit="cover"
          width="100%"
          height="100%"
          transition="transform 0.5s ease"
          _hover={{ transform: "scale(1.05)" }}
        />
      </Box>
      
      <VStack p={4} align="start" spacing={2}>
        <Text fontWeight="500" fontSize="lg">{title}</Text>
        <Text fontWeight="bold" color={colors.phoenixOrange}>{price}</Text>
        
        <Button 
          variant="outline" 
          size="sm" 
          width="full" 
          mt={2}
          onClick={onAddToCart}
        >
          Add to Cart
        </Button>
      </VStack>
    </Box>
  );
};

type ContentCardProps = BoxProps & {
  title: string;
  description: string;
  imageUrl?: string;
};

export const ContentCard = ({ title, description, imageUrl, ...props }: ContentCardProps) => {
  return (
    <Box 
      bg="white"
      borderRadius="md"
      overflow="hidden"
      boxShadow="sm"
      transition="all 0.3s ease"
      _hover={{ boxShadow: "md" }}
      {...props}
    >
      {imageUrl && (
        <Image 
          src={imageUrl} 
          alt={title}
          objectFit="cover"
          width="100%"
          height="200px"
        />
      )}
      
      <Box p={5}>
        <Text fontWeight="600" fontSize="lg" mb={2}>{title}</Text>
        <Text color={colors.midnightCharcoal} fontSize="md">{description}</Text>
      </Box>
    </Box>
  );
}; 
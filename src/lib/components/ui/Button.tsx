"use client";

import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { colors } from "@/styles";

type CustomButtonProps = ButtonProps & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

export const Button = ({ variant = "primary", children, ...props }: CustomButtonProps) => {
  const getStylesByVariant = () => {
    switch (variant) {
      case "primary":
        return {
          bg: colors.phoenixOrange,
          color: "white",
          _hover: { bg: colors.deepEmber },
        };
      case "secondary":
        return {
          bg: colors.creamyLinen,
          color: colors.midnightCharcoal,
          _hover: { bg: colors.ashGray },
        };
      case "outline":
        return {
          bg: "transparent",
          color: colors.phoenixOrange,
          border: "1px solid",
          borderColor: colors.phoenixOrange,
          _hover: { bg: colors.phoenixOrange, color: "white" },
        };
      case "ghost":
        return {
          bg: "transparent",
          color: colors.midnightCharcoal,
          _hover: { bg: colors.creamyLinen },
        };
      default:
        return {};
    }
  };

  return (
    <ChakraButton
      rounded="md"
      fontWeight="500"
      {...getStylesByVariant()}
      {...props}
    >
      {children}
    </ChakraButton>
  );
}; 
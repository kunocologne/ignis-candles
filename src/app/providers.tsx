"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";
import { colors } from '@/styles';
import { LayoutWrapper } from "./LayoutWrapper";

// Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors,
  fonts: {
    heading: 'var(--font-amadi), serif',
    body: 'var(--font-sofia-pro), sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: colors.offWhite,
        color: colors.midnightCharcoal,
      },
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: colors.phoenixOrange,
          color: "white",
          fontWeight: "500",
          borderRadius: "2px",
          px: 8,
          _hover: {
            bg: colors.terracottaGlow,
            transform: "translateY(-2px)",
            boxShadow: "lg",
          },
          transition: "all 0.3s ease",
        },
        secondary: {
          bg: "transparent",
          color: colors.deepEmber,
          border: "1px solid",
          borderColor: colors.deepEmber,
          fontWeight: "500",
          borderRadius: "2px",
          px: 8,
          _hover: {
            bg: colors.deepEmber,
            color: "white",
            transform: "translateY(-2px)",
            boxShadow: "md",
          },
          transition: "all 0.3s ease",
        },
        luxe: {
          bg: "white",
          color: colors.deepEmber,
          fontWeight: "500",
          borderRadius: "2px",
          px: 8,
          boxShadow: "sm",
          _hover: {
            boxShadow: "md",
            transform: "translateY(-2px)",
            bg: colors.creamyLinen,
          },
          transition: "all 0.3s ease",
        },
        gold: {
          bg: colors.burnishedGold,
          color: colors.midnightCharcoal,
          fontWeight: "500",
          borderRadius: "2px",
          px: 8,
          _hover: {
            bg: colors.antiqueBrass,
            transform: "translateY(-2px)",
            boxShadow: "lg",
          },
          transition: "all 0.3s ease",
        },
      },
    },
    Heading: {
      baseStyle: {
        letterSpacing: "tight",
        color: colors.midnightCharcoal,
      },
    },
    Text: {
      baseStyle: {
        color: colors.midnightCharcoal,
        fontSize: "md",
      },
      variants: {
        elegant: {
          fontFamily: "var(--font-amadi), serif",
          lineHeight: "1.6",
        },
        caption: {
          fontSize: "sm",
          color: colors.forestSlate,
          letterSpacing: "0.05em",
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: "1200px",
        px: { base: 4, md: 6 },
      },
    },
    Link: {
      baseStyle: {
        position: "relative",
        transition: "color 0.3s ease",
        _hover: {
          textDecoration: "none",
          color: colors.terracottaGlow,
        },
      },
      variants: {
        underline: {
          _after: {
            content: '""',
            position: 'absolute',
            width: '0%',
            height: '1px',
            bottom: '-2px',
            left: '0',
            bg: colors.terracottaGlow,
            transition: 'width 0.3s ease',
          },
          _hover: {
            _after: {
              width: '100%',
            },
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: "white",
          boxShadow: "sm",
          borderRadius: "2px",
          overflow: "hidden",
          transition: "all 0.3s ease",
          _hover: {
            transform: "translateY(-4px)",
            boxShadow: "md",
          },
        },
      },
    },
  },
  layerStyles: {
    luxuryCard: {
      bg: "white",
      boxShadow: "lg",
      borderRadius: "2px",
      overflow: "hidden",
      transition: "all 0.3s ease",
      _hover: {
        transform: "translateY(-5px)",
        boxShadow: "xl",
      },
    },
    goldAccent: {
      bg: colors.burnishedGold,
      color: colors.midnightCharcoal,
    },
    subtleGradient: {
      bgGradient: `linear(to-r, ${colors.deepEmber}10, ${colors.terracottaGlow}10)`,
    },
    emberBorder: {
      borderLeft: "3px solid",
      borderColor: colors.deepEmber,
      pl: 4,
    },
  },
  textStyles: {
    h1: {
      fontSize: { base: "3xl", md: "5xl" },
      fontWeight: "400",
      lineHeight: "1.2",
      letterSpacing: "-0.02em",
      fontFamily: "var(--font-amadi), serif",
    },
    h2: {
      fontSize: { base: "2xl", md: "4xl" },
      fontWeight: "400",
      lineHeight: "1.2",
      fontFamily: "var(--font-amadi), serif",
    },
    emphasis: {
      fontFamily: "var(--font-amadi), serif",
      fontStyle: "italic",
      color: colors.deepEmber,
    },
    nyx: {
      fontFamily: "var(--font-nyx-std), serif",
      letterSpacing: "0.03em",
    },
    zapfino: {
      fontFamily: "var(--font-zapfino), cursive",
      lineHeight: "1.6",
    },
  },
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
    </ChakraProvider>
  );
} 
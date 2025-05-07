"use client";

import { Box } from "@chakra-ui/react";
import { Header } from "@/lib/components/layout";
import { ReactNode } from "react";

export function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box flex="1">{children}</Box>
    </Box>
  );
} 
"use client";

import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";
import { HeroSection } from './sections/Hero';
import { AboutSection } from './sections/About';
import { SustainabilitySection } from './sections/Sustainability';
import { FireRitualSection } from './sections/FireRitual';
import { ForYouSection } from './sections/ForYou';
import { FooterSection } from '@/lib/components/layout/Footer';
import { colors } from '@/styles';

export const HomePage = (): ReactElement => {
  return (
    <Box minH="100vh">
      <HeroSection />
      <AboutSection />
      <SustainabilitySection />
      <FireRitualSection />
      <ForYouSection />
      <FooterSection />
    </Box>
  );
};

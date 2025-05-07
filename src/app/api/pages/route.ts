import { colors } from '@/styles';
import { NextRequest, NextResponse } from 'next/server';

/**
 * GET handler for retrieving page configuration data
 */
export async function GET(request: NextRequest) {
  // This simulates an API that would potentially fetch data from a CMS or database
  // For now, we're just returning static data as this is a frontend-only project
  
  const pagesData = {
    home: {
      meta: {
        title: 'IGNIS - Candles with Soul and Purpose',
        description: 'Handcrafted ritual candles made from natural coconut and beeswax with sustainable, reusable bases.'
      },
      sections: [
        {
          id: 'hero',
          type: 'hero',
          data: {
            title: 'IGNIS',
            subtitle: 'Candles with Soul and Purpose',
            description: "Born from the fusion of nature, ritual, and regeneration. Each candle is more than a source of light: it's an invitation to reconnect with your essence, elevate your energy, and care for the planet.",
            ctaText: 'Shop Now',
            imageUrl: 'https://via.placeholder.com/600x700.png?text=IGNIS+Candle'
          }
        },
        {
          id: 'about',
          type: 'about',
          data: {
            title: 'Crafted from Nature, Made with Intention',
            description: 'Crafted from natural coconut and beeswax, and shaped in a handcrafted base of papier-mâché and concrete, IGNIS candles are unique — the result of conscious alchemy between pure materials and deep intention.',
            materials: [
              {
                icon: '🐝',
                title: 'Beeswax: Purifying Warmth',
                features: [
                  'Burns cleanly and slowly, without releasing toxins',
                  'Emits negative ions, helping to purify the air and neutralize pollutants',
                  'Provides a warm and comforting glow',
                  'A renewable source rich in natural compounds'
                ]
              },
              {
                icon: '🥥',
                title: 'Coconut Wax: Sustainable Glow',
                features: [
                  'Derived from fractionated coconut oil, burning smoothly and cleanly',
                  'Vegan, biodegradable and sustainable with no toxic emissions',
                  'Helps preserve and gently diffuse natural fragrance',
                  'Perfect balance for slow, even burning'
                ]
              }
            ]
          }
        },
        {
          id: 'sustainability',
          type: 'sustainability',
          data: {
            title: 'Sustainability & Art: The IGNIS Base',
            description: [
              'The candle bases are made using eco cement and recycled papier-mâché, embracing upcycling techniques that turn discarded materials into soulful objects.',
              'Each vessel is unique, with an organic and timeless aesthetic. Once the candle has burned, the base can be reused as a bowl, ritual vessel, or decorative element.'
            ],
            ctaText: 'Our Sustainability Pledge',
            imageUrl: 'https://via.placeholder.com/800x600.png?text=Eco+Friendly+Base'
          }
        },
        {
          id: 'fire-ritual',
          type: 'fire-ritual',
          data: {
            title: 'The IGNIS Guide: Fire Rituals',
            description: 'Every candle comes with a Fire Ritual Guide, designed to support you in using fire as a tool for emotional and energetic transmutation.',
            additionalText: 'From intention-setting to releasing heavy emotions, this guide invites conscious and magical interaction with flame, turning each lighting into a powerful moment of transformation.',
            ctaText: 'Explore Rituals',
            imageUrl: 'https://via.placeholder.com/1000x400.png?text=Fire+Ritual+Guide'
          }
        },
        {
          id: 'for-you',
          type: 'for-you',
          data: {
            title: 'IGNIS is for you if:',
            benefits: [
              'You seek an eco-conscious and beautiful product.',
              'You believe in the power of the elements and ritual.',
              'You value handcrafted, intentional objects.',
              'You want to purify, ground or uplift your inner and outer space.'
            ],
            ctaText: 'Begin Your Journey'
          }
        }
      ],
      theme: {
        colors
      }
    }
  };

  return NextResponse.json(pagesData);
} 
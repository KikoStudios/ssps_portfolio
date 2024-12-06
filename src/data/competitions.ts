import { Trophy, Award, Code2, Brain, Calculator, Globe, Lightbulb, Atom } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Competition {
  title: string;
  date: string;
  location: string;
  placement: string;
  description: string;
  type: 'coding' | 'math' | 'hackathon' | 'science' | 'geography' | 'physics';
}

export const competitionIcons: Record<string, LucideIcon> = {
  coding: Code2,
  math: Calculator,
  hackathon: Lightbulb,
  science: Brain,
  geography: Globe,
  physics: Atom
};

export const competitions: Competition[] = [
  {
    title: 'International Mathematical Olympiad',
    date: 'July 2023',
    location: 'Tokyo, Japan',
    placement: 'Gold Medal',
    description: 'Solved complex mathematical problems in algebra and geometry',
    type: 'math'
  },
  {
    title: 'Global Hackathon 2023',
    date: 'September 2023',
    location: 'Berlin, Germany',
    placement: '1st Place',
    description: 'Developed an AI solution for sustainable energy management',
    type: 'hackathon'
  },
  {
    title: 'European Physics Olympiad',
    date: 'May 2023',
    location: 'Prague, Czech Republic',
    placement: 'Silver Medal',
    description: 'Competed in theoretical and experimental physics challenges',
    type: 'physics'
  },
  {
    title: 'International Geography Championship',
    date: 'March 2023',
    location: 'Stockholm, Sweden',
    placement: 'Bronze Medal',
    description: 'Demonstrated expertise in physical and human geography',
    type: 'geography'
  }
];
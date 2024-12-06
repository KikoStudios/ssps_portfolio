import { Github, ExternalLink } from 'lucide-react';
import type { IconType } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  details: {
    overview: string;
    features: string[];
    technologies: string[];
    challenges: string;
    outcome: string;
  };
  preview: {
    type: 'video' | 'image';
    url: string;
  };
}

export const projects: Project[] = [
  {
    title: 'projects.ai-analytics.title',
    description: 'projects.ai-analytics.description',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'TypeScript', 'Python', 'TensorFlow'],
    github: 'https://github.com',
    live: 'https://example.com',
    details: {
      overview: 'projects.ai-analytics.overview',
      features: [
        'Real-time data processing',
        'Interactive dashboards',
        'AI-powered predictions',
        'Custom report generation'
      ],
      technologies: [
        'React with TypeScript',
        'Python backend with FastAPI',
        'TensorFlow for ML models',
        'PostgreSQL database'
      ],
      challenges: 'projects.ai-analytics.challenges',
      outcome: 'projects.ai-analytics.outcome'
    },
    preview: {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  },
  {
    title: 'projects.smart-city.title',
    description: 'projects.smart-city.description',
    image: 'https://images.unsplash.com/photo-1493489674223-da480c1d7edc?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'IoT', 'GraphQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    details: {
      overview: 'projects.smart-city.overview',
      features: [
        'IoT device management',
        'Real-time monitoring',
        'Predictive maintenance',
        'Emergency response system'
      ],
      technologies: [
        'Next.js for frontend',
        'GraphQL API',
        'IoT sensor integration',
        'Time-series databases'
      ],
      challenges: 'projects.smart-city.challenges',
      outcome: 'projects.smart-city.outcome'
    },
    preview: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1493489674223-da480c1d7edc?auto=format&fit=crop&w=1200&q=80'
    }
  },
  {
    title: 'projects.quantum.title',
    description: 'projects.quantum.description',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Python', 'WebAssembly'],
    github: 'https://github.com',
    live: 'https://example.com',
    details: {
      overview: 'projects.quantum.overview',
      features: [
        'Interactive quantum circuit builder',
        'Real-time simulation',
        'Educational tutorials',
        'Community challenges'
      ],
      technologies: [
        'React for UI',
        'Python for quantum simulations',
        'WebAssembly for performance',
        'Interactive visualizations'
      ],
      challenges: 'projects.quantum.challenges',
      outcome: 'projects.quantum.outcome'
    },
    preview: {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  }
];
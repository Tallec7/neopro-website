import type { SolutionPanel, Feature, ColorPanel } from '../solution';

export const solutionPanels: SolutionPanel[] = [
  {
    title: 'Showcase your sponsors.',
    description:
      'All year long, your sponsors benefit from a communication platform during your matches to share their news. They can update their content weekly and receive broadcast reports.',
  },
  {
    title: 'Celebrate your players.',
    description:
      'Your players deserve the pro treatment too. We offer to film their celebrations at the start of the season, along with all types of content (video/photo) for your media day.',
  },
  {
    title: 'Share your news.',
    description:
      "Make sure your supporters don't miss your upcoming matches, club events, and merchandise in your shop.",
  },
];

export const features: Feature[] = [
  {
    title: 'No internet required',
    description: 'No need for wifi in your venue.',
  },
  {
    title: 'Wireless',
    description:
      'Remotely controlled from your phone, which acts as a remote.',
  },
  {
    title: 'Easy to use',
    description:
      'Ultra-simplified interface, usable by any volunteer on match day.',
  },
];

export const colorPanels: ColorPanel[] = [
  {
    title: 'Ongoing support',
    features: [
      'Complete initial training',
      'Responsive technical support',
      'Tips to optimize your content',
      'Weekly video assistance & updates',
      'Full autonomy option: admin access with visual/video integration',
    ],
    bgColor: 'bg-[#06263f]',
  },
  {
    title: 'Turnkey solution',
    features: [
      'Pre-configured box delivered to you',
      'Setup in under 5 minutes',
      'Intuitive and simple app',
      'Compatible with all HDMI screens',
    ],
    bgColor: 'bg-[#0a0b0d]',
  },
  {
    title: 'Professional video production',
    features: [
      'Complete media day package (photo+video)',
      'Broadcast-quality video templates, customizable to your club colors',
    ],
    bgColor: 'bg-[#06263f]',
  },
  {
    title: 'Benefits for your club',
    features: [
      'Professional and modern image',
      'Effective communication platform',
      'Better-informed and engaged supporters',
      'Quantified visibility for your sponsors',
      'Better sponsor retention',
    ],
    bgColor: 'bg-[#06263f]',
  },
];

export const steps = [
  { number: '1', title: 'Connect the box to the screen', description: 'Compatible with any screen' },
  { number: '2', title: 'Connect to the screen', description: 'No internet needed' },
  { number: '3', title: 'Your phone becomes the remote', description: 'Usable by any volunteer' },
];

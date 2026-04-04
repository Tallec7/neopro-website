import type { FaqItem } from '../faq';

export const faqItems: FaqItem[] = [
  {
    question: 'Is the screen included in the subscription?',
    answer: 'No, the screen is not included in the subscription.',
    answerAfterBullets: 'However, we work with partners who offer preferential rates. We can also assist you in obtaining funding from your local council.',
  },
  {
    question: 'Can we display on two screens simultaneously?',
    answer: 'Yes, it is absolutely possible to duplicate content on two screens within the gym.',
  },
  {
    question: 'Can multiple people connect to the remote at the same time?',
    answer: 'Yes. The remote can be used simultaneously from multiple phones, making it easier to manage during matches.',
  },
  {
    question: 'Is it possible to display the score?',
    answer: 'Yes, the score can be displayed directly via the remote. It works independently and is not connected to the scoring table.',
  },
  {
    question: 'Can we schedule content in advance?',
    answer: 'Yes, absolutely. You can create multiple automatic broadcast loops and schedule different content for different moments of the match:',
    bullets: ['Pre-match', 'Timeout', 'Half-time', 'Post-match'],
    answerAfterBullets: 'Everything is fully customizable.',
  },
  {
    question: 'If we already have team photos, can we use them?',
    answer: 'Yes, of course. You can send us your photos and we will integrate them into our video templates.',
    answerAfterBullets: 'This is part of the video package options offered (see the "Pricing" section).',
  },
  {
    question: 'Is it possible to use your solution for a specific event (e.g. tournament)?',
    answer: 'Yes, in that case, we provide a custom quote.',
    answerAfterBullets: 'And just like the annual subscription, video production is optional.',
  },
  {
    question: 'Is it possible to also control LED perimeter boards with your solution?',
    answer: 'Yes, this is part of the options offered in the Premium plan. Feel free to contact us for more information.',
  },
];

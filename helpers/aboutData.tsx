export interface CareerFeature {
  id: number;
  title: string;
  description: string;
}

export interface CareerData {
  id: number;
  motto: string;
  careerFeatures: CareerFeature[];
  careerOfferDescription: string;
  careerQuestionTitle: string;
}

export const careerData: CareerData = {
  id: 1,
  motto: `Don't miss your opportunity! Fill out the form right now and join our team!`,
  careerFeatures: [
    {
      id: 1,
      title: 'Professional development',
      description:
        'We offer growth opportunities and a creative environment to nurture your talents.',
    },
    {
      id: 2,
      title: 'Teamwork',
      description:
        'Join our close-knit family, where support and inspiration abound.',
    },
    {
      id: 3,
      title: 'Stimulating work environment',
      description:
        'Flexibility and remote options for a comfortable experience.',
    },
    {
      id: 4,
      title: 'Exciting challenges',
      description:
        'Unleash your potential through unforgettable projects showcasing Carpathian beauty.',
    },
  ],
  careerOfferDescription:
    'Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission.',
  careerQuestionTitle: 'Why us ?',
};

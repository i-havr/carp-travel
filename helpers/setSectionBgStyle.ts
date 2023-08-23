export const setSectionBgStyle = (currentSectionBg?: string | undefined) => {
  return {
    services: {
      backgroundImage: `linear-gradient(
      to bottom,
      rgba(0, 24, 38, 0.8),
      rgba(0, 37, 49, 0)
    ),
    linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), url(${currentSectionBg})`,
      backgroundSize: '100% 247px, cover, cover',
      backgroundPosition: '0 0, center, center',
      backgroundRepeat: 'no-repeat',
    },
  };
};

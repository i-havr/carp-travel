import { Service } from './servicesData';

export const changeBackground = (
  currentSlide: Service,
  setCurrentSectionBg: (bgImage: string | undefined) => void
): void => {
  if (typeof window !== 'undefined') {
    const isRetina = Math.round(window.devicePixelRatio) > 1;
    const width = window.innerWidth;

    if (width < 1280) {
      const bgImage = isRetina
        ? currentSlide?.bgMobileTabletRetinaImageUrl
        : currentSlide?.bgMobileTabletImageUrl;
      setCurrentSectionBg(bgImage);
    } else {
      const bgImage = isRetina
        ? currentSlide?.bgDesktopRetinaImageUrl
        : currentSlide?.bgDesktopImageUrl;
      setCurrentSectionBg(bgImage);
    }
  }
};

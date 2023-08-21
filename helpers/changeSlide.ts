import { Service } from './services-info';

export const changeBackground = (
  currentSlide: Service,
  isScreenMobile: boolean,
  isScreenTablet: boolean,
  setCurrentSectionBg: (bgImage: string | undefined) => void
) => {
  const isRetina = Math.round(window?.devicePixelRatio) > 1;

  if (isScreenMobile || isScreenTablet) {
    const bgImage = isRetina
      ? currentSlide?.bgMobileTabletRetinaImageUrl
      : currentSlide?.bgMobileTabletImageUrl;
    setCurrentSectionBg(bgImage);
  } else {
    const bgImage = isRetina
      ? currentSlide?.bgMobileTabletRetinaImageUrl
      : currentSlide?.bgMobileTabletImageUrl;
    console.log('bgImage', bgImage);
    setCurrentSectionBg(bgImage);
  }
};

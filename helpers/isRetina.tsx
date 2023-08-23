export const isRetina = (): boolean | undefined => {
  if (typeof window !== 'undefined') {
    const isRetina = Math.round(window?.devicePixelRatio) > 1;
    return isRetina;
  }
};

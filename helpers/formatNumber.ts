export const formatNumber = (number: number): string => {
  if (number > 9) {
    return String(number);
  } else {
    return '0' + number;
  }
};

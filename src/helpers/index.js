// fahrenheit to celsius
export const fahrenheitToCelsius = fahrenheit => {
  return Math.round((fahrenheit - 32) * (5 / 9));
};

export const hourToString = hour => {
  switch (hour) {
    case 0:
      return '12AM';
    case hour > 11:
      return `${hour}PM`;
    default:
      return `${hour || '0'}AM`;
  }
};

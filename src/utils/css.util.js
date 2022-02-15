const oneRem = 16;

export function convertPxToRem(value) {
  return `${value / oneRem}rem`;
}
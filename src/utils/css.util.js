const oneRem = 16;

export function convertPxToRem(value) {
  return `${value / oneRem}rem`;
}

export function animate(el, animationClass) {
  el.classList.remove(animationClass);

  setTimeout(() => el.classList.add(animationClass));
}
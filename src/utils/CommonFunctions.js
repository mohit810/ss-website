export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
};

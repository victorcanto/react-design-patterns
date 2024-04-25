export const debounce = (fn: CallableFunction, delay: number) => {
  let timerId: NodeJS.Timeout;

  return (...args: unknown[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => fn(...args), delay);
  };
};

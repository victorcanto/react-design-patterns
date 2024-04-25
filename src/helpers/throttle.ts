export const throttle = (fn: CallableFunction, wait: number) => {
  let timerId: NodeJS.Timeout;
  let inThrottle: boolean;
  let lastTime: number;
  return (...args: unknown[]) => {
    if (!inThrottle) {
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn(...args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

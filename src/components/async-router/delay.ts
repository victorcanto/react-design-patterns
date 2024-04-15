const delay = (data: unknown, interval: number) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, interval);
  });
};

export default delay;

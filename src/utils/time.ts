export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomSleep = async () => {
  const ms = getRandomNumber(1000, 3000);
  await sleep(ms);
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

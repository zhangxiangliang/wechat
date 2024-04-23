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

export const padWithZero = (number: number) => {
  return number.toString().padStart(2, "0");
};

export function getCurrentTime() {
  const now = new Date();
  const hours = padWithZero(now.getHours());
  const minutes = padWithZero(now.getMinutes());
  return `${hours}:${minutes}`;
}

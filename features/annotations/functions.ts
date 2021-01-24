const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const looger = (message: string): void => {
  console.log(message);
};

const throwErrror = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: String;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

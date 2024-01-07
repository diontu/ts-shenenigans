// typescript objects
const greetings: { one: string; two: string; numberOfGreetings: number } = {
  one: "Hello",
  two: "Hello World!",
  numberOfGreetings: 2,
};

const anyGreeting: { [greetingKey: string]: string } = {
  one: "hello",
  two: "hello world",
  three: "bonjour!",
};

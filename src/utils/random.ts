const random = (minimum: number, maximum: number) =>
  Math.round(Math.random() * (maximum - minimum) + minimum);

export default random;

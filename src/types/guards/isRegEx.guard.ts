export const isRegEx = (value: unknown): value is RegExp => {
  return value instanceof RegExp;
};

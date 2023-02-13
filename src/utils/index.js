export const cutString = (str, size = 200) => {
  const symbol = str.length > size ? "..." : "";
  return str.slice(0, size) + symbol;
};

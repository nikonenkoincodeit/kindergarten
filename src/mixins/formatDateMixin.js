export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("uk", { dateStyle: "long" }).format(date);
};

const convertToDay = (timestamp) => {
  const date = new Date(timestamp * 1000); // Pretvori timestamp u milisekunde
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDay();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return days[day];
};
export default convertToDay;

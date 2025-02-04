const convertToTime = (timestamp) => {
  const date = new Date(timestamp * 1000); // Pretvori timestamp u milisekunde
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes.toString().padStart(2, "0")}`; // Vraća samo vrijeme
};
export default convertToTime;

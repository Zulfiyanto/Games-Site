//Base URL
const base_url = "http://api.rawg.io/api/";

// //Getting the date
// const getCurrentMonth = () => {
//   const month = new Date().getMonth() + 1;
//   if (month < 10) {
//     return `0${month}`;
//   } else {
//     return month;
//   }
// };

// //Getting the day
// const getCurrentDay = () => {
//   const day = new Date().getDay() + 1;
//   if (day < 10) {
//     return `0${day}`;
//   } else {
//     return day;
//   }
// };

const currentYear = new Date().getFullYear();
const currentMonth = new Date().toISOString().slice(5, 7);
const currentDay = new Date().toISOString().slice(8, 10);

const currentDate = new Date().toISOString().slice(0, 10);
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 2}-${currentMonth}-${currentDay}`;

const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

const popularGamesURL = () => `${base_url}${popularGames}`;


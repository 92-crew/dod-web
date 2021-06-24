export function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = 1 + date.getMonth();
  const day = date.getDate();

  return { year, month, day };
}

export function formatDate(date = {}) {
  const month = (`0${(date.month)}`).slice(-2);
  const day = (`0${date.day}`).slice(-2);
  
  return `${date.year}-${month}-${day}`;
}
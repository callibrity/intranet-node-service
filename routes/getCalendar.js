function getCalendar(year, month) {
  const lastDayPreviousMonth = new Date(year, month, 0);
  const lastDayThisMonth = new Date(year, month + 1, 0);
  const lastWeekdayPreviousMonth = lastDayPreviousMonth.getDay();
  const lastDatePreviousMonth = lastDayPreviousMonth.getDate();
  const lastDateThisMonth = lastDayThisMonth.getDate();
  const calendarList = [];
  for (let i = lastWeekdayPreviousMonth; i >= 0; i -= 1) {
    calendarList.push(lastDatePreviousMonth - i);
  }
  for (let i = 1; i <= lastDateThisMonth; i += 1) {
    calendarList.push(i);
  }
  let i = 1;
  while (calendarList.length % 7 !== 0) {
    calendarList.push(i);
    i += 1;
  }
  return calendarList;
}

module.exports = getCalendar;

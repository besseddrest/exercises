function daysBetweenDates(y1, m1, d1, y2, m2, d2) {
  let days = 0;
  // days in diff years
  if (y2 > y1) {
    // adjacent or a span of multiple years
    const yearDiff = y2 - y1 - 1;
    // get Jan 1 to Date 1
    const group1 = daysBetweenDatesInYear(y2, 1, 1, y2, m2, d2);
    // get Date 2 to Dec 31
    const group2 = daysBetweenDatesInYear(y1, m1, d1, y1, 12, 31);
    // add a day to account for Dec 31 => Jan 1
    days = group1 + group2 + (yearDiff * 365) + 1;
  } else {
    // within the same year
    days = daysBetweenDatesInYear(y1, m1, d1, y2, m2, d2);
  }
  return days;
}

function daysBetweenDatesInYear(y1, m1, d1, y2, m2, d2) {
  const daysInMonths = [31,28,31,30,31,30,31,31,30,31,30,31];
  let days = 0;
  // days in same month
  if (m1 == m2) {
    days = d2 - d1;
  } else {
    // days different months
    const monthDiff = m2 - m1;
    // start with days left in first month, plus days into last month
    days = (daysInMonths[m1 - 1] - d1) + d2;
    // fill in all the days in between
    for (let i = m1; i < m2 - 1; i++) {
      days += daysInMonths[i];
    }
  }
  return days;
}

console.log(daysBetweenDates(2013, 2, 3, 2013, 2, 12)); // 9 days
console.log(daysBetweenDates(2013, 2, 3, 2013, 3, 12)); // 37 days
console.log(daysBetweenDates(2013, 2, 3, 2013, 9, 12)); // 221 days
console.log(daysBetweenDates(2013, 9, 3, 2014, 2, 12)); // 162 days
console.log(daysBetweenDates(2013, 2, 3, 2014, 9, 12)); // 586 days
console.log(daysBetweenDates(2013, 2, 3, 2017, 9, 12)); // 1681 days

// Sept 3, 2013
// Feb 12, 2014

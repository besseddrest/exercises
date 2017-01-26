function weeklyTemps() {
  // 4 weeks, 7 days per week
  this.dataStore = [
    [
      { name:'Sun', temp: 55 },
      { name:'Mon', temp: 58 },
      { name:'Tue', temp: 49 },
      { name:'Wed', temp: 60 },
      { name:'Thu', temp: 52 },
      { name:'Fri', temp: 51 },
      { name:'Sat', temp: 59 }
    ],
    [
      { name:'Sun', temp: 66 },
      { name:'Mon', temp: 60 },
      { name:'Tue', temp: 61 },
      { name:'Wed', temp: 62 },
      { name:'Thu', temp: 66 },
      { name:'Fri', temp: 65 },
      { name:'Sat', temp: 67 }
    ],
    [
      { name:'Sun', temp: 69 },
      { name:'Mon', temp: 70 },
      { name:'Tue', temp: 60 },
      { name:'Wed', temp: 65 },
      { name:'Thu', temp: 65 },
      { name:'Fri', temp: 66 },
      { name:'Sat', temp: 70 }
    ],
    [
      { name:'Sun', temp: 55 },
      { name:'Mon', temp: 56 },
      { name:'Tue', temp: 56 },
      { name:'Wed', temp: 57 },
      { name:'Thu', temp: 54 },
      { name:'Fri', temp: 53 },
      { name:'Sat', temp: 53 }
    ]
  ];
  this.add = add;
  this.averageMonth = averageMonth;
  this.averageWeek = averageWeek;
  this.averageWeeks = averageWeeks;
}

function add(week, day, temp) {
  this.dataStore[week][day] = (temp);
}

function averageMonth() {
  // average of the month
  let avg = 0;

  for ( let week = 0; week < this.dataStore.length; week++ ) {
    for ( let day = 0; day < this.dataStore[week].length; day++ ) {
      avg += this.dataStore[week][day].temp;
    }
  }

  avg = avg / 28;
  return avg.toFixed(2);
}

function averageWeek(weekIndex) {
  // average of the month
  let avg = 0;

  for ( let day = 0; day < this.dataStore[weekIndex].length; day++ ) {
      avg += this.dataStore[weekIndex][day].temp;
  }

  avg = avg / 7
  return avg.toFixed(2);
}

function averageWeeks() {
  // average of the month
  let total = 0;
  let avg;

  for ( let week = 0; week < this.dataStore.length; week++ ) {
    for ( let day = 0; day < this.dataStore[week].length; day++ ) {
      total += this.dataStore[week][day].temp;
    }
    avg = total / 7;
    console.log(`Week ${week + 1} average is ${avg.toFixed(2)}`)
    total = 0;
  }
}

const thisMonth = new weeklyTemps();

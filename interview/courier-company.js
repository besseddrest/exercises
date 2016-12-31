// Q: Define and demonstrate a use case for bind.
/*
function bindExample(a, b) {
  var element = document.getElementById('inputText');

  function nested() {
    var hello = this.value;
  }.bind(this);

}
*/

this.str = 'hello';

var example = {
  str: 'world',
  getStr: function() {
    return this.str;
  }
};

example.getStr(); // 'world'

var noBind = example.getStr;
noBind(); // 'hello' - returns the global str, doesn't have access to the calling object str

bindExample = noBind.bind(example);
bindExample(); // 'world' - noBind now has access to example's 'str' value

//*---------------------------------------*//
/*
We have an array of timestamps of a user’s deliveries. We would like
to know if our user created 5 or more deliveries within any 30 day
period based on this data.

timestamps = [
    1416182478,  // EPOCH TIME (number of seconds since 1/1/1970)
    1416182490,
    ...
]

*/
var timestamps = [
  1475305200, // Oct 1
  1475650800, // Oct 5
  1476601200, // Oct 16
  1476082800, // Oct 10
  1476169200, // Oct 11
  1477378800, // Oct 25
  1477465200, // Oct 26
];

// 30 days
const thirty = 30 * 24 * 60 * 60;

function hasFiveOrMore(timestamps) {
  // sort timestamps asc
  timestamps.sort();

  // iterate through timestamps
  // check if current value is within day[i] + thirty
  for (var i = 0, len = timestamps.length; i < len; i++) {
    if ( (timestamps[i + 4] - timestamps[i]) =< thirty) {
      return true;
    }
  }

  return false;
}

// ------------------------------------------------------------------
/*
Given an array of customer deliveries in the following format:
[
  {
    place: 'Super Sushi',
    cost: '$5.00',
    date: 'Fri Jan 01 2016 00:00:00 GMT-0800 (PST)', // ISO
    customer: {
        name: 'Wesley',
        id: 11
    },
    ...
  }
]


with efficiency in mind, write a function that returns an array of objects
including only the top 30 customers with the highest number of deliveries
in the past 30 days with the following format:

[
  {
    name: 'Wesley',
    lastDeliveryDate: 'Fri Jan 01 2016 00:00:00 GMT-0800 (PST)',
    count: 10
  },
  ...
]
*/

const deliveries = [
  {
    place: 'Super Sushi',
    cost: '$7.00',
    date: "Sat Jan 01 2016 00:00:00",
    customer: {
        name: 'Wesley',
        id: 101
    }
  },
  {
    place: 'Chipotle',
    cost: '$5.00',
    date: "Sat Nov 01 2016 00:00:00",
    customer: {
        name: 'Jose',
        id: 102
    }
  },
  {
    place: 'Subway',
    cost: '$5.00',
    date: "Sat Nov 01 2016 00:00:00",
    customer: {
        name: 'Wesley',
        id: 101
    }
  },
  //...
];

// iterate over deliveries
// ignore date if not within 30 days
// else
// write to the hashtable
// return only 30 items in that hashtable

function getTop30CustomersV2(deliveries) {
  const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000,
        users = {}, // keep track of count
        dates = {}, // keep track of last date
        top30 = [], // will return top 30
        today = Date.now(); // milliseconds

  // filter out all the deliveries that are older than 30 days
  const recentDeliveries = deliveries.filter(function(deliveries.date){
    return (today - Date.parse(deliveries.date)) < THIRTY_DAYS_IN_MS;
  });

  // sort asc
  recentDeliveries.sort(function(a,b){
    return Date.parse(a.date) - Date.parse(b.date);
  });

  // create hashtable
  for (let i = 0; i < recentDeliveries.length; i++) {
    let name = recentDeliveries.customer.name;
    // add or increment
    if (users[name]) ? users[name]++ : users[name] = 1;
    // will record the lastest date since we've sorted already
    dates[name] = recentDeliveries.date;
  }

  // fill in top30
  for (var name in users) {
    top30.push({
      name: users.name,
      lastDeliveryDate: dates[users.name],
      count: users.count
    });
  }

  // top 30 customers, unsorted
  return top30;
}

// iterate over deliveries
// ignore date if not within 30 days
// else
// write to the hashtable
// return only 30 items in that hashtable

function getTop30Customers(deliveries) {
  const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;
  var users = {};

  var today = Date.now(); // milliseconds

  deliveries.sort(function(a, b){
    return Date.parse(a.date) - Date.parse(b.date);
  });

  for (var i = 0; i < deliveries.length; i++) {
    // if not within 30 days, continue

    var customer = deliveries[i].customer;

    if ((today - Date.parse(deliveries[i].date)) =< THIRTY_DAYS_IN_MS) {

      // check if user in map
      if (users[customer.id]) {
        // increment this customer's count
        users[customer.id].id.count++
        users[customer.id].date = deliveries[i].date;
      } else {
        // add this customer to userMap
        users[customer.id] = {
          name: customer.name,
          date : deliveries[i].date,
          count: 1
        }
      }
    }
  }

  return users.slice(0,29);
}

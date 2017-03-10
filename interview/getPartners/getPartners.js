// given my list of favorite cities
const me = "Me,Amsterdam,Barcelona,London,Prague";

// and a list of users and their favorite cities
const allUsers = [
  "U1,Amsterdam,Barcelona,London,Prague",
  "U2,Shanghai,Hong Kong,Moscow,Sydney,Melbourne",
  "U3,London,Boston,Amsterdam,Madrid",
  "U4,Barcelona,Prague,London,Sydney,Moscow"
];

// return a ranked list of partners
// who are users that have at least half or more matched cities
function getPartners2(arr) {
  const myCities = me.split(',').slice(1);

  const userCount = arr.reduce((all, item) => {
    const userCities = item.split(','),
          userName = userCities.shift();
    let count = 0;

    for (let i = 0; i < userCities.length; i++) {
      if (myCities.indexOf(userCities[i]) > -1)
        count++;
    }

    all[item] = count;

    return all;
  }, {});

  return arr
    .sort((a,b) => {
      return userCount[b] - userCount[a];
    })
    .filter(item => {
      return userCount[item] >= myCities.length/2;
    });
}

console.log(getPartners2(allUsers));








function getPartners(me, users) {
  let userCount = {};
  let meArr = me.slice().split(',');
  let meCities = meArr.slice(1);

  // iterate over each user+cities
  for (let i = 0; i < users.length; i++) {
    const cityArr = users[i].split(',');
    cityArr.shift();

    // count cities
    let count = cityArr.reduce((all, city) => {
      if (meCities.indexOf(city) > -1)
        all++;
      return all;
    }, 0)

    // create hashtable
    userCount[users[i]] = count;
  }

  // sort users based on hashtable value
  users.sort((a, b) => {
    return userCount[b] - userCount[a];
  });

  // return filtered array
  return users.filter((item) => {
    if (userCount[item] >= meCities.length/2)
      return item;
  });
}

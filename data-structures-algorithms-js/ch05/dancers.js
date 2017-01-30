let dancers = [
  'F Maud Deitch',
  'F Lisa Aminpour',
  'M Harold Cabalic',
  'M Ruggy Joesten',
  'M Omid Aminpour',
  'F Amy Hammond',
  'M Vincent Toscano',
  'F Ann Wolf',
  'M Raul Rivera',
  'M Derek Brockett',
  'F Random Girl'
]

function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
}

function getDancers(males, females) {
  for (let i = 0; i < dancers.length; i++) {
    const gender = dancers[i].charAt(0);
    let name = dancers[i];
    name = name.slice(2);

    if (gender == 'M') {
      males.enqueue(new Dancer(name, gender));
    } else {
      females.enqueue(new Dancer(name, gender));
    }
  }
}

function dance(males, females) {
  while (!males.empty() && !females.empty()){
    const guy = males.dequeue();
    const girl = females.dequeue();
    console.log(`Partners: ${guy.name} and ${girl.name}!`);
  }
}

const males = new Queue();
const females = new Queue();
getDancers(males, females);
dance(males, females);
if (males.count() == 1){
  console.log(`${males.front().name} is waiting to dance`);
} else if (males.count() > 1) {
  console.log(`${males.count()} males are waiting to dance`);
}
if (females.count() == 1){
  console.log(`${females.front().name} is waiting to dance`);
} else if (females.count() > 1) {
  console.log(`${females.count()} females are waiting to dance`);
}

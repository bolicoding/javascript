const userOne = {
  firstName: "Kristine",
  lastName: "Hudgens"
};

const userTwo = {
  firstName: "Tiffany",
  lastName: "Hudgens"
};

// Function expression
const fullName = function() {
  return `${this.lastName}, ${this.firstName}`;
};

// Nope!
// const fullName = () => {
//   return `${this.lastName}, ${this.firstName}`;
// };

const kristine = fullName.bind(userOne);
const tiffany = fullName.bind(userTwo);

kristine();
tiffany();

// how to check for equal values (shallow objects)

const isEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let objKey of obj1Keys) {
    if (obj1[objKey] !== obj2[objKey]) {
      return false;
    }
  }

  return true;
};

const obj1 = {
  name: "Kristine",
  age: 13,
  favorites: {
    food: "Pizza",
    vacation: "Disneyland"
  }
};

const obj2 = {
  name: "Kristine",
  age: 13,
  favorites: {
    food: "Pizza",
    vacation: "Disneyland"
  }
};

obj1 == obj2;
isEqual(obj1, obj2);

//object oriented programming intro (OOP)
class Instructor {
  constructor({ name }) {
    this.name = name;
  }
}

const jon = new Instructor({ name: 'Jon Snow' });
console.log(jon);
console.log(jon.name)

//OOP instance methods
class Instructor {
  constructor({ name, role = 'assistant' }) {
    this.name = name;
    this.role = role;
  }
  
  renderDetails() {
    console.log(`${this.name}: ${this.role}`);
  }
}

const jon = new Instructor({ name: 'Jon Snow' });
const mili = new Instructor({ name: 'Mili', role: 'teacher' });
jon.renderDetails();
mili.renderDetails();

//intro to JS promises
let sleepyGreeting = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello....')
  }, 2000);
  
  setTimeout(() => {
    reject(Error('Too sleepy...'))
  }, 2000);
})

sleepyGreeting
  .then(data => {
  console.log(data);
  })
  .catch(err => {
    console.error(err);
});

// fetch promise to communicate w APIs in JS
console.log('Starting fetch call');
const postsPromise = fetch('https://api.dailysmarty.com/posts')
console.log('After fetch call')
console.log(postsPromise)
console.log('After program has run');

postsPromise
  .then(data => data.json())
  .then(data => {
    data.posts.forEach((item) => {
      console.log(item.title);
    });
  })
  .catch((err) => {
  console.log(err);
  });



//
class Instructor {
  constructor({ name, role = 'assistant' }) {
    this.name = name;
    this.role = role;
  }
  
  renderDetails() {
    console.log(`${this.name}: ${this.role}`);
  }
  
  static helloWorld() {
    console.log('Hi there');
  }
  
  static canTeach(instructor) {
    return (instructor.role === 'classroom');
  }
}

//Instructor.helloWorld()

let jon = new Instructor({'name': 'Jon'});
console.log(
  `${jon.name} can teach: ${Instructor.canTeach(jon)}`
);

let ash = new Instructor({'name': 'Ash', 'role' : 'classroom'});
console.log(
  `${ash.name} can teach: ${Instructor.canTeach(ash)}`
);


//grouping promises together
const greeting = new Promise ((resolve, reject) => {
  resolve('Hi there');
  reject('oops, bad greeting');
});

const updateAccount = new Promise ((resolve, reject) => {
  resolve('Updating login...');
  reject("Error updating aact w login");
});

const loginActivities = Promise.all([greeting, updateAccount]);

loginActivities.then(res => {
  res.forEach(activity => {
    console.log(activity)
  })
});

//await and async
const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User logged in...');
    }, 4000);
  });
}

const updateAccount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Updating last login...');
    }, 2000);
  });
}

async function loginActivities(login, updateAccount) {
  const returnedLogin = await login;
  console.log(returnedLogin);

  const returnedUpdateAccount = await updateAccount;
  console.log(returnedUpdateAccount);
}

loginActivities(login(), updateAccount());

// using async and await

async function queryApis() {
  const postsPromise = fetch('https://api.dailysmarty.com/posts');
  const posts = await postsPromise.then(res => res.json());
  console.log(posts);

  const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
  const repos = await reposPromise.then(res => res.json());
  console.log(repos);
}

queryApis();

//using async and await to comm w outisde APIs (bolicoding github repos and dailysmarty)
async function queryApis() {
  const postsPromise = fetch('https://api.dailysmarty.com/posts');
  const posts = await postsPromise.then(res => res.json());
  console.log(posts);
  
  const reposPromise = fetch('https://api.github.com/users/bolicoding/repos');
  const repos = await reposPromise.then(res => res.json());
  console.log(repos);
}

queryApis();


// 
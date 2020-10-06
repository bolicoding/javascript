function stringChecker(element) {
  
  if (typeof element === "string") {
    return true;
  } else {
    return false;
  }
}
console.log(stringChecker('yes'))






function capitalizeLetter(string)
{
  return string.charAt(0).toUpperCase() + string.slice(1)
}






function stringAdder(stringOne, stringTwo) 
{
  return stringOne.concat(stringTwo)
}

stringAdder('hi ', 'there')






var brother = {
  name: 'Emiliano',
  age: 14,
  city: 'SLC'
}

for (var key in brother) {
  console.log(brother[key])
} 





function alphabeticalOrder(string) {
  return string.split('').sort().join('');
}

console.log(alphabeticalOrder('llanfairpwllgwyngyll'))



function finishedString(string) {
  return string.split('-').sort().join('-');
}

console.log(finishedString('purple-orange-beige-grey'))





let nums = [1,2,3,4]
let sum = 0

for (var i = 0; i < nums.length; i++) { 
  sum += parseInt(nums[i]);
}
console.log(sum)


for (x in nums) { 
  sum += parseInt(nums[x]);
}
alert(sum)


for (x of nums) { 
  document.write(sum += parseInt(nums[x]));
}
console.log(sum)


let nums = [1,2,3,4]
let i = 0
let x = 0

while (i < nums.length) { 
  x += nums[i];
  i++;
}
alert(x)


let nums = [1,2,3,4]
let i = 0
let x = 0

do { 
  x += nums[i];
  i++;
} 
while (i < nums.length)
alert(x)




functionExpression = function ([1, 2, 3, 4]) {return }


function functionDec (input) {
  for (var i, sum = 0; i < input.length; i++) { 
  sum += parseInt(input[i]);
  }
    return sum
}

console.log(functionDec([1,2,3,4]));


const functionArrow = arr => arr.reduce((a, b) => a + b, 0);

console.log(sum([1, 2, 3, 4]))




//10/05/2020
class Student {
  constructor({ name, email, favLang, favCodingLang = 'Python' }) {
    this.name = name;
    this.email = email;
    this.favLang = favLang;
    this.favCodingLang = favCodingLang;
  }
  
   static show() {
     console.log(Student)
   }
  
   static surprise() {
     alert('Hello!')
   }
  
   allData() {
      return `${this.name}, ${this.email}, ${this.favLang}`;
    }
    
   favoriteLanguage() {
      return `Their favorite language is: ${this.favLang}`;
    }
} 

const ash = new Student({name: 'Ashley Orozco', email: 'ashorozco@gmail.com', favLang: 'English'});
const mili = new Student({name: 'Mili Mon', email: 'milimon@gmail.com', favLang: 'Russian', favCodingLang: 'Javascript'});
console.log(ash.favoriteLanguage());
console.log(mili.allData());

//working with apis

fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then((data) => console.log(data))
.then((data) => {
  data.forEach(element => {
    console.log(element)
  });
});


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
/* document.getElementById('demo').style.backgroundColor = 'gold'
document.getElementById('demo').style.border='2px solid blue'
document.getElementById('demo').style.borderRadius = '10px'
document.getElementById('demo').style.marginTop = '20px' */


// 1 templete string
const first = 'shamim'
const last = 'Bhuiyan'
// console.log(`name:${first} ${last}`);

// 2.spread operator

const numbers = [2, 4, 6, 8, 10, 12, 14]
const number = [16, 18, 20]
// console.log(...number);
// console.log(...numbers);

let animal = {
    name: 'dog',
    color: 'green',
    age: 8
};

// 3.desturing
const { age, ...rest } = animal ||{};
// console.log(animal);
// console.log(age, rest);



// 4.nested object

const dreamGirl = [
    {
      dream1: {
        name: "bbu",
        height: "5.4",
        family: [{ father: "rock", mother: "shila", sister: "chinki" }],
        age: undefined,
        contactInfo: [
          {
            facebook: {
              link: "https://www.facebook.com/",
              followers: "12545",
              status: "single",
              friendsList: [
                { name: "rofik" },
                { name: "jobbar" },
                { name: "salam" },
                { name: "borkot" },
                undefined,
              ],
            },
          },
          { instagram: "https://www.instagram.com/" },
          { twitter: "https://twitter.com/" },
          { github: "https://github.com/" },
          { phone: ["01254823212", "02152457"] },
        ],
      },
    },
  ];

let value = dreamGirl[0].dream1.contactInfo[0].facebook.friendsList.


//   let friends=console.log(...friendsList);
 console.log(dreamGirl[0].dream1.family[0].mother);
 console.log(dreamGirl[0].dream1.contactInfo[0].facebook.friendsList[0].name)


;








// for loop


const names = ['hero', 'shamim', 'lakat', 'ayman', 'anisha']
for (let i = 0; i < names.length; i++){
    const name = names[i];
    console.log(name);
}

// for of loop

for (const name of names) {
    console.log(name);
}


// for in loop

const objects = { a: 1, b: 2, c: 3 };

for (const property in objects) {
    console.log(property);
    console.log(objects);

    console.log(`${property}: ${objects[property]}`)
}



// map

// normal way to get double of numbers
const nums = [1, 2, 3, 4, 6, 7, 8, 9]
const temp = [];
for (const num of nums) {
    let square = num * num;
    temp.push(square);
}

// console.log(nums);


const result = nums.map((x) => x * x)
console.log(result);
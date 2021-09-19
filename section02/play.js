// // const name = 'max';
// // let age = 29;
// // const hasHobbies = true;

// // age = 30;

// // const summarizeUser = (userName, userAge, userHasHobby) => {
// //     return (
// //     'Name is ' + 
// //     userName + 
// //     ', age is ' + 
// //     userAge + 
// //     ' and the user has a hobby: ' + 
// //     userHasHobby
// //     );
// // }

// // //const add = (a, b) => a + b;
// // //const addOne = a => a + 1;
// // const addRandom = () => 1+2;

// // //console.log(add(2,2));
// // //console.log(addOne(2));
// // console.log(addRandom());

// // console.log(summarizeUser(name, age, hasHobbies));

// const person = {
// name: 'Sean',
// age: 35,
// greet() {
//     console.log('Hi, I am ' + this.name);
// }
// };

// const printName = ({name, age}) => {
//     console.log(name, age);
// }

// printName(person);

// const {name, age} = person;
// console.log(name, age);

// // const copiedPerson = {...person};
// // console.log(copiedPerson);

// const hobbies = ['sports', 'cooking'];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// // // for (let hobby of hobbies) {
// // //     console.log(hobby);
// // // }
// // // console.log(hobbies.map(hobby => 'hobby: ' + hobby));
// // // console.log(hobbies);
// // const copiedArray = [...hobbies]
// // console.log(copiedArray);

// // const toArray = (...args) => {
// //     return args;
// // };

// // console.log(toArray(1, 2, 3, 4));


const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve('done!');
    }, 1500);
    });
    return promise;
};

// non-synchronous
setTimeout(() => {
    console.log('timer is done!');
    fetchData()
    .then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);

// synchronous
console.log('hello!');
console.log('hi!');
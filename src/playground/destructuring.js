// const person ={
//     name:'Andrew',
//     age: 21,
//     location:{
//         city:"Skopje",
//         temp:20
//     }

// }

// const {name:firstname='Anonymous',age} = person;
// // const name =person.name;
// // const age = person.age;

// console.log(`${firstname} is ${age}`);

// const {city,temp:temperature}=person.location
// if(city&& temperature){
// console.log(`It is ${temperature} in ${city}`)
// }

// const book={
//     title:'Ego is the Enemy',
//     author:'Ryan  Holiday',
//     publisher:{
//         name:'Penguin'
//     }
// };


// const {name:publisherName='Self-Published'}=book.publisher;

// console.log(`${publisherName}`)


// Arrat desturcturing


// const address=['1222 S JUpiter Street','Phildadephia','Pensilvanyia','13132'];

// const [street,city,state,zip]=address

// console.log(`You are in ${city} in ${state}`)


const item = ['Coffee(hot)','$2:00','$2:50','3:00']

const [coffeeName,,priceMedium]= item;

console.log(`A medium ${coffeeName} costs ${priceMedium}`)





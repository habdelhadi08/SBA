// // For Loop
// for (let i= 0; i <= 10; i++){
//     console.log(`i is: ${i}`)
// }
// for(let counter=10; counter > 0; counter--){
//     console.log(`counter is: ${counter}`)
// }
// for(let i = 1; i <= 10; i+=2){
//     console.log(`Odd number: ${i}`)
// }
// for(let i = 1; i <= 10; i++)
//     if( i % 2 !== 0){
//         console.log(`Odd number: ${i}`)
//     }

//     for (let i= 0; i <= 10; i++)
//         if ( i % 2 ===0){
//             console.log(`even: ${i}`)
//         }
// else if ( i % 2 !==0){
//     console.log(`odd: ${i}`)
// }
// for(let i = 6; i <= 60; i+=3) {
// console.log (`i is: ${i}` )
// }
// for(let hash = 1; hash <=7; hash++) {
//     console.log (`#`.repeat(hash))
// }
// let hash = '';
// for (let i= 1; i <= 7; i++){
//     hash += '#';
//     //or
//     // hash = hash + "#";
//     console.log(hash)
// }
// // =============== Loop over Strings ====

// const msg = 'Hello World!!';

// // console.log(msg.length);
// // console.log(msg[0]);

// // for (let index = 0; index < msg.length; index++) {
// //     console.log(msg[index]);
// // }


// // // For in Loop (objects)
// // for (const i in msg) {
// //     console.log(i);
// //     // console.log(msg[i]);
// // }

// // // For of Loop (strings, arrays)
// // for (const i of msg) {
// //     console.log(i);
// // }



// //? ===== Looping over an object with (For in)

// const user = {
//     username: 'Alex',
//     role: 'admin',
//     age: 20,
//     isVerified: true,
// }

// // console.log(user);

// // for (const key in user) {
// //     console.log(` ${key}: ${user[key]}`);
// // }

// //? ======= Looping over arrays (For of)

// const fruits = ['apple', 'banana', 'mango'];

// console.log(fruits);

// for (const fruit of fruits) {
//     console.log(fruit);
// }
// // ==== Continue Keyword
// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	if (str[i] == "l") {
// 		continue; // jumps to incrementor
//         console.log('hi');
// 	}

// 	console.log(str[i]);
// }

// for (const i in str) {
// 	if (str[i] == "l") {
// 		continue; // jumps to next iteration
// 	}

// 	console.log(str[i]);
// }

// for (const c of str) {
// 	if (c == "l") {
// 		continue; // jumps to next iteration
// 	}

// 	console.log(c);
// }

// while loops


// let x = 30;

// while (x > 0) {
// 	x /= 2;
// 	x--;

// 	if (x % 1 != 0) {
// 		break;
// 	}
	
// 	console.log(x);
// }

// let i = 0
// while (i <= 10){
//     console.log(i)
//     i++; //increement
 
// let j = 0
// while (j <=20)
// if ( j % 2 ===0 ) {
//     console.log(`${j} is even`);
// }
// else { 
//     console.log(`${j} is even`);}
//     j++;
// }
// while loops exersice


let num= 3;
while (num < 35){
console.log(num);
num *= 3;
}
let number= 5;
while (number <100){
    console.log(number)
    number *= 5
}
for (let i =0; i<= 20; i++){
    if (i %2 === 0){
        console.log(i*3);
        //multiply by 3
    }
}
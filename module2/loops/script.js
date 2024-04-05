// For Loop
for (let i= 0; i <= 10; i++){
    console.log(`i is: ${i}`)
}
for(let counter=10; counter > 0; counter--){
    console.log(`counter is: ${counter}`)
}
for(let i = 1; i <= 10; i+=2){
    console.log(`Odd number: ${i}`)
}
for(let i = 1; i <= 10; i++)
    if( i % 2 !== 0){
        console.log(`Odd number: ${i}`)
    }

    for (let i= 0; i <= 10; i++)
        if ( i % 2 ===0){
            console.log(`even: ${i}`)
        }
else if ( i % 2 !==0){
    console.log(`odd: ${i}`)
}
for(let i = 6; i <= 60; i+=3) {
console.log (`i is: ${i}` )
}
for(let hash = 1; hash <=7; hash++) {
    console.log (`#`.repeat(hash))
}
let hash = '';
for (let i= 1; i <= 7; i++){
    hash += '#';
    //or
    // hash = hash + "#";
    console.log(hash)
}
// Loop over strings
const msg = 'Hello World!';
console.log(msg.length);
console.log(msg[0])
for (let index= 0; index< msg.length; index++) {
    console.log(msg[index])
}

for( const i in msg);{
console.log(msg[i]);
}


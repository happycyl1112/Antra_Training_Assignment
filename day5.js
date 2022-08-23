//1. Create a function that every time you invoke it, 
//it will print out the message “Congrats you earn the chance!“, 
//however it can only print out the message with the first 5 invokes. 
//all the rest invokes will print out the message “Sorry you missed the chance” (run function once count as 1 invoke) (hint : using closure)

function canCount() {
    let count = 0;

    return function () {
        count += 1
        if (count < 6) {
            console.log("Congrats you earn the chance!");
        } else {
            console.log("Sorry you missed the chance.");
        }
    }
}

//const closure = canCount(); //call its inner function

//for (let i = 0; i < 8; i++){
//    closure();
//}


//2. Implement the callback function "longerThan" for : Array.filter(longerThan(minimumLength))
 //which takes minimumLength as a input and filter all the strings whose length is longer than minimumLength (hint : using currying)

function longerThan(minimumLength) {
    return (element) => {
        return (element.length > minimumLength);
    }
}

console.log(["I", "we", 'how', "know", "watch", "second"].filter(longerThan(0)));
console.log(["I", "we", 'how', "know", "watch", "second"].filter(longerThan(1)));
console.log(["I", "we", 'how', "know", "watch", "second"].filter(longerThan(2)));
console.log(["I", "we", 'how', "know", "watch", "second"].filter(longerThan(3)));
console.log(["I", "we", 'how', "know", "watch", "second"].filter(longerThan(4)));



while (numInput = Number(prompt("Choose an odd number between 1 and 50."))) {
    if (numInput > 50 || numInput < 1) {
        alert("I said between 1 and 50... Please try again")
    } else if (isNaN(numInput)) {
        alert("Can you even number, bro?")
    } else if (numInput % 2 === 0) {
        alert("Excuse me, that's not an odd number... Please try again")
    } else {
        alert("Awesome! Thank you!")
        break;
    }
}

for (var i = 1; i < 50; i = i + 2) {
    if (i === numInput) {
        console.log("Yikes! We're skipping " + numInput + "!")
        continue;
    }
        console.log(i + " is an odd number.");
}


// for (var i = 1; i < 50; i++) {
//     if (i === 27) {
//         console.log("Yikes! We're skipping " + i + "!")
//     } else if (i % 2 !== 0) {
//         console.log(i + " is an odd number.");
//     }
// }
//
//


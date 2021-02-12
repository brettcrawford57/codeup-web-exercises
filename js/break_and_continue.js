while (oddNumber = prompt("Choose an odd number between 1 and 50.")) {
    if (oddNumber > 50 || oddNumber < 1) {
        console.log("I said between 1 and 50... Please try again")
    } else if (isNaN(oddNumber)) {
        console.log("Can you even number, bro?")
    } else if (oddNumber % 2 === 0) {
        console.log("Excuse me, that's not an odd number... Please try again")
    } else {
        console.log("Awesome! Thank you!")
        break;
    }
}

for (var i = 1; i < 50; i++) {
    if (i === oddNumber) {
        console.log("Yikes! We're skipping " + oddNumber + "!")
    } else if (i % 2 !== 0) {
        console.log(i + " is an odd number.");
    }
}

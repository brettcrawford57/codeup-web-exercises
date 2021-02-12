while (evenNumber = prompt("Choose an odd number between 1 and 50.")){
    if (evenNumber > 50 || evenNumber < 1) {
        alert("I said between 1 and 50... Please try again")
    } else if (evenNumber % 2 === 0){
        alert("Excuse me, that's not an odd number... Please try again")
    } else {
        alert("Awesome! Thank you!")
        break;
    }
}

    // break;
    // alert("Thank you for your cooperation!")
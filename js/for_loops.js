function showMultiplicationTable(num) {

    for (var input = 1; input <= 10 ; input++){

        console.log(num + " x " + input + " = " + (num * input))
    }
}
showMultiplicationTable(7)



for( var i = 1 ; i <= 10 ; i++) {
    var random = Math.floor((Math.random() * 181) + 20)
    if (random % 2 !== 0) {
        console.log(random + " is odd.");
    } else {
        console.log(random + " is even.")
    }
}



for(var i = 1 ; i <= 9 ; i++) {

    var out = ""

    for (var j = 1 ; j <= i ; j++) {
        out = out + i
    }

    console.log(out)
}



for(var i = 100 ; i >= 5 ; i = i - 5){
    console.log(i);
}
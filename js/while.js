//
// var number = 2
//
// while (number <= 65536){
//     console.log(number)
//     number = number * 2
// }

var allCones = Math.floor((Math.random() * 50) + 50)

do {
    var purchasedCones = Math.floor((Math.random() * 5) + 1)

    if (purchasedCones <= allCones){
        allCones = allCones - purchasedCones;
        console.log("Good job selling " + purchasedCones + " cones! You have " + allCones + " left!")
    } else {
        console.log("Sorry! I don't have that many cones!")
    }

} while (allCones > 0) {
    console.log("Great day today! You sold all your ice cream!")
}

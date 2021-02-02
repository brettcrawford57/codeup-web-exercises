console.log("Hello from external JavaScript");

alert("Welcome to my website!");

var favcolor = prompt("What is your favorite color?");

alert("Awesome! " + favcolor + "'s my favorite color, too!");

//Exercise 3.1
var LittleMermaid = parseInt(prompt("How many days did you rent The Little Mermaid?"));
var BrotherBear = parseInt(prompt("How many days did you rent Brother Bear?"));
var Hercules = parseInt(prompt("How many days did you rent Hercules?"));
alert("I'm glad you're a fan of Disney like I am! Your total is $" + ((LittleMermaid+Hercules+BrotherBear)*3));

//Exercise 3.2
//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a
//different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive
//in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
var GoogleHours = parseInt(prompt("How many hours did you work for Google?"));
var AmazonHours = parseInt(prompt("How many hours did you work for Amazon?"));
var FacebookHours = parseInt(prompt("How many hours did you work for Facebook?"));
var GooglePay = GoogleHours * 400
var AmazonPay = AmazonHours * 380
var FacebookPay = FacebookHours * 350
alert("I see you make some decent money! Your paycheck should reflect $"+ (GooglePay+AmazonPay+
    FacebookPay) + ". Can I borrow $5.00?");

//A student can be enrolled in a class only if the class is not full and the class schedule
//does not conflict with her current schedule.

alert("Congratulations on taking your first steps to enroll into school! We're proud of you!");

var full = confirm("Does your class database show the class being full?")
var conflict = confirm("Do you have any conflicts in your schedule from 8:00a.m. to 11:00a.m.?")
if ((full == true) || (conflict == true)) {
    alert("We're sorry but we're not able to enroll you at this time. Please try again later.")
}   else    {
    alert("Awesome! We look forward to working with you on the enrollment process!")
}

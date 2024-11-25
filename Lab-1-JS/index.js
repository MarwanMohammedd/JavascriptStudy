// //1.1
// var Message = prompt("ENTER MESSAGE : ")
// for(var  i = 0 ; i<6;i++){
//     document.writeln(`<h${1+i}>${Message}</h${1+i}>`)
// }

// // 1.2
// var sum = 0;
// var result  = 0;
// do {
//     result = Number( prompt("Enter number : "))
//     sum += result;
// }while (sum < 100 && result != 0);
// document.writeln(sum);

// // 1.3
// var inputValue = Number(prompt("Enter Number : "));
// if (inputValue % 3 == 0 && inputValue % 5 == 0) {
//     document.writeln("Fizz Buzz");
// } else if (inputValue % 3 == 0) {
//     document.writeln("Fizz");
// } else if (inputValue % 5 == 0) {
//     document.writeln("Buzz");
// }

// //1.4
// if (confirm("Do You Fly?")) {
//     if (confirm("Are You Wild?")) {
//         document.writeln("Eagle");
//     } else {
//         document.writeln("Parrot");
//     }
// } else {
//     if (confirm("Do You Have Live Undersea?")) {
//         if (confirm("Are You Wild?")) {
//             document.writeln("Shark");
//         } else {
//             document.writeln("Dolphin");
//         }
//     } else {
//         if (confirm("Are You Wild?")) {
//             document.writeln("Lion");
//         } else {
//             document.writeln("Cat");
//         }
//     }
// }

// // 1.5
// document.writeln("<h1 >Enter User Info</h1>");
// var UserName = "";
// var UserPhoneNumber = "";
// var UserMobile = "";
// var UserEmail = "";

// do {
//     UserName = prompt("Enter User Name:");
// } while (/\d/.test(UserName));

// do {
//     UserPhoneNumber = prompt("Enter User Phone Number:");
// } while (/\D/.test(UserPhoneNumber) || UserPhoneNumber.length != 8);

// do {
//     UserMobile = prompt("Enter User User Mobile:");
// } while (/^(011|012|015|010)\d{8}$/.test(UserMobile) || UserMobile.length < 11);

// do {
//     UserEmail = prompt("Enter User Email:");
// } while (!/\w{3}@\d{3}\./.test(UserEmail));

// document.writeln("<hr>");
// document.writeln("<span style='color:red'>Welcome Dear Guest " + "<span style='color:black'>" + UserName + "</span>" + "</span><br>");
// document.writeln("<span style='color:red'>Your Phone Number is " + "<span style='color:black'>" + UserPhoneNumber + "</span>" + "</span><br>");
// document.writeln("<span style='color:red'>Your Mobile Number is " + "<span style='color:black'>" + UserMobile + "</span>" + "</span><br>");
// document.writeln("<span style='color:red'>Your Emial Address is  " + "<span style='color:black'>" + UserEmail + "</span>" + "</span><br>");


//string

// //1.1
// var result = prompt("Enter Text : ");
// var count = 0;
// for(var i = 0 ; i < result.length ; i++){
//     if('e' == result.charAt(i)){
//         count+=1;
//     }
// }
// document.writeln("<h1>The Counter Is :"+count+"</h1>");

// //1.2
// function Paland() {
//     var result = prompt("Enter Text : ");
//     var startIndex = 0;
//     var endIndex = result.length - 1;
//     while (startIndex < endIndex) {
//         if (result.charAt(startIndex) != result.charAt(endIndex)) {
//            return false;
//         }
//         startIndex++;
//         endIndex--;
//     }
//     return true;
// }
// var result = Paland();
// if (result == true) {
//     document.writeln("<h1> Paladroom </h1>");

// } else {
//     document.writeln("<h1> Not Paladroom </h1>");
// }
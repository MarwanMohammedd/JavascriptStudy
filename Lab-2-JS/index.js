// //1.1
// function calculatingNumbers() {
//     var arr = [];
//     for (let i = 0; i < 3; i++) {
//         arr[i] = Number(prompt(`Enter Number ${i + 1}:`));
//     }
//     document.write(`sum : ${arr[0] + arr[1] + arr[2]}<br>`);
//     document.write(`mul : ${arr[0] * arr[1] * arr[2]}<br>`);
//     document.write(`div : ${(arr[0] / arr[1] / arr[2]).toFixed(2)}<br>`);
// }
// calculatingNumbers();

// // 1.2
// function sortingASCDES() {
//     var arr = [];
//     for (let i = 0; i < 5; i++) {
//         arr[i] = Number(prompt(`Enter Number ${i + 1}:`));
//     }
//     document.write(`Entered ${arr.join(',')} <br>`);
//     document.write(`sorted DES ${arr.sort((a,b) => a-b)}<br>`);
//     document.write(`sorted ASC ${arr.sort((a,b) => b-a)}<br>`);
// }
// sortingASCDES();

// // 1.3
// function search(){
//     var str = prompt("Enter Sentence");
//     var ch = prompt("Enter char");
//     var arr =[]
//     for(let i in str){
//         if(str[i] === ch){
//             arr.push(i);
//         }
//     }
//     document.writeln(`${arr.join(',')}`);
// }
// search();

// // 1.4
// function randomNames(array){
//     while(randomValueOne == randomValueTwo){
//         var randomValueOne = Math.floor((Math.random()*array.length));
//         var randomValueTwo = Math.floor((Math.random()*array.length));
//     }
//     confirm(`[ ${array[randomValueOne]} , ${array[randomValueTwo]} ]`);
// }
// var names = ["marwan","ali","ismail","mohammed"]
// randomNames(names);

// // 1.5
// function MathInputs() {
//     var radius = Number(prompt("Enter Radius"));
//     alert(`Total Area is : ${Math.pow(radius, 2) * Math.PI}`);
//     var sqrt = Number(prompt("Enter Squar Root"));
//     alert(`Total Squar Root is : ${Math.sqrt(sqrt)}`);
//     var angle = Number(prompt("Enter Angle"));
//     alert(`Total Cos ${angle} is : ${(Math.cos(angle * Math.PI / 180)).toFixed(2)}`);
// }
// MathInputs();


//------------------------------------------------------------------

// //1.1
// function findArray(arr) {
//     arr.sort((a, b) => a - b);
//     var resultValues = []
//     for (var i = 1; i < arr.length - 2; i++) {
//         if (arr[0] != arr[i]) {
//             resultValues.push(arr[i])
//             break;
//         }
//     }
//     for (var i = arr.length - 2; i >= 0; i--) {
//         if (arr[arr.length - 1] != arr[i]) {
//             resultValues.push(arr[i])
//             break;
//         }
//     }
//     console.log(resultValues);
// }
// findArray([1, 2, 3, 4, 5, 1, 5, 5, 1]);
// findArray([10, 20, 30, 40, 12, 13]);

// //1.2
// function Capitalize(str) {
//     var result = str.split(" ");
//     var finalResult = "";
//     for(var string of result){
//         finalResult += string.replace(string[0],string[0].toUpperCase());
//         finalResult += " ";
//     }
//     console.log(finalResult);
// }
// var str = "my name is marwan";
// Capitalize(str);

// //1.3
// function printObject(studentObj) {
//     for (var key in studentObj) {
//         console.log(`${key} : ${studentObj[key]}`);
//     }
// }

// // 1.4
// function editObjectProperty(studentObj) {
//
//
// }

// // 1.5
// function add(number1 , number2){
//     return number1 + number2
// }
// function multiplcation(number1 , number2){
//     return number1 * number2
// }
// function applyOperation(number1 , number2 , funcName) {
//     console.log(funcName(number1,number2));
// }
// applyOperation(1,2,add);
// applyOperation(1,2,multiplcation);
// applyOperation(1,2,(a,c)=>a/c);
// applyOperation(1,2,(a,c)=>a-c);


// 1.6
// function square(array){
//     array = array.map(x => x*2);
// }
// function applyCallBack(array,funcName) {
//     funcName(array);
// }
// var array = [1,2,3,4,5,6];
// applyCallBack(array,square);
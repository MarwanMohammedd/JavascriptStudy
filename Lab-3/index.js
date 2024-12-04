var student = {
    name: "marwan",
    age: 26,
    address: "assuit",
    subjects: {
        subjectOne: "javascript",
        subjectTwo: "C#",
        subjectThree: "C/C++",
    }
};
// 3.1
function printObjects(obj) {
    for (var key in obj) {
        if (Object.hasOwnProperty(key)) {
             value = obj[key];
            if (typeof value == "object") {
                for (var item in value) {
                    console.log(` ${item} : ${value[item]}`);
                }
            }
        } else {
            console.log(` ${key} : ${obj[key]}`);
        }
    }
}
printObjects(student);

// // // 3.2
// var library = {
//     books: [{
//         title: "title Name",
//         auther: "marwan",
//         year: 1969,
//     }, {
//         title: "New title",
//         auther: "marwan",
//         year: 1969,
//     },]
// };
// function logTitlesBook(){
//     for(var i = 0 ; i < library.books.length;i++){
//         console.log(library.books[i].title);
//     }
// }
// logTitlesBook();


//3.3
// function showResult() {
//     var TagName = document.getElementById("TagNameTag");
//     var classNameTag = document.getElementById("classNameTag");
//     var idTag = document.getElementById("idTag");
//     var TagNameTag = document.getElementById("nameTag");

//     var countTagName = document.getElementsByTagName(TagName.value);
//     var countClassName = document.getElementsByClassName(classNameTag.value);
//     var idExist = document.getElementById(idTag.value);
//     var countName = document.getElementsByName(TagNameTag.value);

//     var isIdExist = false;

//     if (idExist != null) {
//         isIdExist = true;
//     }
//     var outPutResult = document.getElementById("OutPutResult");
//     outPutResult.value = `Number Of ${TagName.value}: ${countTagName.length} Class ${classNameTag.value}: ${countClassName.length} ID: ${isIdExist} Name: ${countName.length}`;
// }

// function DarkMode(){
//    var container =  document.getElementById("container");
//    var header =  document.getElementsByClassName("header");
//    var inputStyleDark =  document.getElementsByClassName("inputStyle");
//    container.classList.toggle("DarkStyle");
//    header[0].classList.toggle("headerDark");
//   for(var element of inputStyleDark){
//     element.classList.toggle("inputStyleDark");
//   }
// }

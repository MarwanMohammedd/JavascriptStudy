var Students = [];
var checkValidateName = false;
var checkValidateAge = false;

var inputName = document.getElementById("usrInput");
var usrInputErrorSpan = document.getElementById("usrInputError");


var inputAge = document.getElementById("ageInput");
var ageInputErrorSpan = document.getElementById("ageInputError");


var btnSubmit = document.getElementById("btnSubmit");
var TableBody = document.getElementById("TableBody");



inputName.addEventListener("input", function () {
    if (inputName.value == "" || inputName.value.length < 3) {
        btnSubmit.disabled = false;
        btnSubmit.classList.add("btnStyleDisabled");
        usrInputErrorSpan.style.color = "red";
        usrInputErrorSpan.innerHTML = "Student Name Requred : Name Must Be Grater Than 3 Characters";
        usrInputErrorSpan.style.display = "block";
        checkValidateName = false;
    } else {
        usrInputErrorSpan.style.display = "none";
        checkValidateName = true;
    }
});


inputAge.addEventListener("input", function () {
    if (inputAge.value == "" || Number(inputAge.value) < 18 || Number(inputAge.value) > 99) {
        btnSubmit.disabled = false;
        btnSubmit.classList.add("btnStyleDisabled");
        ageInputErrorSpan.style.color = "red";
        ageInputErrorSpan.innerHTML = "Student Age Requred : Age Must Be Greater Than 18";
        ageInputErrorSpan.style.display = "block";
        checkValidateAge = false;
    } else {
        ageInputErrorSpan.style.display = "none";
        checkValidateAge = true;
    }
});

if (checkValidateAge && checkValidateName) {
    btnSubmit.classList.remove("btnStyleDisabled");
    btnSubmit.disabled = true;
}



function deleteStudent(id) {
    Students.splice(id, 1);
    displayStudents();
}

function addnewstudent(newstudent) {
    Students.push(newstudent);
    displayStudents();
}

function displayStudents() {
    TableBody.innerHTML =  `<tr></tr>`;
   
    for (var i = 0; i < Students.length; i++) {
        TableBody.innerHTML += `<tr>
            <td>${Students[i].Id}</td>
            <td>${Students[i].Name}</td>
            <td>${Students[i].Age}</td>
            <td><button onclick="deleteStudent(${Students[i].Id - 1})">
            Delete Student</button></td></tr>`;
    }
}


function TakeAction() {
    var flagExistance = false;
    var stdObject = {};
    var index = Students.length;
    stdObject.Id = ++index;
    stdObject.Name = inputName.value;
    stdObject.Age = Number(inputAge.value);
    for (var student of Students) {
        if (student.Name == stdObject.Name && student.Age == stdObject.Age) {
            flagExistance = true;
        }
    }
    if (flagExistance) {
        document.getElementById("exsitedElement").style.color = "red";
        document.getElementById("exsitedElement").innerHTML = "This Student Is Aleardy Exist!";
        document.getElementById("exsitedElement").style.display = "block";
    } else {
        document.getElementById("exsitedElement").style.display = "none";
        addnewstudent(stdObject);
    }
}
var url = "https://fakestoreapi.com/users";
var api = new XMLHttpRequest();
var tableBody = document.getElementById("tableBody");
var btnGetUsers = document.getElementById("btnGetUsers");
var banarViewDetails = document.getElementById("banarViewDetails");

var textResponse = []

api.onreadystatechange = function () {
    if (api.readyState == 4) {
        if (api.status == 200) {
            textResponse = JSON.parse(api.responseText);
            for (var i of textResponse) {
                console.log(i);
            }
        }
    }
};
api.open("GET", url);
api.send();



function ViewDetails(index) {
    var user = textResponse[index];
    banarViewDetails.innerHTML = `
    <table>
        <thead>
            <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Username</th>
            <th>Address</th>
            <th>ZipCode</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>${user.id}</td>
            <td>${user.name.firstname}</td>
            <td>${user.name.lastname}</td>
            <td>${user.phone}</td>
            <td>${user.email}</td>
            <td>${user.username}</td>
            <td>${user.address.city + " , " + user.address.street}</td>
            <td>${user.address.zipcode}</td>
            </tr>
        </tbody>
    </table>`;
}

btnGetUsers.addEventListener("click", function () {
    tableBody.innerHTML = `<tr></tr>`;
    for (var i = 0; i < textResponse.length; i++) {
        tableBody.innerHTML += `<tr>
            <td>${textResponse[i].id}</td>
            <td>${textResponse[i].name.firstname + " " + textResponse[i].name.lastname}</td>
            <td>${textResponse[i].phone}</td>
            <td>${textResponse[i].email}</td>
            <td><button onclick="ViewDetails(${i})">
            View Details</button></td>
            </tr>`;
    }
});

function displayStudents() {
    tableBody.innerHTML = `<tr></tr>`;

    for (var i = 0; i < textResponse.length; i++) {
        tableBody.innerHTML += `<tr>
            <td>${textResponse[i].id}</td>
            <td>${textResponse[i].Name.firstname + textResponse[i].Name.lastname}</td>
            <td>${textResponse[i].phone}</td>
            <td>${textResponse[i].email}</td>
            </tr>`;
    }
}
class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
        this.email = email;
        this.password = password;
    }
}

let users = JSON.parse(localStorage.getItem("users")) || [];

function userSignUp(event) {
    event.preventDefault();
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    const savedData = JSON.parse(localStorage.getItem("users")) || [];

    let result = savedData.find((element) => element.email == email.value);
    if (result?.email) {
        alert("user already exist");
    } else {
        let user = new User(firstName.value, lastName.value, email.value, password.value);
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Signup successful!");
        window.location.href = "./../logine page visual/index.html";
    }
}

const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", userSignUp);
}

const loginForm = document.querySelector(".form-section form");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailInput = loginForm.querySelector('input[type="text"]').value;
        const passwordInput = loginForm.querySelector('input[type="password"]').value;

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const foundUser = storedUsers.find(
            (user) => user.email === emailInput && user.password === passwordInput
        );

        if (foundUser) {
            alert("Congratulations! You have successfully logged in.");
        } else {
            alert("Invalid login credentials. Try again.");
        }
    });
}

const usersData = [
    { name: 'arham', age: 24 },
    { name: "Hassan", age: 17 },
    { name: 'Haris', age: 20 }
];

let result = usersData.find((element) => element.name == "arham");
console.log(result);
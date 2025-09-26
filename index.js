// User class
class User {
    constructor(firstName, surname, contact, email, password, dob, gender) {
        this.firstName = firstName;
        this.surname = surname;
        this.contact = contact;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dob;
        this.gender = gender;
    }
}

// Signup form handling
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const surname = document.getElementById("surname").value;
        const contact = document.getElementById("contact").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const day = document.getElementById("dob-day").value;
        const month = document.getElementById("dob-month").value;
        const year = document.getElementById("dob-year").value;
        const dob = `${day}-${month}-${year}`;
        const gender = document.querySelector('input[name="gender"]:checked')?.value || "";

        const newUser = new User(firstName, surname, contact, email, password, dob, gender);

        localStorage.setItem("user", JSON.stringify(newUser));

        // Redirect to login page after signup
        window.location.href = "./../logine page visual/index.html";
    });
}

// Login form handling
const loginForm = document.querySelector(".form-section form");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const contactInput = loginForm.querySelector('input[type="text"]').value;
        const passwordInput = loginForm.querySelector('input[type="password"]').value;

        // Get user from localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));

        // Allow login with contact OR email and password must match
        if (
            storedUser &&
            (storedUser.contact === contactInput || storedUser.email === contactInput) &&
            storedUser.password === passwordInput
        ) {
            alert("🎉 Congratulations! You have successfully logged in.");
        } else {
            alert("❌ Invalid login credentials. Try again.");
        }
    });
}
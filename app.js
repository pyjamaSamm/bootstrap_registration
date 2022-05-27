(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

// --------------------------bootstrap ⬆️----------------------------


var minAge = 18;
const date = document.getElementById("date");
const named = document.getElementById("Name");
const mail = document.getElementById("email_");
const phone_ = document.getElementById("phone");
const dob_ = document.getElementById("date");
const form = document.querySelector("form");
const userlist = document.getElementById("usersList");
const fordate_ = document.getElementById("for_date");
// const agee = document.getElementById("aging");


let user = {
    "username": "",
    "email": "",
    "phone": 0,
    "dob": "",
    "age": 0,
}


let users = []
let validate = 0;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let user = {
        "username": "",
        "email": "",
        "phone": 0,
        "dob": "",
        "age": 0,
    }
    user.username = named.value;
    user.email = mail.value;
    user.phone = phone_.value;
    user.dob = dob_.value;
    if (user.email.includes("@") && user.email.includes(".") && user.username.length >= 3) {
        agee = getAge(dob_.value)
        if (agee < minAge) {
            alert("You are a minor!");
        }
        else {
            validate = ismailpresent();
            if (validate === 0) {
                user.age = agee;
                user.username = named.value;
                user.email = mail.value;
                user.phone = phone_.value;
                user.dob = dob_.value;

                console.log(users);
                users.push(user);
                showUsers();

                alert("Successfully signed in!");
            }
            else {
                alert("Email already registered!");
            }
        }

    } else {
        alert("Kindly check again!")
    }
})
console.log(users)
let user_detail = ''

function showUsers() {
    const li = document.createElement("li");
    console.log("inside show")
    console.log(`mail: ${user.email}`)
    if (mail.value.includes("@") && mail.value.includes(".") && named.value.length >= 3) {
        if (user.phone !== "") {
            user_detail = `Username: ${named.value}, Email: ${mail.value}, Phone: ${phone_.value}, Dob: ${dob_.value}, Age: ${agee}`
        } else {
            user_detail = `Username: ${named.value}, Email: ${mail.value}, Dob: ${dob_.value}, Age: ${agee}`
        }
        li.appendChild(document.createTextNode(user_detail));
        userlist.appendChild(li);
    } else alert("Kindly check again!")

}

function ismailpresent() {
    console.log("inside ispre");
console.log(mail.value)
    for (let u of users) {
        if (u.email === mail.value) {
            return 1;
        }
    }
    return 0;
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

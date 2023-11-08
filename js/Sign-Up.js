const form = document.forms["sign_up"];

const name = form["name"];
const email = form["email"];

const pass = form["password"];
const showHideBtn = form["show_hide"];

const show_mesg = document.getElementById("show");
const show_mesg_p = document.getElementById("p");
const show_mesg_btn = document.getElementById("close_button");


form.addEventListener("submit", () => {

    // console.log(name.value); // See Entered data after saving it in Console...

    let checkKey = null;

    for (let i = 0; i < localStorage.length; i++) {

        let key = localStorage.key(i);

        if (email.value === key) {

            checkKey = "Yes";
            break;
        };
    };


    if (checkKey != "Yes" || checkKey == null) {

        console.log("Entered");

        const user_data = {

            Name: `${name.value}`,
            Email: `${email.value}`,
            Password: `${pass.value}`,
        };

        localStorage.setItem(`${email.value}`, `${JSON.stringify(user_data)}`);
        // console.log(email.value, pass.value); // See Entered data after saving it in Console...
        window.location.href = "/html/Log-In.html";
    }

    else {

        console.log("No");

        document.getElementById("close_button").classList.replace("d-none", "d-inline-block");
        show_mesg_p.innerHTML = "Account already Exists, create a new one...";
        show_mesg.classList.add("show");
        show_mesg.style.display = "block";
    };
});

showHideBtn.addEventListener("click", function (event) {

    event.preventDefault(); // Prevent form submission

    if (pass.type === "password") {

        pass.type = "text";
        document.getElementById("pass_icon").classList.replace("fa-eye", "fa-eye-slash");
        // console.log(pass.type); // See Input type value after changing it in Console...
    }

    else {

        pass.type = "password";
        document.getElementById("pass_icon").classList.replace("fa-eye-slash", "fa-eye");
        // console.log(pass.type); // See Input type value after changing it in Console...
    };
});

document.getElementById("close").addEventListener("click", () => {

    show_mesg.classList.remove("show");
    show_mesg.style.display = "none";
});

document.getElementById("close_button").addEventListener("click", () => {

    show_mesg.classList.remove("show");
    show_mesg.style.display = "none";
});
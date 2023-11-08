const form = document.forms["log_in"];
const pass = form["password"];
const showHideBtn = form["show_hide"];

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

form.addEventListener("submit", () => {

    const E_name = form["name"];
    const E_email = form["email"];
    const E_password = form["password"];

    const User_data = JSON.parse(localStorage.getItem(E_email.value));

    // console.log(E_email.value, E_password.value); // See Entered Credentials in Console...

    if (User_data == null || User_data == undefined) {

        document.getElementById("error_text").innerHTML = "Account Doesn't Exist!";
        document.getElementById("close_button").classList.replace("d-inline-block", "d-none");
        document.getElementById("create").classList.replace("d-none", "d-inline-block");
        document.getElementById("error").classList.add("show");
        document.getElementById("error").style.display = "block";
    }

    else {

        if (E_name.value === User_data.Name && E_email.value === User_data.Email && E_password.value === User_data.Password) {

            let after_data = JSON.parse(localStorage.getItem(E_email.value));
            after_data.Log = "Logged In";

            localStorage.setItem(E_email.value, JSON.stringify(after_data));
            // console.log("Logged In"); // See that you're Logged In in Console...
            window.location.href = "/html/Landing-Page.html";
        }

        else if (E_name.value !== User_data.Name || E_email.value !== User_data.Email || E_password.value !== User_data.Password) {

            // console.log("Wrong Email & Password Combination"); // Show Wrong Credentials Error message in Console...
            document.getElementById("close_button").classList.replace("d-none", "d-inline-block");
            document.getElementById("create").classList.replace("d-inline-block", "d-none");
            document.getElementById("error_text").innerHTML = "Wrong Credentials!";
            document.getElementById("error").classList.add("show");
            document.getElementById("error").style.display = "block";
        };
    };
});

document.getElementById("close").addEventListener("click", () => {

    document.getElementById("error").classList.remove("show");
    document.getElementById("error").style.display = "none";
});

document.getElementById("close_button").addEventListener("click", () => {

    document.getElementById("error").classList.remove("show");
    document.getElementById("error").style.display = "none";
});

document.getElementById("create").addEventListener("click", () => {

    window.location.href = "/html/Sign-Up.html";
});
function saveItem() {
    let userName = document.getElementById("userName").value;
    let e_mail = document.getElementById("email").value;
    let contactNumber = document.getElementById("c_Number").value;
    let passWord = document.getElementById("password").value;
    const registerDetails = {
        name: userName,
        email: e_mail,
        cNumber: contactNumber,
        password: passWord

    };

    sessionStorage.setItem("info", JSON.stringify(registerDetails));
    setTimeout(function () {
        window.location.href = "Login.html";
    }, 2000);

    alert("Registration Success. Please login ")
}

function check() {
    let u_name = document.getElementById("l_name").value;
    let u_password = document.getElementById("l_password").value;

    let storedName = JSON.parse(sessionStorage.getItem("info"));
    if (storedName.name === u_name) {

        if (storedName.password === u_password) {

            setTimeout(function () {
                window.location.href = "success.html";
            }, 2000);
        }
        else {
            alert("password is wrong");
        }
    }
    else {
        alert("User Name is Not Match");
    }
}
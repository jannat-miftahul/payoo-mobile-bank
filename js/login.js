// document.getElementById('id').addEventListener('click', function() {})

// set event handler for the login button
document
    .getElementById("btn-login")
    .addEventListener("click", function (event) {
        // Prevent the default action of the form
        event.preventDefault(); // prevent reloading
        console.log("Login button clicked");

        // get the phone number and password
        const phoneNumber = document.getElementById('phone').value;
        console.log("Phone number: ", phoneNumber);
    });

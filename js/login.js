// document.getElementById('id').addEventListener('click', function() {})

// set event handler for the login button
document
    .getElementById("btn-login")
    .addEventListener("click", function (event) {
        // Prevent the default action of the form
        event.preventDefault(); // prevent reloading
        console.log("Login button clicked");

        // get the phone number ans pin number
        const phoneNumber = document.getElementById("phone").value;
        const pinNumber = document.getElementById("pin").value;

        console.log(phoneNumber, pinNumber);

        // temporary method to check the phone number and pin number
        if (phoneNumber === "015" && pinNumber === "1234") {
            console.log("Login successful");
            // redirect to the home page
            window.location.href = 'home.html';
        } else {
            alert("Invalid phone number or pin number");
            // show error message
        }
    });

// console.log('home.js loaded');

// add money to the account
// add event listener to the button
document
    .getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        // prevent page from reloading
        event.preventDefault();

        // get the amount and add it to the account
        const addMoney = document.getElementById("add-money").value; // from input field use value
        console.log(addMoney);

        // get the pin
        const pinNumber = document.getElementById("pin").value;
        console.log(pinNumber);

        // verify the pin
        if (pinNumber === "1234") {
            console.log("adding money to the account");

            // get the balance
            const balance = document.getElementById('balance').innerText; // from div use innerText
            console.log(typeof addMoney, typeof balance);

            // add the amount to the balance
            const addBalance = parseFloat(addMoney);
            const currentBalance = parseFloat(balance);
            // console.log(addBalance, currentBalance);

            const newBalance = addBalance + currentBalance;
            console.log(newBalance);
            
            // update the balance
            document.getElementById('balance').innerText = newBalance;
        } else {
            alert("Invalid Pin, please try again");
        }
    });

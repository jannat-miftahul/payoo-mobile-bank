// console.log('cashout.js loaded');

document
    .getElementById("btn-cashout")
    .addEventListener("click", function (event) {
        console.log("btn-cashout clicked");
        event.preventDefault();

        // Get the form data
        const pinNumber = document.getElementById("cashout-pin").value;
        const cashOut = document.getElementById("cashout").value;
        console.log("pin number: ", pinNumber, "cashout: ", cashOut);

        // verify the pin number
        if (pinNumber === "1234") {
            const cashOutAmount = parseFloat(cashOut);
            const balance = parseFloat(
                document.getElementById("balance").innerText
            );
            console.log("cashOutAmount: ", cashOutAmount, "balance: ", balance);

            const newBalance = balance - cashOutAmount;
            console.log("newBalance: ", newBalance);

            // Update the UI
            document.getElementById("balance").innerText = newBalance;
        } else {
            alert("Invalid pin number. Please try again!");
        }
    });

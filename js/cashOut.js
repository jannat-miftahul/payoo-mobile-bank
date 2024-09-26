// console.log('cashout.js loaded');

document
    .getElementById("btn-cashout")
    .addEventListener("click", function (event) {
        // prevent page from reloading
        event.preventDefault();

        // get the amount to cashout
        const cashOut = getInputFieldById("cashout");
        const pinNumber = getInputFieldById("cashout-pin");
        console.log(cashOut, pinNumber);

        // verify the pin
        if (pinNumber === 1234) {
            // get the balance
            const balance = getTextFieldById("balance");

            // cashout the amount
            const newBalance = balance - cashOut;
            console.log(newBalance);

            // update the balance
            document.getElementById("balance").innerText = newBalance;

            // add to transaction history
            const div = document.createElement("div");
            div.classList.add("bg-yellow-100");
            // console.log(div);
            div.innerText = `
            <h4 class = text-2xl>Cashout</h4> 
            <p>Amount: ${cashOut}</p> <p>New balance: ${newBalance}</p>
            `
            document.getElementById("transactions").appendChild(div);
        } else {
            alert("Invalid Pin, please try again");
        }
    });



// // Get the form data
// const pinNumber = document.getElementById("cashout-pin").value;
// const cashOut = document.getElementById("cashout").value;
// console.log("pin number: ", pinNumber, "cashout: ", cashOut);

// // verify the pin number
// if (pinNumber === "1234") {
//     const cashOutAmount = parseFloat(cashOut);
//     const balance = parseFloat(
//         document.getElementById("balance").innerText
//     );
//     console.log("cashOutAmount: ", cashOutAmount, "balance: ", balance);

//     const newBalance = balance - cashOutAmount;
//     console.log("newBalance: ", newBalance);

//     // Update the UI
//     document.getElementById("balance").innerText = newBalance;
// } else {
//     alert("Invalid pin number. Please try again!");
// }

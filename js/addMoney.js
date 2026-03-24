// console.log('addMoney.js loaded');

// add money to the account
// add event listener to the button
document
    .getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        // prevent page from reloading
        event.preventDefault();

        // get the amount and add it to the account
        const addMoney = getInputFieldById('add-money');
        const pinNumber = getInputFieldById('pin');
        console.log(addMoney, pinNumber);

        // verify the pin
        if (pinNumber === 1234) {
            // get the balance
            const balance = getTextFieldById('balance');
            
            // add the amount to the balance
            const newBalance = addMoney + balance;
            console.log(newBalance);
            
            // update the balance
            document.getElementById('balance').innerText = newBalance;

            // add to transaction history
            const card = document.createElement('div');
            card.className = 'txn-card';
            card.innerHTML = `
              <div class="txn-icon add">➕</div>
              <div class="txn-body">
                <div class="txn-type">Money Added</div>
                <div class="txn-balance">New balance: $${newBalance}</div>
              </div>
              <div class="txn-amount add">+$${addMoney}</div>
            `;
            document.getElementById('transaction-container').appendChild(card);
        } 
        else {        
            alert('Invalid Pin, please try again');
        }
    });




// // get the pin
// const pinNumber = document.getElementById("pin").value;
// console.log(pinNumber);
// // verify the pin
// if (pinNumber === "1234") {
//     console.log("adding money to the account");
//     // get the balance
//     const balance = document.getElementById("balance").innerText; // from div use innerText
//     console.log(typeof addMoney, typeof balance);

//     // add the amount to the balance
//     const addBalance = parseFloat(addMoney);
//     const currentBalance = parseFloat(balance);
//     // console.log(addBalance, currentBalance);
//     const newBalance = addBalance + currentBalance;
//     console.log(newBalance);
//     // update the balance
//     document.getElementById("balance").innerText = newBalance;
// } else {
//     alert("Invalid Pin, please try again");
// }
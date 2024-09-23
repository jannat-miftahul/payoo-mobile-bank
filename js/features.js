// toggle cashout button
document
    .getElementById("btn-toggle-cashout")
    .addEventListener("click", function () {
        console.log("cashout btn clicked");

        // toggle cashout form
        document.getElementById("cashout-form").classList.toggle("hidden");
        // hide add money form
        document.getElementById("add-money-form").classList.add("hidden");
    });

// toggle add money button
document
    .getElementById("btn-toggle-add-money")
    .addEventListener("click", function () {
        console.log("add money btn clicked");

        // toggle add money form
        document.getElementById("add-money-form").classList.toggle("hidden");
        // hide cashout form
        document.getElementById("cashout-form").classList.add("hidden");
    });

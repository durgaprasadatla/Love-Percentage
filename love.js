let result = document.querySelector("#result");
let btn = document.querySelector("#btn");

let savedRandomNumber = null;
let savedYourName = "";
let savedPartnerName = "";

btn.addEventListener("click", () => {
    let yourName = document.querySelector("#your-name").value.trim();
    let partnerName = document.querySelector("#patner-name").value.trim();

    if (yourName === '') {
        alert("Please Enter Your Name!");
        return;
    } else if (partnerName === '') {
        alert("Please Enter Your Partner's Name!");
        return;
    } else if (yourName.toLowerCase() === partnerName.toLowerCase()) {
        alert("Both names are the same! Please enter different names.");
        return;
    }

    // Check if same names were already used
    if (
        yourName.toLowerCase() === savedYourName.toLowerCase() &&
        partnerName.toLowerCase() === savedPartnerName.toLowerCase()
    ) {
        // Use saved random number
        result.innerHTML = `${yourName} and ${partnerName}'s Love Percentage is ${savedRandomNumber}%`;
    } else {
        // Generate and save new result
        let randomNumber = parseInt(Math.random() * 100) + 40;
        if (randomNumber > 100) {
            randomNumber = 100;
        }

        savedYourName = yourName;
        savedPartnerName = partnerName;
        savedRandomNumber = randomNumber;

        result.innerHTML = `${yourName} and ${partnerName}'s Love Percentage is ${randomNumber}%`;
    }
});
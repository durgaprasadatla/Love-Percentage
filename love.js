let result = document.querySelector("#result");

let btn = document.querySelector("#btn");

let a =btn.addEventListener("click", ()=>{
    let randomNumber =parseInt(Math.random()*100);
    console.log(randomNumber);

    let yourName =document.querySelector("#your-name").value;

    let patnerName =document.querySelector("#patner-name").value;

    if(yourName === ''){
        alert("Please Enter Your Name !")
    }else if(patnerName === ''){
        alert("Please Enter Your partner  Name !")
    }
    else{
        result.innerHTML = yourName +" and "+ patnerName + " Love Percentage is "+randomNumber +"%";
    }
})

// function calculateInterest(principal, rate, time) {
//     if (principal <= 0 || rate <= 0 || time <= 0) {
//         return "All values must be positive numbers.";
//     }

//     let interest = (principal * rate * time) / 100;
//     return interest;
// }

// Example usage:
// let principal = 1000; // Principal amount
// let rate = 5;         // Annual interest rate in percentage
// let time = 2;         // Time period in years

// let interest = calculateInterest(principal, rate, time);
// console.log(`The interest is: ${interest}`);


// function calculateInterest(principal, rate, time) {
//     // Convert rate from percentage to decimal
//     let interest = (principal * rate * time) / 100;
//     let totalAmount = principal + interest;

//     return {
//         interest: interest,
//         totalAmount: totalAmount
//     };
// }

// // Example usage
// let principal = 1000; // Principal amount in dollars
// let rate = 5; // Annual interest rate in percentage
// let time = 2; // Time in years

// let result = calculateInterest(principal, rate, time);
// console.log("Interest: $" + result.interest.toFixed(2));
// console.log("Total Amount: $" + result.totalAmount.toFixed(2));
// Ex
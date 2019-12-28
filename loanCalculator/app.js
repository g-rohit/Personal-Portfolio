let form = document.querySelector("#calculator-form");
let calcBtn = document.querySelector("#calculate");
let spinner = document.querySelector("#spinner");
let amount = document.querySelector("#amount");
let interest = document.querySelector("#interestRate");
let yearsToRepay = document.querySelector("#yearsToRepay");
let results = document.querySelector("#results");

// when mouse hover on the btn
// calcBtn.addEventListener('mouseover', moveArrowLeft);
// when mouse leaves the btn
// calcBtn.addEventListener('mouseleave', restoreArrowPos);
// calculateInterest
form.addEventListener("submit", calculateInterest);

// function moveArrowLeft() {
//     setTimeout(() => {
//     calcBtn.childNodes[1].classList.add('ml-move');
// }, 200);
// }

// function restoreArrowPos() {
// setTimeout(() => {
//     calcBtn.childNodes[1].classList.remove('ml-move');
// }, 200);
// }

//   SI formula
// I = P * R * T
// Where
// I = Interest Amount
// P = Loan Amount or Amount Borrowed
// R = Rate of Simple Interest
// T = Tenure of Loan or Time Horizon

// EMI = (P * R/12) * [ (1+R/12)^N ] / [ ((1+R/12)^N) - 1], where

// P = Principal (loan amount);
// R = Annual Interest Rate;
// N = No. of Monthly Instalments

function calculateInterest(e) {



    const principalAmt = parseFloat(amount.value);
    const ratePerc = parseFloat(interest.value / 100);
    const rateOfInterest = (ratePerc / 12);
    const years = parseFloat(yearsToRepay.value);
    const noOfPeriods = years * 12; //no of months
    const calculatedInterestValue = parseFloat(principalAmt * ratePerc * years).toFixed(2);

    const X = Math.pow(1 + rateOfInterest, noOfPeriods);
    const emi = principalAmt * rateOfInterest * ((X) / (X - 1));

    const totalPayment = (+calculatedInterestValue + +principalAmt).toFixed(2);



    // console.log(`X: ${X}`);
    // console.log(`principalAmt: ${principalAmt}`);
    // console.log(`ratePerc: ${ratePerc}`);
    // console.log(`rateOfInterest: ${rateOfInterest}`);
    // console.log(`years: ${years}`);
    // console.log(`noOfPeriods: ${noOfPeriods}`);
    // console.log(`years: ${years}`);
    // console.log(`emi: ${emi}`);
    // console.log(`calculatedInterestValue: ${calculatedInterestValue} , principalAmt: ${principalAmt}`);
    // console.log(`totalPayment: ${totalPayment}`);

    if (isFinite(emi)) {
        hideResultsBlock();
        showSpinner();
        loadResultsBlock();
        removeSpinner();
        document.querySelector('#monthlyPayment').innerHTML = `₹${emi.toFixed(2)}`;
        document.querySelector('#totalInterest').innerHTML = `₹${calculatedInterestValue}`;
        document.querySelector('#totalPayment').innerHTML = `₹${totalPayment}`;

        // showing input values to the user
        document.querySelector('#loanAmount').innerHTML = `Loan Amount: ₹${amount.value}`;
        document.querySelector('#loanInterest').innerHTML = `Loan Interest: ${interest.value}%`;
        document.querySelector('#loanRepaytime').innerHTML = `Loan Repay Time: ${yearsToRepay.value} years`;
    } else {
        console.log('Please check your numbers');
        errorMsg();
        
    }


    e.preventDefault();
}

function errorMsg() {
    const errorBlock = document.createElement('p');
    errorBlock.className = 'red-text center errorMsg';
    errorBlock.innerHTML = 'Kindly check the input values';
    const userInputsDiv = document.querySelector('#userInputsDiv');

    //appending the errorBlock  after userInputsDiv div
    userInputsDiv.insertAdjacentElement("afterend", errorBlock);

    setTimeout(() => {
    const errorBlock = document.querySelector('.errorMsg');
        errorBlock.remove();
    }, 3000);

}

function showSpinner() {
    setTimeout(() => {
        spinner.style.display = "block";
        console.log("spinner loaded");
    }, 200);
}

function removeSpinner() {
    setTimeout(() => {
        spinner.style.display = "none";
        console.log("spinner hidden");
    }, 2000);


}
function hideResultsBlock() {
    setTimeout(() => {
        results.style.display = "none";
        console.log("Result block loaded");
    }, 20);
}
function loadResultsBlock() {
    setTimeout(() => {
        results.style.display = "block";
        console.log("Result block loaded");
    }, 2000);
}
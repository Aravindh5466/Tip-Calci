let billAmountEl = document.getElementById("billAmount");
let percentageTipEl = document.getElementById("percentageTip");
let tipAmountEl = document.getElementById("tipAmount");
let totalAmountEl = document.getElementById("totalAmount");
let errorMessageEl = document.getElementById("errorMessage");
let calculateButtonEl = document.getElementById("calculateButton");

function calculateTip() {
    if (billAmountEl.value === "") {
        errorMessageEl.textContent = "Please Enter a Valid Input."
    } else if (percentageTipEl.value === "") {
        errorMessageEl.textContent = "Please Enter a Valid Input."
    } else {
        errorMessageEl.textContent = "";

        let billAmount = parseInt(billAmountEl.value)
        let percentageTip = parseInt(percentageTipEl.value)

        let calculatedTip = (percentageTip / 100) * billAmount
        let calculatedBill = billAmount + calculatedTip

        tipAmountEl.value = calculatedTip
        totalAmountEl.value = calculatedBill
    }
}
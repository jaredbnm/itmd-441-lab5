const form = document.querySelector('form');
const billInput = document.getElementById('bill');
const billwTax = document.getElementById('bill-wtax');
const tipRange = document.getElementById('tip');
const tipAmount = document.getElementById('tip-amount');
const totalBill = document.getElementById('total-bill');
const billError = document.getElementById('bill-error');

form.addEventListener('input', function() {
  calcBillWithTax();
  calcTipAmount();
  calcTotalBill();
  billValidation()
});

// calculate bill with 11% tax
function calcBillWithTax() {
  let bill = parseFloat(billInput.value);
  let tax = bill * 0.11;
  let billWithTax = bill + tax;
  billwTax.value = `$${billWithTax.toFixed(2)}`;
}

// getting the tip amount
function calcTipAmount() {
  let bill = parseFloat(billInput.value);
  let tipPercent = parseFloat(tipRange.value);
  let tip = bill * tipPercent / 100;
  tipAmount.value = `$${tip.toFixed(2)}`;
}

// calculate total bill with tip and tax
function calcTotalBill() {
  let bill = parseFloat(billInput.value);
  let tax = bill * 0.11;
  let billWithTax = bill + tax;
  let tipPercent = parseFloat(tipRange.value);
  let tip = bill * tipPercent / 100;
  let total = billWithTax + tip;
  totalBill.value = `$${total.toFixed(2)}`;
}

function billValidation() {
  let bill = parseFloat(billInput.value);
  if (isNaN(bill) || bill <= 0) {
    billError.textContent = 'Please enter a valid number.';
    billwTax.value = '$0.00';
    tipAmount.value = '$0.00';
    totalBill.value = '$0.00';
    tipPercent.value = '0%';
    tipRange.value = 0;
  } else {
    billError.textContent = '';
  }
}
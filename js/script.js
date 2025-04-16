const form = document.querySelector('form');
const billInput = document.getElementById('bill');
const billwTax = document.getElementById('bill-wtax');
const tipRange = document.getElementById('tip');
const tipAmount = document.getElementById('tip-amount');
const totalBill = document.getElementById('total-bill)');

form.addEventListener('input', function() {
  calcBillWithTax();
  calcTipAmount();
});

// calculate bill with 11% tax
function calcBillWithTax() {
  let bill = parseFloat(billInput.value);
  let tax = bill * 0.11;
  let billWithTax = bill + tax;
  billwTax.value = billWithTax.toFixed(2);
}

// getting the tip amount
function calcTipAmount() {
  let bill = parseFloat(billInput.value);
  let tipPercent = parseFloat(tipRange.value);
  let tip = bill * tipPercent / 100;
  tipAmount.value = tip.toFixed(2);
}

document.getElementById('calculate').addEventListener('click', function () {
    const bill = document.getElementById('bill-amount').value;
    const tip = document.getElementById('percentage-tip').value;
    const tipAmount = (bill*tip/100);
    
    document.getElementById('tip-amount').value = tipAmount.toFixed(2);
    document.getElementById('total').value = (tipAmount + parseFloat(bill)).toFixed(2);
});

document.getElementById('case-plus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseInput.value * 110;



})
document.getElementById('case-minus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    if (caseNumber > 0) {
        caseInput.value = parseInt(caseNumber) - 1;
        const caseTotal = document.getElementById('case-total');
        caseTotal.innerText = caseInput.value * 110;
    }

})
document.getElementById('phone-plus').addEventListener('click', function () {

    const caseInput = document.getElementById('phone-number');
    phoneNumber = caseInput.value;
    caseInput.value = parseInt(phoneNumber) + 1;
    const caseTotal = document.getElementById('phone-total');
    caseTotal.innerText = caseInput.value * 1250;
})
document.getElementById('phone-minus').addEventListener('click', function () {
    const caseInput = document.getElementById('phone-number');
    const caseNumber = caseInput.value;
    if (caseNumber > 0) {
        caseInput.value = parseInt(caseNumber) - 1;
        const caseTotal = document.getElementById('phone-total');
        caseTotal.innerText = caseInput.value * 1250;
    }

})



// Calculate SubTotal, Tax, and Total
function calculateCartTotal() {
    const phonePrice = 1250; // Price per phone
    const casePrice = 110; // Price per phone case
    const taxRate = 0.10; // 10% tax rate

    const phoneQuantity = parseInt(document.getElementById('phone-number').value);
    const caseQuantity = parseInt(document.getElementById('case-number').value);

    const subTotal = (phoneQuantity * phonePrice) + (caseQuantity * casePrice);
    const tax = subTotal * taxRate;
    const total = subTotal + tax;

    // Update the UI with the calculated values
    document.getElementById('sub-total').innerText = `$${subTotal.toFixed(2)}`;
    document.getElementById('tax-amount').innerText = `$${tax.toFixed(2)}`;
    document.getElementById('total-price').innerText = `$${total.toFixed(2)}`;
}

// Add event listeners for plus and minus buttons
document.getElementById('phone-plus').addEventListener('click', calculateCartTotal);
document.getElementById('phone-minus').addEventListener('click', calculateCartTotal);
document.getElementById('case-plus').addEventListener('click', calculateCartTotal);
document.getElementById('case-minus').addEventListener('click', calculateCartTotal);

// Initial calculation when the page loads
calculateCartTotal();


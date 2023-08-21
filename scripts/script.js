function getElement(id) {
    const totalAmount = document.getElementById(id);
    return totalAmount;
}
let total = 0;
let totalDiscount = 0;
let resetValue = 0;

function addPrice(target) {
    const getPrice = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    const getPriceNumber = parseFloat(getPrice);

    // get product name
    const listText = target.childNodes[3].childNodes[3].innerText;
    // new list item
    const li = document.createElement('li');
    li.className = "item";
    li.innerText = listText;
    const cartItem = getElement('cart-item');
    cartItem.appendChild(li);
    // total amount output
    total = total + getPriceNumber;
    getElement('total-price').innerText = total.toFixed(2);

    // Total Price 
    if (getElement('coupon-code').value == "SELL200") {
        totalDiscount = total * 0.2;
        getElement('total-discount').innerText = totalDiscount.toFixed(2);
    }
    const totalPrice = getElement('total-price').innerText;
    const totalPriceNumber = parseFloat(totalPrice);
    const afterDiscount = totalPriceNumber - totalDiscount;
    getElement('grand-total').innerText = afterDiscount.toFixed(2);

    // enable dead make purchase button
    if (total > 0) {
        getElement('purchase-btn').removeAttribute('disabled');
    }

}

// calculate discount
function addDiscount(target) {
    if (getElement('coupon-code').value == "SELL200") {
        totalDiscount = total * 0.2;
        getElement('total-discount').innerText = totalDiscount.toFixed(2);

        target.parentNode.className = "join w-full text-lime-600";
        target.parentNode.childNodes[1].className = "input input-bordered join-item focus:outline-none border-lime-600 w-full"
    } else {
        target.parentNode.className = "join w-full text-rose-500 border-red-500 outline-2 outline-rose-500";
        target.parentNode.childNodes[1].className = "input join-item focus:outline-2 outline-rose-500 w-full border-rose-600"
    }
    const totalPrice = getElement('total-price').innerText;
    const totalPriceNumber = parseFloat(totalPrice);
    const afterDiscount = totalPriceNumber - totalDiscount;
    getElement('grand-total').innerText = afterDiscount.toFixed(2);
}


// Reset Cart
function resetCart() {

    getElement('coupon-code').value = '';
    getElement('total-price').innerText = resetValue.toFixed(2);
    getElement('total-discount').innerText = resetValue.toFixed(2);
    getElement('grand-total').innerText = resetValue.toFixed(2);

    total = 0;
    totalDiscount = 0;
    resetValue = 0;

    const removableList = document.querySelectorAll('#cart-item li');

    for (let i = 0; i < removableList.length; i++) {
        removableList[i].remove();
    }
}

// enable dead coupon button
function enableBtn() {
    const couponInput = getElement('coupon-code')
    const couponInputValue = couponInput.value;
    if (couponInputValue === 'SELL200') {
        getElement('apply-discount').removeAttribute('disabled');
    } else {
        getElement('apply-discount').setAttribute('disabled', true)
    }
}



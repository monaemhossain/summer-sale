function cartTotals(id){
    const totalAmount = document.getElementById(id);
    return totalAmount;
}
const changeValue = cartTotals('total-price');



let total = 0;

function addPrice(target){
    const getPrice = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    const getPriceNumber = parseFloat(getPrice);

// get product name
    const listText = target.childNodes[3].childNodes[3].innerText;
// new list item
    const li = document.createElement('li');
    li.innerText = listText;
    const cartItem = document.getElementById('cart-item');
    cartItem.appendChild(li);
// total amount output
    total = total + getPriceNumber;
    cartTotals('total-price').innerText = total.toFixed(2);
    cartTotals('grand-total').innerText = afterDiscount.toFixed(2);
}



let totalDiscount = 0;
function addDiscount(value){
    if(value.parentNode.childNodes[1].value == "SELL200"){
      totalDiscount = total * 0.2;
      cartTotals('total-discount').innerText = totalDiscount.toFixed(2);
    }else{
        alert("invalid coupon");
    }
    const totalPrice = cartTotals('total-price').innerText;
    const totalPriceNumber = parseFloat(totalPrice);
    const afterDiscount = totalPriceNumber - totalDiscount;
    cartTotals('grand-total').innerText = afterDiscount.toFixed(2);
}
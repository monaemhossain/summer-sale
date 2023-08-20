function getValues(id){
    const totalAmount = document.getElementById(id);
    return totalAmount;
}
let total = 0;
let totalDiscount = 0;

function addPrice(target){
    const getPrice = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    const getPriceNumber = parseFloat(getPrice);

// get product name
    const listText = target.childNodes[3].childNodes[3].innerText;
// new list item
    const li = document.createElement('li');
    li.className = "item";
    li.innerText = listText;
    const cartItem = getValues('cart-item');
    cartItem.appendChild(li);
// total amount output
    total = total + getPriceNumber;
    getValues('total-price').innerText = total.toFixed(2);

// Total Price 
    if(getValues('coupon-code').value == "SELL200"){
        totalDiscount = total * 0.2;
        getValues('total-discount').innerText = totalDiscount.toFixed(2);
        getValues('grand-total').innerText = total - totalDiscount;
    }else if(getValues('coupon-code').value !== "SELL200"){
        getValues('total-discount').innerText = 0.00;
        getValues('grand-total').innerText = total;
    }
}



function addDiscount(target){
    if(getValues('coupon-code').value == "SELL200"){
      totalDiscount = total * 0.2;
      getValues('total-discount').innerText = totalDiscount.toFixed(2);
    }else{
        alert("invalid coupon");
    }
    const totalPrice = getValues('total-price').innerText;
    const totalPriceNumber = parseFloat(totalPrice);
    const afterDiscount = totalPriceNumber - totalDiscount;
    getValues('grand-total').innerText = afterDiscount.toFixed(2);
}

function resetCart(){
    
    getValues('coupon-code').value = '';
    getValues('total-price').innerText = 0.00;
    getValues('total-discount').innerText = 0.00;
    getValues('grand-total').innerText = 0.00;
    const removableList = document.querySelectorAll('#cart-item li');

    for(let i = 0; i<removableList.length; i++){
        removableList[i].remove();
    }
}
// function finalPrice(){
//    console.log("FinalPrice!!!!");
// }

// finalPrice ()



function calculateFinalPrice(price, itemName) {
    let taxRate = 0.1;
    let discount = 0.2;
    let deliveryFee = 5;

    let total = (price * (1 - discount)) * (1 + taxRate) + deliveryFee;

    console.log(`The final price of ${itemName} is $${total}`);
}

calculateFinalPrice(80, "Shoes");
calculateFinalPrice(100, "Jacket");
calculateFinalPrice(1000, "headphone");
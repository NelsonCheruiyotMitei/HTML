function calculateDiscountedPrice(quantity, pricePerItem) {
debugger;
    let totalPrice = 0;




  for (let i = 1; i < quantity; i++) { 

        totalPrice += pricePerItem;

    }




    if (quantity >= 10) {

        totalPrice *= 0.9;

    }





 return totalPrice;

}

console.log(calculateDiscountedPrice(10, 100));
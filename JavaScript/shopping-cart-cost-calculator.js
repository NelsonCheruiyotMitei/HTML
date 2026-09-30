// selling price
const cabbagePrice = 2.5;
const kalesPrice = 2;
const hohoPrice = 4;

//quantity

const cabbageQuantity = 200;
const kalesQuantity = 100;
const hohoQuantity = 50;

// Tax rate(8%)
const taxRate = 0.08;

// Shipping fee
const shippingFee = 5;


 // Calculate individual subtotals
const cabbageSubtotal = cabbagePrice * cabbageQuantity;
const kalesSubtotal = kalesPrice * kalesQuantity;
const hohoSubtotal = hohoPrice * hohoQuantity;


const subtotal = cabbageSubtotal + kalesSubtotal + hohoSubtotal;


const taxAmount = subtotal * taxRate;


const totalCost = subtotal + taxAmount + shippingFee;


console.log(totalCost);
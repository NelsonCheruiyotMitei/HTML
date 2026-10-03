const products =[];

const product1 = {
    name: 'Laptop',
    price: 20000,
    stock: 200
}

const product2 = {
  name: 'Headphone',
  price: 200,
  stock: 300  
}

products.push(product1,product2)



//Function to add anew proct to the products array
function addProduct(name, price, stock) {
    debugger
       const newProduct = {
        name: name,
        price: price,
        stock: stock
       }   

products.push(newProduct)     
}

addProduct('Keyboard', 200, 1000)
console.log(products)
let addtoCart = document.querySelector(".add")
let productCount = document.querySelector(".product-count")
let removefromCart = document.querySelector(".remove")

let counter = 0; 

addtoCart.addEventListener("click", function(){
    counter++; 
    let productinCart = productCount.innerHTML = `[${counter}]`
})

removefromCart.addEventListener("click", function(){
    if (counter > 0) {
        counter--;
        productCount.innerHTML = `[${counter}]`
    }
})
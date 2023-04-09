// call a fetch methods that can call server and get file json
fetch("./products.json")
.then(function (response) {

    // will use the json method to convert json data to javascript object
    return response.json()
})

.then(function (products) {

    console.log(products)
    let blog = document.querySelector('.blog')
    let out =  " "
    for (let product of products) {
        out +=  `
        
        <div class="card col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3" style="width: 18rem;"  >
            <img src="${product.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5> ${product.name}</h5>
                <span> ${product.price} $ </span>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Add To Cart</a>
            </div>
        </div>
        
        `
        
    }

    blog.innerHTML = out
})
let cart = doucment.querySelector('.cart')
let iconshop = doucment.querySelector('.fa-cart-shopping')
iconshop.addEventListener("click", ()=>{
    cart.classList.toggle('act') 
    alert('f')
})





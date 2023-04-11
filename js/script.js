
const products = [
    {
        "id":0,
        "name": "mouse",
        "price": 10,
        "description": "lorem lorem lorem lorem",
        "img": "./img/a.png"
    },
    {
        "id":1,
        "name": "keybord",
        "price": 20,
        "description": "lorem lorem lorem lorem",
        "img": "./img/b.png"
    },
    {
        "id":2,
        "name": "laptop",
        "price": 30,
        "description": "lorem lorem lorem lorem",
        "img": "./img/c.png"
    },
    {
        "id":2,
        "name": "laptop",
        "price": 30,
        "description": "lorem lorem lorem lorem",
        "img": "./img/d.png"
    },
    {
        "id":2,
        "name": "laptop",
        "price": 30,
        "description": "lorem lorem lorem lorem",
        "img": "./img/e.png"
    },
    {
        "id":2,
        "name": "laptop",
        "price": 30,
        "description": "lorem lorem lorem lorem",
        "img": "./img/f.png"
    },
    {
        "id":2,
        "name": "laptop",
        "price": 30,
        "description": "lorem lorem lorem lorem",
        "img": "./img/h.png"
    },
    {
        "id":2,
        "name": "laptop",
        "price": 30,
        "description": "lorem lorem lorem lorem",
        "img": "./img/g.png"
    },
    {
        "id":2,
        "name": "laptop",
        "price": 30,
        "description": "lorem lorem lorem lorem",
        "img": "./img/k.png"
    },
    {
        "id":2,
        "name": "laptop",
        "price": 30,
        "description": "lorem lorem lorem lorem",
        "img": "./img/l.png"
    },
    {
        "id":2,
        "name": "laptop",
        "price": 30,
        "description": "lorem lorem lorem lorem",
        "img": "./img/i.png"
    },
]
let blog = document.querySelector('.blog')


const categorie = [...new Set(products.map((items) =>  {return items})) ]

let i = 0
blog.innerHTML = categorie.map((items)=> 
    {
        const {name, price, img} = items
        return(
            `
        
        <div class="card " style="width: 18rem;"  >


            <img src="${img}" class="card-img-top" alt="...">
              <div class="card-body">
               <h5> ${name}</h5>
               <span> ${price} $ </span>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>` 
               + 
               
                "<button onclick= addtocart("+ (i++) +")  >Add To Cart</button> "
                
               +
                `
                </div>
        </div>
        `)
    }

).join("")

// // create cart iem box ---------------------------------------------
let slider = document.querySelector('.cart')
let iconshop = document.querySelector('.fa-cart-shopping')
iconshop.addEventListener("click", ()=>{
    slider.classList.toggle('act') 
})

var cart = [];
let bodycart = document.querySelector('.bodycart')

function addtocart(a){
    cart.push({...categorie[a]})
    displaycart( )

}
function deletelemnt(a) {
    cart.splice(a, 1)
    displaycart( )
}

function displaycart(a) {
    let count = document.querySelector('.count')
    let totaux = document.querySelector('.totaux')
    count.innerHTML = cart.length
    let j = 0, total = 0;
    if (cart.length == 0) {
        bodycart.innerHTML = "Your Cart is Empty"
    } else {
        bodycart.innerHTML = cart.map((items)=>{

            const {name, price, img} = items
            total = total + price
            totaux.innerHTML = total + " $"
            
            return(`
            
        <div class="item">


            <img src="${img}" >
              <div class="d-flex justify-content-around">
               <h5 class="text-black"> ${name}</h5>
               <span> ${price} $ </span> <br>` 
               + 
               
                "<button onclick= deletelemnt(" + (j++) + ")>remove</button>"
                
               +
                `
            </div>
        </div>
        
            `)
        })
}
}





















































































































































// products.forEach((product, key) => {
//     console.log(product)
//     let content = document.createElement('div')
//     // content.setAttribute('.r')
//     content.innerHTML = `
//     <div class="card " style="width: 18rem;"  >
//             <img src="${product.img}" class="card-img-top" alt="...">
//              <div class="card-body">
//                <h5> ${product.name}</h5>
//               <span> ${product.price} $ </span>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                <button onclick="addToCart(${key})"  class="btn btn-primary">Add To Cart</button>
//            </div>
//      </div>
    
//     `
//     blog.appendChild(content)
// });



// // create add to cart fucntion ----------------------------------------


// let cartlist = []



// function addToCart(key) {
//     if (cartlist[key] == null ) {
//         cartlist[key] == products[key]
//         // cartlist[key].qauntity = 1
//     }
//     reaoldCart()
// }

// function reaoldCart() {
//     cartlist.innerHTML = ""
//     let count = 0
//     cartlist.forEach((product, key) => {
//         // count = count + product.qauntity
//         if (value != null) {
//             let li = document.createElement('div')
//             // content.setAttribute('.r')
            

//             li.innerHTML = `
            
//             <div class="card " style="width: 10rem;"  >
//                 <img src="${product.img}" class="card-img-top" alt="...">
//                  <div class="card-body">
//                    <h5> ${product.name}</h5>
//                   <span> ${product.price} $ </span>
//                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                </div>
//             </div>
            
//             `

//             cartlist.appendChild(li)
//         }
//     });
    
// }
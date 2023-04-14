
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
        
        <div class="card mt-4  "  >


                <img src="${img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <h5> ${name}</h5>
                        <span> ${price} $ </span>
                    </div>
                    <p class="card-text">Some quick example text to build on the card title.</p>` 
               + 
               
                    "<button class='btn' onclick= addtocart("+ (i++) +")  >Add To Cart</button> "
                
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

let remove = document.querySelector('.fa-xmark')

remove.addEventListener("click", ()=>{
    slider.classList.remove('act') 
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
                    

                    <p class="text-black"> ${name}</p>
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


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
















































































































































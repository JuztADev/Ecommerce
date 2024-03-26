import products from "../../products.js"
let productDetails = document.querySelector('.product-details') 
const query = new URLSearchParams(window.location.search)
const id = query.get('id')

const product = products.find((element)=> element.id == id)
console.log(product)


function genProductDetail(product){
    let img = document.createElement('img');
    img.setAttribute('src', `../${product.img}`)
    productDetails.appendChild(img)
    let name = document.createElement('p')
    name.innerText = product.nombre
    productDetails.appendChild(name)
    let categoria = document.createElement('p')
    categoria.innerText = product.categoria
    productDetails.appendChild(categoria)
    let priceDiv = document.createElement('div')
    priceDiv.classList.add('priceDiv')
    let price = document.createElement('p')
    let divDeal = document.createElement('div')
    let prices = document.createElement('div')
    if(product.oferta){
        divDeal.classList.add('deal-div')
        let percentage = document.createElement('p')
        percentage.innerText = `-${product.oferta}%`
        divDeal.appendChild(percentage)
        priceDiv.appendChild(divDeal)
        let priceD = document.createElement('p')
        priceD.classList.add('priceD')
        priceD.innerText = Number((product.precio - (product.oferta * product.precio / 100)).toFixed(2))
        prices.appendChild(priceD)
        priceDiv.appendChild(prices)
        price.classList.add('priceWD')
        
    }else{
        price.classList.add('price')
    }
    price.innerText = product.precio
    prices.appendChild(price)
    prices.classList.add('prices')
    priceDiv.appendChild(prices)
    productDetails.appendChild(priceDiv)
    let rated = document.createElement('div')
    rated.classList.add('rating')
    for (let i = 1; i < 6; i++) {
        let star = document.createElement('div')
        star.classList.add('star')
        if(i<=product.calificacion || product.calificacion+1>=i+0.8){
            star.classList.add('s-full')
            let icon = document.createElement('img')
            icon.setAttribute('src','../icons/s_full.png')
            star.appendChild(icon)
        }else if(product.calificacion+1>=i+0.1 && 
        product.calificacion+1<=i+0.7 ){
            star.classList.add('s-half')
            let icon = document.createElement('img')
            icon.setAttribute('src','../icons/s_half.png')
            star.appendChild(icon)
        }else{
            star.classList.add('s-blank')
            let icon = document.createElement('img')
            icon.setAttribute('src','../icons/s_blank.png')
            star.appendChild(icon)
        }
        rated.appendChild(star)
        
    }
    productDetails.appendChild(rated)
    let description = document.createElement('p')
    description.innerText = product.descripcion
    productDetails.appendChild(description)
    let addCart = document.createElement('div')
    addCart.classList.add('cartDiv')
    let inputDiv = document.createElement('div')
    inputDiv.classList.add('input-div')
    let btnLess = document.createElement('button')
    btnLess.innerText = '-'
    btnLess.onclick = lessProduct
    inputDiv.appendChild(btnLess)
    let input = document.createElement('input')
    input.setAttribute('type','number')
    input.setAttribute('disabled','')
    input.setAttribute('min','1')
    input.setAttribute('value', "1")
    input.setAttribute('class','quantity')
    inputDiv.appendChild(input)
    let btnMore = document.createElement('button')
    btnMore.innerText = '+'
    btnMore.onclick = moreProduct
    inputDiv.appendChild(btnMore)
    addCart.appendChild(inputDiv)
    let divbtncart = document.createElement('div')
    divbtncart.classList.add('btn-cart-add')
    let btnAddtoCart = document.createElement('button')
    btnAddtoCart.innerText = 'Agregar al carrito'
    btnAddtoCart.onclick = addtoCart
    divbtncart.appendChild(btnAddtoCart)
    addCart.appendChild(divbtncart)
    productDetails.appendChild(addCart)
}

document.addEventListener('DOMContentLoaded',(e)=>{
    product ? genProductDetail(product):productNotFound()
    
})

function productNotFound(){
    let divNotFound = document.createElement('div');
    divNotFound.classList.add('not-found')
    let icon = document.createElement('img')
    icon.setAttribute('src','../icons/question_mark_FILL0_wght400_GRAD0_opsz24.svg')
    divNotFound.appendChild(icon)
    let text = document.createElement('p');
    text.innerText = "Producto no encontrado"
    divNotFound.appendChild(text)
    let a = document.createElement('a')
    a.setAttribute('href','./shop.html')
    a.innerText = 'Volver a la tienda'
    divNotFound.appendChild(a)
    productDetails.appendChild(divNotFound)
    
}

function addtoCart(){
    let cart;
    localStorage.getItem('cart-items') ? cart = JSON.parse(localStorage.getItem('cart-items')):cart = [];
    let index = cart.findIndex((item)=> item.id == product.id);
    if (index>=0) {
        let item = cart[index]
        let itemquantity = Number(item.cantidad)
        itemquantity += Number(document.querySelector('.quantity').value)
        item.cantidad = itemquantity
        cart[index] = item
        localStorage.setItem('cart-items',JSON.stringify(cart))
        window.location.href = `./cart.html`
    }
    else{
        let item = product
        let itemquantity = Number(document.querySelector('.quantity').value)
        item.cantidad = itemquantity
        cart.push(item)
        localStorage.setItem('cart-items',JSON.stringify(cart))
        window.location.href = `./cart.html`
    }
    
}

function lessProduct(){
    let quantity = Number(document.querySelector('.quantity').value)
    if(quantity>1){
        document.querySelector('.quantity').value = Number(quantity - 1)
    }
    
    
}

function moreProduct(){
    let quantity = Number(document.querySelector('.quantity').value)
    document.querySelector('.quantity').value = Number(quantity + 1)
}
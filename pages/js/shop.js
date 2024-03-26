import { productCardGen } from "../../products.js";
import products from "../../products.js";

let divContainer = document.querySelector('.products-container')
let category = document.querySelector('#categoryFilter')
let price = document.querySelector('#priceFilter')

document.addEventListener('DOMContentLoaded',()=>{
    productCardGen(products,products.length,divContainer,".")
})

category.addEventListener('change',filter)
price.addEventListener('change',filter)
divContainer.addEventListener('click',(e)=>{
    cardClicked(e)
})

function filter(){
    let items = products
    let filter1 = category.value
    let filter2 = price.value
    filter1 == 'all' ? items:items = items.filter((item)=>item.categoria==filter1)
    if(filter2=='mayor'){
        items.sort((a,b) => b.precio - a.precio)
    }else if(filter2=='menor'){
        items.sort((a,b) => a.precio - b.precio)
    }
    let productsAll = document.querySelector('.products-all')
    productsAll.removeChild(document.querySelector('.products-container'))
    let productDiv = document.createElement('div')
    productDiv.classList.add('products-container')
    productCardGen(items,items.length,productDiv,".")
    productDiv.addEventListener('click',(e)=>{
        cardClicked(e)
    })
    document.querySelector('.products-all').appendChild(productDiv)
}

function cardClicked(element){
    let text = element.target.classList.value
    let textSplit = text.split(" ")
    textSplit.length >= 2 ? window.location.href = `./product.html?id=${textSplit[1]}`:undefined
    
}
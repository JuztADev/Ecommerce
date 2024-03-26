import bannerContent from './banner.js';
import products from './products.js';
import { productCardGen } from './products.js';
let bannerimg = document.querySelector('.images');
let bannerSelected = document.querySelector('.selected')
let lBtns = document.querySelectorAll('.l-btn')
let rBtns = document.querySelectorAll('.r-btn')
let productsSlide = document.querySelectorAll('.products-slide')




document.addEventListener('DOMContentLoaded',()=>{
    bannerGen()
    genDeals()
    genBestSeller()
    genMostPopularTech()
    genMostPopularFashion()
    
    
})


bannerSelected.addEventListener('click',(e)=>{
    if(!e.target.id == ""){
        bannerimg.scrollTo({
            top:0,
            left:window.screen.availWidth * e.target.id,
            behavior:'smooth'
        })
        detectScroll(e.target.id)
    }
    
    
})
productsSlide.forEach((slide)=> slide.addEventListener('click',(e)=>{
    cardClicked(e)
}
))

lBtns[0].addEventListener('click',(e)=>{
    scrollClick(bannerimg,-window.screen.availWidth)
    let divid =  Math.round(bannerimg.scrollLeft / window.screen.availWidth);
    divid-1 >= 0 ? detectScroll(divid-1):undefined;
})

rBtns[0].addEventListener('click',(e)=>{
    let maxScroll = bannerimg.scrollWidth -bannerimg.clientWidth
    scrollClick(bannerimg,+window.screen.availWidth)
    let maxId = Math.round(maxScroll/ window.screen.availWidth)
    let divid = Math.round(bannerimg.scrollLeft / window.screen.availWidth)
    divid+1 <= maxId ? detectScroll(divid+1):undefined;
})

rBtns[1].addEventListener('click',(e)=>{
    let widthCard = document.querySelector('.productCard').offsetWidth
    
    scrollClick(productsSlide[0],+widthCard+20)
    
})

lBtns[1].addEventListener('click',(e)=>{
    let widthCard = document.querySelector('.productCard').offsetWidth
    scrollClick(productsSlide[0],-widthCard-20)
})

rBtns[2].addEventListener('click',(e)=>{
    let widthCard = document.querySelector('.productCard').offsetWidth
    scrollClick(productsSlide[1],+widthCard+20)
    
})

lBtns[2].addEventListener('click',(e)=>{
    let widthCard = document.querySelector('.productCard').offsetWidth
    scrollClick(productsSlide[1],-widthCard-20)
})
rBtns[3].addEventListener('click',(e)=>{
    let widthCard = document.querySelector('.productCard').offsetWidth
    scrollClick(productsSlide[2],+widthCard+20)
    
})

lBtns[3].addEventListener('click',(e)=>{
    let widthCard = document.querySelector('.productCard').offsetWidth
    scrollClick(productsSlide[2],-widthCard-20)
})

rBtns[4].addEventListener('click',(e)=>{
    let widthCard = document.querySelector('.productCard').offsetWidth
    scrollClick(productsSlide[3],+widthCard+20)
    
})

lBtns[4].addEventListener('click',(e)=>{
    let widthCard = document.querySelector('.productCard').offsetWidth
    scrollClick(productsSlide[3],-widthCard-20)
})

function scrollClick(element,scroll){
    element.scrollBy({
        top: 0,
        left: scroll,
        behavior: 'smooth'
    })
}
function bannerGen(){
    for (let index = 0; index < bannerContent.length; index++) {
        let img = document.createElement('img');
        img.setAttribute('src', bannerContent[index]['img']);
        img.setAttribute('class', 'img-banner');
        bannerimg.appendChild(img);
        let div = document.createElement('div');
        div.setAttribute('id',index)
        index == 0 ? div.setAttribute('class','sel'):undefined;
        bannerSelected.appendChild(div)
    }
}



function detectScroll(divid){

    let scrollVal = bannerimg.scrollLeft;
    let id = Math.round(scrollVal / window.screen.availWidth);
    if(divid != id){
        id = id.toString();
        document.getElementById(id).classList.remove('sel')
        document.getElementById(divid).classList.add('sel')
    }
    
}

function genDeals(){
    let deals = products.filter((product)=>product.oferta)
    deals.sort((a,b)=> b.oferta - a.oferta)
    productCardGen(deals,5,productsSlide[0],"")
}
function genBestSeller(){
    let bestSeller = products
    bestSeller.sort((a,b)=> b.ventas_totales - a.ventas_totales)
    productCardGen(bestSeller,10,productsSlide[1],"")
}
function genMostPopularTech(){
    let mostPopularTech = products.filter((product)=>product.categoria=='tecnologia')
    mostPopularTech.sort((a,b)=> b.calificacion - a.calificacion)
    productCardGen(mostPopularTech,5,productsSlide[2],"")
}
function genMostPopularFashion(){
    let mostPopularFashion = products.filter((product)=>product.categoria=='moda')
    mostPopularFashion.sort((a,b)=> b.calificacion - a.calificacion)
    productCardGen(mostPopularFashion,5,productsSlide[3],"")
}



function cardClicked(element){
    let text = element.target.classList.value
    let textSplit = text.split(" ")
    textSplit.length >= 2 ? window.location.href = `/pages/product.html?id=${textSplit[1]}`:undefined
    
}
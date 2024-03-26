let cartSection = document.querySelector('.cart-container');
let cartContent = JSON.parse(localStorage.getItem('cart-items'))
document.addEventListener('DOMContentLoaded',()=>{
    cartContent.length ? cartGen(cartContent):cartEmpty();

})
function cartGen(cartProducts){
    let total = 0
    cartProducts.forEach(element => {
        if(element.oferta){
            total += Number((element.precio -(element.oferta * element.precio/100)).toFixed(2)) * element.cantidad
        }else{
            total += element.precio * element.cantidad
        }
        let div = document.createElement('div')
        div.classList.add('cart-product')
        let img = document.createElement('img')
        img.setAttribute('src', `.${element.img}`)
        div.appendChild(img)
        let name = document.createElement('p')
        name.innerText = element.nombre
        div.appendChild(name)
        let divPrice = document.createElement('div')
        divPrice.classList.add('priceCart')
        let deal = document.createElement('div')
        let price = document.createElement('p')
        if(element.oferta){
            deal.classList.add('percentage')
            let percentage = document.createElement('p')
            percentage.innerText = `-${element.oferta}%`
            percentage.classList.add('discount')
            deal.appendChild(percentage)
            divPrice.appendChild(deal)
            let priceD = document.createElement('p')
            priceD.classList.add('priceD')
            priceD.innerText = Number((element.precio -(element.oferta * element.precio/100)).toFixed(2))
            divPrice.appendChild(priceD)
           
            price.classList.add('priceWD')
        }else{
            price.classList.add('price')
        }
        price.innerText = element.precio
        divPrice.appendChild(price)
        div.appendChild(divPrice)
        let quantityDiv = document.createElement('div')
        quantityDiv.classList.add('quantity-div')
        let btnLess = document.createElement('button')
        btnLess.classList.add('btn-less')
        if(Number(element.cantidad)>1){
            btnLess.innerText = '-'
            btnLess.onclick = function(){lessProduct(element.id)}
        }
        else{
            btnLess.setAttribute('style', `background-image: url(../icons/delete_FILL0_wght400_GRAD0_opsz24.svg)`)
            btnLess.onclick = function (){deleteProduct(element.id)}
        }
        quantityDiv.appendChild(btnLess)
        let input = document.createElement('input')
        input.setAttribute('type','number')
        input.setAttribute('disabled','')
        input.setAttribute('min','1')
        input.setAttribute('value', element.cantidad)
        input.setAttribute('class','quantity')
        input.setAttribute('id',element.id)
        quantityDiv.appendChild(input)
        let btnMore = document.createElement('button')
        btnMore.innerText = '+'
        btnMore.onclick = function(){moreProduct(element.id)}
        quantityDiv.appendChild(btnMore)
        div.appendChild(quantityDiv)
        cartSection.appendChild(div)

    })
    let divCheckout = document.createElement('div')
    divCheckout.classList.add('div-checkout')
    let divST = document.createElement('div')
    divST.classList.add('div-sub-t')
    let subTotal = document.createElement('p')
    subTotal.innerText = `Sub Total: $${total.toFixed(2)}`
    divST.appendChild(subTotal)
    divCheckout.appendChild(divST)
    let divBtnCheckout = document.createElement('div')
    divBtnCheckout.classList.add('div-btn-co')
    let btnCheckout = document.createElement('button')
    btnCheckout.innerText = 'Continuar con el pago'
    divBtnCheckout.appendChild(btnCheckout)
    divCheckout.appendChild(divBtnCheckout)
    cartSection.appendChild(divCheckout)
    
    
}

function cartEmpty(){
    let divEmpty = document.createElement('div')
    divEmpty.classList.add('empty-cart')
    let icon = document.createElement('img')
    icon.setAttribute('src','../icons/production_quantity_limits_FILL0_wght400_GRAD0_opsz24.svg')
    let text = document.createElement('p')
    text.innerText = "El carrito esta vacio"
    let a = document.createElement('a')
    a.setAttribute('href','./shop.html')
    a.innerText = 'Volver a la tienda'
    divEmpty.appendChild(icon)
    divEmpty.appendChild(text)
    divEmpty.appendChild(a)
    cartSection.appendChild(divEmpty)

}

function lessProduct(id){
    let array = getLocalStorage()
    let index = findIndex(array, id)
    let quantity = Number(document.getElementById(id).value)
    if(quantity>1){
        document.getElementById(id).value = Number(quantity - 1)
        changeQuantity(array,index,quantity-1)
        if(quantity-1 == 1){
            let nodeBtns = document.querySelectorAll('.btn-less')
            let btnLess = nodeBtns[index]
            btnLess.innerText = ""
            btnLess.setAttribute('style', `background-image: url(../icons/delete_FILL0_wght400_GRAD0_opsz24.svg)`)
            btnLess.onclick = function (){deleteProduct(id)}
        }
    }
    getTotal()
    
    
    
}

function deleteProduct(id){
    let array = getLocalStorage()
    let listNodes = document.querySelectorAll('.cart-product')
    let index = findIndex(array,id)
    cartSection.removeChild(listNodes[index])
    array.splice(index,1)
    saveLocalStorage(array)
    checkOptions()
    
}

function moreProduct(id){
    let array = getLocalStorage()
    let index = findIndex(array, id)
    let quantity = Number(document.getElementById(id).value)
    document.getElementById(id).value = Number(quantity + 1)
    changeQuantity(array,index,quantity+1)
    if(quantity+1 > 1){
        let nodeBtns = document.querySelectorAll('.btn-less')
        let btnLess = nodeBtns[index]
        btnLess.innerText = "-"
        btnLess.setAttribute('style', `background-image: none`)
        btnLess.onclick = function (){lessProduct(id)}
    }
    getTotal()
}

function findIndex(array, id){
    let index = array.findIndex((item)=> item.id == id)
    return index
}

function getLocalStorage(){
    let array = JSON.parse(localStorage.getItem('cart-items'));
    return array
}

function changeQuantity(array, index, quantity){
    array[index].cantidad = quantity
    saveLocalStorage(array)
}

function saveLocalStorage(array){
    localStorage.setItem('cart-items',JSON.stringify(array))

}

function checkOptions(){
    let array = getLocalStorage()
    if(!array.length){
        let listNodes = cartSection.childNodes
        for (let index = 1; index < listNodes.length; index++) {
            cartSection.removeChild(listNodes[index])
            
        }
        cartEmpty()

    }
    else{
        getTotal()
    }
    
}
function getTotal(){
    let array = getLocalStorage()
    let total = 0
    array.forEach(element =>{
        if(element.oferta){
            total += Number((element.precio -(element.oferta * element.precio/100)).toFixed(2)) * element.cantidad

        }else{
            total += element.precio * element.cantidad
        }
    })
    document.querySelector('.div-sub-t').firstChild.innerText = `Sub Total: $${total.toFixed(2)}`
}



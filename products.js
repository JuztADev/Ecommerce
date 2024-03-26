const products = [
    {
        id: 375,
        nombre: "Camiseta de algodón",
        precio: 15.99,
        categoria: "moda",
        ventas_totales: 120,
        calificacion: 4.5,
        descripcion: "Camiseta cómoda de algodón en varios colores.",
        img: "./imgproducts/pexels-cottonbro-studio-4066293.jpg"
    },
    {
        id: 219,
        nombre: "Teléfono inteligente",
        precio: 299.99,
        categoria: "tecnologia",
        ventas_totales: 500,
        calificacion: 4.2,
        descripcion: "Teléfono móvil con pantalla táctil y cámara de alta resolución.",
        img: "./imgproducts/pexels-tyler-lastovich-699122.jpg"
    },
    
    {
        id: 358,
        nombre: "Silla de escritorio",
        precio: 89.99,
        categoria: "muebles",
        ventas_totales: 80,
        calificacion: 4.0,
        descripcion: "Silla giratoria de escritorio con soporte lumbar y ajuste de altura.",
        img: "./imgproducts/pexels-oladimeji-ajegbile-4930018.jpg"
    },
    {
        id: 393,
        nombre: "Vestido para mujer",
        precio: 40.99,
        categoria: "moda",
        ventas_totales: 427,
        calificacion: 4.8,
        descripcion: "Vestido largo para mujer de color rosado",
        img: "./imgproducts/pexels-yuri-manei-2235071.jpg"
    },
    {
        id: 317,
        nombre: "Televisor Inteligente",
        precio: 250.99,
        categoria: "tecnologia",
        ventas_totales: 128,
        calificacion: 3.5,
        descripcion: "Televisor inteligente, de alta calidad, 4k comandos por voz.",
        img: "./imgproducts/pexels-max-vakhtbovycn-6186813.jpg"
    },
    
    {
        id: 314,
        nombre: "Sofa",
        precio: 100.20,
        categoria: "muebles",
        ventas_totales: 51,
        calificacion: 3.0,
        descripcion: "Sofa para sala, de tamaño pequeño perfecto para oficina ",
        img: "./imgproducts/pexels-andrea-piacquadio-3757055.jpg"
    },
    {
        id: 402,
        nombre: "Chaqueta de cuero",
        precio: 89.99,
        categoria: "moda",
        ventas_totales: 357,
        calificacion: 4.8,
        descripcion: "Chaqueta de cuero negro, comoda y adaptable a cualquier estilo .",
        img: "./imgproducts/pexels-lorenzo-cinque-4012266.jpg"
    },
    {
        id: 380,
        nombre: "Portatil",
        precio: 199.99,
        categoria: "tecnologia",
        ventas_totales: 153,
        calificacion: 3.4,
        descripcion: "Portatil de alta gama, facil de usar, con garantia por 2 años",
        img: "./imgproducts/pexels-alina-komarevska-16447039.jpg"
    },
    
    {
        id: 410,
        nombre: "Organizador de madera",
        precio: 49.99,
        categoria: "muebles",
        ventas_totales: 440,
        calificacion: 4.2,
        descripcion: "Organizador de madera perfecto para espacios pequeños.",
        img: "./imgproducts/pexels-taryn-elliott-9565723.jpg",
        oferta: 10
    },
    {
        id: 280,
        nombre: "Hoodie",
        precio: 49.99,
        categoria: "moda",
        ventas_totales: 250,
        calificacion: 4.0,
        descripcion: "Hoodie con cremallera de color negro para mujer",
        img: "./imgproducts/pexels-anastasiya-lobanovskaya-1035692.jpg",
        oferta: 3
    },
    {
        id: 258,
        nombre: "audifonos",
        precio: 29.99,
        categoria: "tecnologia",
        ventas_totales: 73,
        calificacion: 2.5,
        descripcion: "audifonos bluetooth con soporte de buena calidad, se puede conectar al computador o al celular",
        img: "./imgproducts/pexels-pavel-danilyuk-8038351.jpg"
    },
    
    {
        id: 360,
        nombre: "Sofa grande",
        precio: 140.99,
        categoria: "muebles",
        ventas_totales: 301,
        calificacion: 4.3,
        descripcion: "Sofa grande de color negro para la sala",
        img: "./imgproducts/pexels-pixabay-276583.jpg",
        oferta: 5
    },
    {
        id: 119,
        nombre: "Pantalon de algódon",
        precio: 20.99,
        categoria: "moda",
        ventas_totales: 362,
        calificacion: 5,
        descripcion: "Pantalon de algodon comodo para uso casual",
        img: "./imgproducts/pexels-cottonbro-studio-4855326.jpg"
    },
    {
        id: 453,
        nombre: "Altavoces",
        precio: 30.99,
        categoria: "tecnologia",
        ventas_totales: 139,
        calificacion: 4.1,
        descripcion: "Altavoces con sonido envolvente con bluetooth, se puede conectar a cualquier dispositivo ",
        img: "./imgproducts/pexels-marinko-krsmanovic-2651794.jpg"
    },
    
    {
        id: 339,
        nombre: "Comedor",
        precio: 119.99,
        categoria: "muebles",
        ventas_totales: 44,
        calificacion: 4.0,
        descripcion: "Comedor mediano en madera, con 6 sillas.",
        img: "./imgproducts/pexels-pixabay-534172.jpg"
    },
    {
        id: 184,
        nombre: "Jeans para hombre",
        precio: 25.99,
        categoria: "moda",
        ventas_totales: 408,
        calificacion: 3.8,
        descripcion: "Jeans para hombre en varios estilos y colores",
        img: "./imgproducts/pexels-karolina-grabowska-4210863.jpg"
    },
    {
        id: 349,
        nombre: "Reloj inteligente",
        precio: 190.99,
        categoria: "tecnologia",
        ventas_totales: 81,
        calificacion: 2.8,
        descripcion: "Reloj inteligente, con bateria que dura 48 horas, se puede conectar con cualquier smartphone",
        img: "./imgproducts/pexels-vishven-solanki-2861929.jpg"
    },
    
    {
        id: 190,
        nombre: "Armario blanco",
        precio: 150.80,
        categoria: "muebles",
        ventas_totales: 353,
        calificacion: 2.5,
        descripcion: "Armario blanco con conpartimientos para los zapatos",
        img: "./imgproducts/pexels-anastasia-shuraeva-5705493.jpg"
    },
    {
        id: 117,
        nombre: "Blusa Amarilla",
        precio: 50.99,
        categoria: "moda",
        ventas_totales: 141,
        calificacion: 3.0,
        descripcion: "blusa amarilla en lino, con mangas acortables.",
        img: "./imgproducts/pexels-lucas-pezeta-1963239.jpg"
    },
    {
        id: 315,
        nombre: "Tablet",
        precio: 99.99,
        categoria: "tecnologia",
        ventas_totales: 256,
        calificacion: 3.2,
        descripcion: "Tableta grande, excelente para diseñar",
        img: "./imgproducts/pexels-pixabay-221185.jpg"
    },
    
    {
        id: 156,
        nombre: "Mesa",
        precio: 89.99,
        categoria: "muebles",
        ventas_totales: 203,
        calificacion: 2.5,
        descripcion: "mesa redonda pequeña de color blanco",
        img: "./imgproducts/pexels-cup-of-couple-7303982.jpg"
    },
    {
        id: 113,
        nombre: "Falda Larga",
        precio: 19.99,
        categoria: "moda",
        ventas_totales: 293,
        calificacion: 5.0,
        descripcion: "Falda larga azul comoda y ajustable",
        img: "./imgproducts/pexels-elias-de-carvalho-1007018.jpg",
        oferta:12
    },
    {
        id: 431,
        nombre: "Camara digital",
        precio: 59.99,
        categoria: "tecnologia",
        ventas_totales: 31,
        calificacion: 3.0,
        descripcion: "camara digital perfecta para fotos al aire libre",
        img: "./imgproducts/pexels-ali-karimi-16892276.jpg"
    },
    
    {
        id: 138,
        nombre: "Escritorio pequeño",
        precio: 79.99,
        categoria: "muebles",
        ventas_totales: 68,
        calificacion: 3.8,
        descripcion: "Escritorio pequeño perfecto para trabajar en casa",
        img: "./imgproducts/pexels-daan-stevens-939331.jpg"
    },
    {
        id: 218,
        nombre: "Top Negro",
        precio: 59.99,
        categoria: "moda",
        ventas_totales: 116,
        calificacion: 4.6,
        descripcion: "Top negro comodo y casual",
        img: "./imgproducts/pexels-alina-rossoshanska-16961278.jpg"
    },
    {
        id: 162,
        nombre: "Impresora",
        precio: 80.99,
        categoria: "tecnologia",
        ventas_totales: 207,
        calificacion: 2.8,
        descripcion: "Impresora digital pequeña, perfecta para oficinas",
        img: "./imgproducts/pexels-anete-lusina-4792283.jpg"
    },
    
    {
        id: 198,
        nombre: "Silla acolchonada",
        precio: 150.99,
        categoria: "muebles",
        ventas_totales: 181,
        calificacion: 4.0,
        descripcion: "Silla acolchonada con estilo retro",
        img: "./imgproducts/pexels-evg-kowalievska-1148955.jpg",
        oferta:12
    },
    {
        id: 303,
        nombre: "Traje",
        precio: 180.99,
        categoria: "moda",
        ventas_totales: 489,
        calificacion: 4.7,
        descripcion: "Traje para hombre color negro con corbatin incluido",
        img: "./imgproducts/pexels-pixabay-255311.jpg"
    },
    {
        id: 289,
        nombre: "Teclado",
        precio: 40.99,
        categoria: "tecnologia",
        ventas_totales: 422,
        calificacion: 4.0,
        descripcion: "Teclado blanco ligero de alta calidad para uso diario",
        img: "./imgproducts/pexels-olena-bohovyk-1772123.jpg",
        oferta:5
    },
    
    {
        id: 285,
        nombre: "Cama",
        precio: 120.99,
        categoria: "muebles",
        ventas_totales: 433,
        calificacion: 4.2,
        descripcion: "Cama grande de madera resistente y duradera",
        img: "./imgproducts/pexels-pixabay-164595.jpg"
    }
]




export function productCardGen(listProducts,lenListProducst,divFather, spaces){
    for (let index = 0; index < lenListProducst; index++) {
        let productCard = document.createElement('div')
        productCard.classList.add('productCard')
        productCard.classList.add(listProducts[index]['id'])
        let img = document.createElement('img')
        img.classList.add('imgProduct')
        img.classList.add(listProducts[index]['id'])
        img.setAttribute('src', `${spaces}${listProducts[index]['img']}`)
        productCard.appendChild(img)
        let productInfo = document.createElement('div')
        productInfo.classList.add('info')
        productInfo.classList.add(listProducts[index]['id'])
        let productName = document.createElement('p')
        productName.innerText = listProducts[index]['nombre']
        productName.classList.add('name')
        productName.classList.add(listProducts[index]['id'])
        productInfo.appendChild(productName)
        let productPriceD = document.createElement('div')
        productPriceD.classList.add('productPriceD')
        productPriceD.classList.add(listProducts[index]['id'])
        let price = document.createElement('p')
        if(listProducts[index]['oferta']){
            let priceD = document.createElement('p')
            priceD.classList.add('priceD')
            priceD.innerText = Number((listProducts[index]['precio'] - (listProducts[index]['oferta'] * listProducts[index]['precio'] / 100)).toFixed(2))
            priceD.classList.add(listProducts[index]['id'])
            productPriceD.appendChild(priceD)
            price.classList.add('priceWD')
            
        }else{
            price.classList.add('price')
        }
        price.innerText = listProducts[index]['precio']
        price.classList.add(listProducts[index]['id'])
        productPriceD.appendChild(price)
        productInfo.appendChild(productPriceD)
        let rated = document.createElement('div')
        rated.classList.add('rated')
        rated.classList.add(listProducts[index]['id'])
        for (let i = 1; i < 6; i++) {
            let star = document.createElement('div')
            star.classList.add('star')
            star.classList.add(listProducts[index]['id'])
            if(i<=listProducts[index]['calificacion'] || listProducts[index]['calificacion']+1>=i+0.8){
                star.classList.add('s-full')
                let icon = document.createElement('img')
                icon.setAttribute('src',`${spaces}./icons/s_full.png`)
                star.appendChild(icon)
            }else if(listProducts[index]['calificacion']+1>=i+0.1 && 
            listProducts[index]['calificacion']+1<=i+0.7 ){
                star.classList.add('s-half')
                let icon = document.createElement('img')
                icon.setAttribute('src',`${spaces}./icons/s_half.png`)
                star.appendChild(icon)
            }else{
                star.classList.add('s-blank')
                let icon = document.createElement('img')
                icon.setAttribute('src',`${spaces}./icons/s_blank.png`)
                star.appendChild(icon)
            }
            rated.appendChild(star)
            
        }
        productInfo.appendChild(rated)
        productCard.appendChild(productInfo)
        divFather.appendChild(productCard)
    }

}

export default products;
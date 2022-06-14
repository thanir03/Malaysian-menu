const menu = [
    {
        id: 0,
        title:"Roti canai",
        type: "breakfast" ,
        price: 2,
        img:"./assets/roti-canai.jpg",
        desc:"Roti canai is a traditional Malaysian pan-fried flatbread made with flour, water, eggs, and fat."
    },
    {
        id: 1,
        title:"Nasi Lemak",
        type: "breakfast" ,
        price: 3,
        img:"./assets/nasi-lemak.jpg",
        desc:"Nasi lemak is a dish originating in Malay cuisine that consists of fragrant rice cooked in coconut milk and pandan leaf"
    },
    {
        id: 2,
        title:"Laksa",
        type: "breakfast" ,
        price: 6,
        img:"./assets/laksa.jpg",
        desc:"Laksa consists of various types of noodles, most commonly thick rice noodles, with toppings such as chicken, prawn or fish"
    },
    {
        id: 3,
        title:"Kway Teow",
        type: "lunch" ,
        price: 5,
        img:"./assets/kway-teow.jpg",
        desc:"Char kway teow is made of a mix of flat rice noodles and yellow wheat noodles, stir-fried over high heat with light and dark soy sauce, garlic, chilli, lup cheong , egg, fishcake and beansprouts."
    },
    {
        id: 4,
        title:"Nasi Kandar",
        type: "lunch" ,
        price: 9,
        img:"./assets/nasi-kandar.jpg",
        desc:"Nasi kandar is a popular northern Malaysian dish, which originates from Penang."
    },
    {
        id: 5,
        title:"Nasi Goreng",
        type: "lunch" ,
        price: 5,
        img:"./assets/nasi-goreng.jpg",
        desc:"Nasi goreng is a Southeast Asian fried rice dish, usually cooked with pieces of meat and vegetables. "
    },
    {
        id: 6,
        title:"Rendang",
        type: "lunch" ,
        price: 5,
        img:"./assets/rendang.jpg",
        desc:"Rendang is often described as a rich dish of meat most commonly beef that has been slow cooked and braised in a coconut milk."
    },
    {
        id: 7,
        title:"Wantan Mee",
        type: "lunch" ,
        price: 6,
        img:"./assets/wonton-mee.jpg",
        desc:"Wonton noodles is a noodle dish of Cantonese origin.The dish usually consists of egg noodles served in a hot broth, garnished with leafy vegetables and wonton dumplings."
    },
    {
        id: 8,
        title:"Nasi Kerabu",
        type: "lunch" ,
        price: 2,
        img:"./assets/nasi-kerabu.jpg",
        desc:"Nasi kerabu is a Malaysian cuisine rice dish in which blue-colored rice is eaten with dried fish or fried chicken, crackers, pickles and other salads."
    },
    {
        id: 9,
        title:"Tosai",
        type: "dinner" ,
        price: 2,
        img:"./assets/tosai.jpg",
        desc:"A thin crisp pancake of Indian origin, typically made from rice flour, stuffed with vegetables, chicken, or other ingredients, and served with chutney."
    },
    {
        id: 10,
        title:"Capati",
        type: "dinner" ,
        price: 2,
        img:"./assets/capati.jpg",
        desc:"A round flat unleavened bread of India that is usually made of whole wheat flour and cooked on a griddle."
    },
    {
        id: 11,
        title:"Naan",
        type: "dinner" ,
        price: 3,
        img:"./assets/naan.jpg",
        desc:"A leavened flat bread originating from northern India, which is traditionally baked by slapping the bread dough onto the side of a hot dome shaped clay oven referred to as a tandoor."
    },
    {
        id: 12,
        title:"Maggi Goreng",
        type: "dinner" ,
        price: 5,
        img:"./assets/maggi-goreng.jpg",
        desc:"A Malaysian dish made by frying instant noodles in a wok with various oils, spices, meats, and vegetables"
    },
    {
        id: 13,
        title:"Mee Goreng",
        type: "dinner" ,
        price: 5,
        img:"./assets/mee-goreng.jpg",
        desc:"Mee Goreng found in Malaysia and other parts of South East Asia  with a sticky, savoury sweet sauce, noodles are tossed with chicken, prawns, vegetables and signature egg ribbons."
    },
    {
        id: 14,
        title:"Satay",
        type: "dessert" ,
        price: 3,
        img:"./assets/sate.jpg",
        desc:"Satay is a Southeast Asian dish of seasoned, skewered and grilled meat, served with a sauce."
    },
    {
        id: 15,
        title:"Cendol",
        type: "dessert" ,
        price: 4,
        img:"./assets/cendol.jpg",
        desc:"Cendol is an iced sweet dessert that contains droplets of green rice flour jelly, coconut milk and palm sugar syrup."
    },
    {
        id: 16,
        title:"Curry Puff",
        type: "dessert" ,
        price: 0.50,
        img:"./assets/curry-puff.jpg",
        desc:"A curry puff is a snack of a small pie consisting of curry with chicken and potatoes in a deep-fried or baked pastry shell."
    },
    {
        id: 17,
        title:"Rojak",
        type: "dessert" ,
        price: 4,
        img:"./assets/rojak.jpg",
        desc:"Rojak is a local salad of mixed vegetables, fruits, and dough fritters that is covered in a sticky black sauce and garnished with chopped peanuts and finely-cut fragrant ginger flowers for a piquant taste. "
    },
]
const allButton = document.querySelector("#all")
const breakfastButton = document.querySelector("#breakfast")
const lunchButton = document.querySelector("#lunch")
const dinnerButton = document.querySelector("#dinner")
const dessertButton = document.querySelector("#dessert")
const foodListEl = document.querySelector(".foodList")


allButton.addEventListener("click",function (){displayFood("all")})
breakfastButton.addEventListener("click",function (){displayFood("breakfast")})
lunchButton.addEventListener("click",function (){displayFood("lunch")})
dinnerButton.addEventListener("click",function (){displayFood("dinner")})
dessertButton.addEventListener("click",function (){displayFood("dessert")}) 

//Displaying all items by default
let str = ""
foodListEl.innerHTML =""
for(let i=0; i<menu.length; i++){
	str += `
    <article>
        <img src=${menu[i].img} alt="${menu[i].title}" class="photo">
        <div class="foodInfo">
            <h4>${menu[i].title}</h4>
            <h4 class="price">RM ${menu[i].price}</h4>  
        </div> 
        <div class="dottedLine"></div>  
        <p class="food-desc">${menu[i].desc}</p>
    </article>
    `
}
foodListEl.innerHTML = str

// Display items when buttons are clicked
const displayFood = function (list){
    foodListEl.innerHTML =""
    str = ""
    if(list === "all"){
        for(let i=0; i<menu.length; i++){
            str += `
            <article>
                <img src=${menu[i].img} alt="${menu[i].title}" class="photo">
                <div class="foodInfo">
                    <h4>${menu[i].title}</h4>
                    <h4 class="price">RM ${menu[i].price}</h4>  
                </div> 
                <div class="dottedLine"></div>  
                <p class="food-desc">${menu[i].desc}</p>
            </article>
            `
        }
    foodListEl.innerHTML = str
    }else{
        str= ""
        foodListEl.innerHTML =""
        for(let i=0; i<menu.length; i++){
            if(menu[i].type === list){
                str += `
                <article>
                    <img src=${menu[i].img} alt="${menu[i].title}" class="photo">
                    <div class="foodInfo">
                        <h4>${menu[i].title}</h4>
                        <h4 class="price">RM ${menu[i].price}</h4>  
                    </div> 
                    <div class="dottedLine"></div>  
                    <p class="food-desc">${menu[i].desc}</p>
                </article>
                `
        }  
    } 
    foodListEl.innerHTML = str
    }
}

// allButton.addEventListener("click", function(){
//     foodListEl.innerHTML =""
//     for(let i=0; i<menu.length; i++){
//         let articleEl = document.createElement("article");
//         articleEl.innerHTML = `
//         <img src=${menu[i].img} alt="${menu[i].title}" class="photo">
//         <div class="foodInfo">
//             <h4>${menu[i].title}</h4>
//             <h4 class="price">RM ${menu[i].price}</h4>  
//         </div> 
//         <div class="dottedLine"></div>  
//         <p class="food-desc">${menu[i].desc}</p>
//         `
//         foodListEl.append(articleEl)
//     }  
// })

// breakfastButton.addEventListener("click", function(){
//     foodListEl.innerHTML =""
//     for(let i=0; i<menu.length; i++){
//         if(menu[i].type === "breakfast"){
//             let articleEl = document.createElement("article");
//             articleEl.innerHTML = `
//             <img src=${menu[i].img} alt="${menu[i].title}" class="photo">
//             <div class="foodInfo">
//                 <h4>${menu[i].title}</h4>
//                 <h4 class="price">RM ${menu[i].price}</h4>  
//             </div> 
//             <div class="dottedLine"></div>  
//             <p class="food-desc">${menu[i].desc}</p>
//             `
//             foodListEl.append(articleEl)
//     }  
// }  
// })
// lunchButton.addEventListener("click", function(){
//     foodListEl.innerHTML =""
//     for(let i=0; i<menu.length; i++){
//         if(menu[i].type === "lunch"){
//             let articleEl = document.createElement("article");
//             articleEl.innerHTML = `
//             <img src=${menu[i].img} alt="${menu[i].title}" class="photo">
//             <div class="foodInfo">
//                 <h4>${menu[i].title}</h4>
//                 <h4 class="price">RM ${menu[i].price}</h4>  
//             </div> 
//             <div class="dottedLine"></div>  
//             <p class="food-desc">${menu[i].desc}</p>
//             `
//             foodListEl.append(articleEl)
//     }  
// }  
// })

// dinnerButton.addEventListener("click", function(){
//     foodListEl.innerHTML =""
//     for(let i=0; i<menu.length; i++){
//         if(menu[i].type === "dinner"){
//             let articleEl = document.createElement("article");
//             articleEl.innerHTML = `
//             <img src=${menu[i].img} alt="${menu[i].title}" class="photo">
//             <div class="foodInfo">
//                 <h4>${menu[i].title}</h4>
//                 <h4 class="price">RM ${menu[i].price}</h4>  
//             </div> 
//             <div class="dottedLine"></div>  
//             <p class="food-desc">${menu[i].desc}</p>
//             `
//             foodListEl.append(articleEl)
//     }  
// }  
// })

// dessertButton.addEventListener("click", function(){
//     foodListEl.innerHTML =""
//     for(let i=0; i<menu.length; i++){
//         if(menu[i].type === "dessert"){
//             let articleEl = document.createElement("article");
//             articleEl.innerHTML = `
//             <img src=${menu[i].img} alt="${menu[i].title}" class="photo">
//             <div class="foodInfo">
//                 <h4>${menu[i].title}</h4>
//                 <h4 class="price">RM ${menu[i].price}</h4>  
//             </div> 
//             <div class="dottedLine"></div>  
//             <p class="food-desc">${menu[i].desc}</p>
//             `
//             foodListEl.append(articleEl)
//     }  
// }  
// })



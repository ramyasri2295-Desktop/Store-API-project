let products=[
    {
        img:"../assest/assests/0.1.jpg",
        name:"Fjallraven",
        description:"Your perfect pack for everyday use and walks in the forest.Stash your laptop (up to 15 in...",
        price:109.95
    },
    {
        img:"../assest/assests/0.2.jpg",
        name:"Mens Casual...",
        description:"Slim fit style, contrast raglan long sleeve, three-button henley placket, light weight...",
        price:22.3
    },
    {
        img:"../assest/assests/0.3.jpg",
        name:"Mens Cotton...",
        description:"Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as...",
        price:55.99
    },
    {
        img:"../assest/assests/1.jpg",
        name:"Mens Casual...",
        description: "The color could be slightly different between on the screen and in practice./Please note...",
        price:15.99
    },
    {
        img:"../assest/assests/2.jpg",
        name:"John Hardy W...",
        description:"From our Legends Collection, the Naga was inspired by the mythical water dragon that prote...",
        price:695
    },
    {
        img:"../assest/assests/3.jpg",
        name:"Solid Gold p...",
        description:"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by...",
        price:168
    },
    {
        img:"../assest/assests/4.jpg",
        name:"White Gold P...",
        description:"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.Gifts to spoil...",
        price:9.99
    },
    {
        img:"../assest/assests/5.jpg",
        name:"Pierced Owl...",
        description:"Rose Gold Plated Double Flared Tunnel Plug Earrings.Made of 316L Stainless Steel...",
        price:10.99
    },
    {
        img:"../assest/assests/6.jpg",
        name:"W 2TB Eleme...",
        description:"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity...",
        price:64
    }

]


let cart=document.getElementById("element");
for(i=0;i<products.length;i++){
    let product=products[i];
    cart.innerHTML +=`
    <div class="cards">
            <img src="${product.img}" alt="image">
            <p>${product.name}</p>
            <p>${product.description}</p>
            <p>$${product.price}</p>
    </div>
    `;
}
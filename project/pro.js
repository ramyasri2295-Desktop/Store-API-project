const container = document.getElementById("product-container");
let allProducts = [];

// Fetch products
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        allProducts = data;
        displayProducts(allProducts);
    })
    .catch(err => console.log(err));


// Display products
function displayProducts(products) {
    container.innerHTML = "";

    products.forEach(product => {
        const shortTitle =
            product.title.length > 20
                ? product.title.substring(0, 20) + "..."
                : product.title;



        container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.title}">
                <h4>${shortTitle}</h4>
              <p class="desc">${product.description}</p>

                <div class="price">$${product.price.toFixed(2)}</div>

                <div class="card-buttons">
                    <button onclick="showDetails(${product.id})">Details</button>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
    });
}


// Select all filter buttons
const buttons = document.querySelectorAll(".but1");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");

        if (category === "all") {
            displayProducts(allProducts);
        } else {
            const filteredProducts = allProducts.filter(product =>
                product.category === category
            );
            displayProducts(filteredProducts);
        }
    });
});


// Add to cart


function checkEmptyCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const wrapper = document.querySelector(".cart-wrapper");
    const emptyCart = document.getElementById("empty-cart");
    const cartContainer = document.getElementById("cart-container");
    const orderSummary = document.getElementById("order-summary");

    if (cart.length === 0) {
        emptyCart.style.display = "block";
        cartContainer.style.display = "none";
        orderSummary.style.display = "none";

        wrapper.classList.add("empty-mode");
    } else {
        emptyCart.style.display = "none";
        cartContainer.style.display = "block";
        orderSummary.style.display = "block";

        wrapper.classList.remove("empty-mode");
    }
}



function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = allProducts.find(p => p.id === id);
    const exist = cart.find(item => item.id === id);

    if (exist) {
        exist.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
}




function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const countElement = document.getElementById("cart-count");
    if (countElement) {
        countElement.innerText = cart.length;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});





let cart = JSON.parse(localStorage.getItem("cart")) || [];
const container1 = document.getElementById("cart-container");


function displayCart() {
    if (!container1) return;

    cart = JSON.parse(localStorage.getItem("cart")) || [];

    container1.innerHTML = "";
    let subtotal = 0;


    cart.forEach(item => {
        subtotal += item.price * item.quantity;

        container1.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" class="cart-img">

                <div class="cart-info">
                    <h4>${item.title}</h4>
                    <p>1 x $${item.price.toFixed(2)}</p>
                </div>

                <div class="qty-box">
                    <button onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>
            <hr>
        `;
        let totalQty = 0;
        cart.forEach(item => {
            totalQty += item.quantity;
        });

        document.getElementById("item-count").innerText = totalQty;

    });
    checkEmptyCart();





    document.getElementById("item-count").innerText = totalQty;

    document.getElementById("subtotal").innerText = "$" + subtotal.toFixed(2);

    let total = subtotal + 30;
    document.getElementById("total").innerText = "$" + total.toFixed(2);
}

function changeQty(id, value) {
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    const item = cart.find(p => p.id === id);
    if (!item) return;

    item.quantity += value;

    if (item.quantity <= 0) {
        cart = cart.filter(p => p.id !== id);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    displayCart();
}






const cart1 = JSON.parse(localStorage.getItem("cart")) || [];

const emptyCart = document.getElementById("empty-cart");
const cartContainer = document.getElementById("cart-container");
const orderSummary = document.getElementById("order-summary");

if (cart.length === 0) {

    emptyCart.style.display = "block";

    cartContainer.style.display = "none";

    orderSummary.style.display = "none";

} else {

    emptyCart.style.display = "none";
    cartContainer.style.display = "block";
    orderSummary.style.display = "block";
}






// cart section

function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cart-container");
    const emptyMsg = document.getElementById("empty-cart");

    container.innerHTML = "";

    if (cart.length === 0) {
        emptyMsg.style.display = "block";
        document.getElementById("item-count").textContent = 0;
        document.getElementById("subtotal").textContent = "$0";
        document.getElementById("total").textContent = "$0";
        return;
    }

    emptyMsg.style.display = "none";

    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;

        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" width="80">
                <div>
                    <h4>${item.title}</h4>
                    <p>$${item.price}</p>
                    <p>Qty: ${item.quantity}</p>
                </div>
            </div>
        `;
    });

    document.getElementById("item-count").textContent = cart.length;
    document.getElementById("subtotal").textContent = "$" + subtotal;
    document.getElementById("total").textContent = "$" + (subtotal + 30);
}

loadCart();

updateCartCount();
displayCart();
checkEmptyCart();







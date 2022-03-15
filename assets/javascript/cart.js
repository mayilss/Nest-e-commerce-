const addBtn = document.querySelectorAll(".add-btn");
const cart = document.querySelector(".cart-table-product");
let cartArray = [];

// Add to local storage
addBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        cartArray = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [];

        const product = btn.parentElement.parentElement;
        const prodName = product.querySelector(".product-name").textContent;
        const prodImg = product.querySelector(".product-img").src;
        const prodUnitPrice = product.querySelector(".unit-price").textContent;

        const cartItem = {
            prodName: prodName,
            prodImg: prodImg,
            prodUnitPrice: prodUnitPrice,
        };

        cartArray.push(cartItem);
        window.localStorage.setItem("cart", JSON.stringify(cartArray));
    });
});



// Display cart
function displayCart() {
    cartArray = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

    cart.innerHTML = "";
    cartArray.forEach(function (item) {
        cart.innerHTML += `
        <div class="cart-table-row">
            <div class="cart-table-row-item col-6">
                <img width="120px" src="${item.prodImg}" alt="">
                <a class="product-name" href="#">${item.prodName}</a>
            </div>
            <div class="cart-table-row-item col">
                <p class="unit-price">${item.prodUnitPrice}</p>
            </div>
            <div class="cart-table-row-item col">
                <div class="quantity-holder">
                    <button class="quantity-btn quantity-btn-minus"><i class="fa-solid fa-angle-down"></i></button>
                    <input type="text" value="1">
                    <button class="quantity-btn quantity-btn-plus"><i class="fa-solid fa-angle-up"></i></button>
                </div>
            </div>
            <div class="cart-table-row-item col">
                <p class="subtotal">$100.00</p>
            </div>
            <div class="cart-table-row-item col">
                <button class="cart-delete-btn"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
        `;
    });
    const cartDeleteBtn = document.querySelectorAll(".cart-delete-btn");
    console.log(cartDeleteBtn)
    cartDeleteBtn.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const product = btn.parentElement.parentElement;
            console.log(product);
            const prodName = product.querySelector(".product-name").textContent;
            
    
            cartArray = localStorage.getItem("cart")
                ? JSON.parse(localStorage.getItem("cart"))
                : [];
    
            cartArray.forEach(function (item, index) {
                if (item.prodName === prodName) {
                    cartArray.splice(index, 1);
                }
            });
    
            window.localStorage.setItem("cart", JSON.stringify(cartArray));
        });
    });
}



window.addEventListener("load", displayCart);

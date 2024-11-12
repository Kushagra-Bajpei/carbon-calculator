let cart = [];
let totalPrice = 0;

document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productName = button.previousElementSibling.previousElementSibling.innerText;
        const price = parseInt(button.previousElementSibling.innerText.replace('Price: ₹', ''));
        addToCart(productName, price);
    });
});

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-price');
    cartItems.innerHTML = '';
    totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.productName} - ₹${item.price}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    totalElement.innerText = totalPrice;
}

document.getElementById('place-order').addEventListener('click', () => {
    const orderSection = document.querySelector('.order-details');
    orderSection.style.display = 'block';
});

document.getElementById('order-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const pincode = document.getElementById('pincode').value;
    const state = document.getElementById('state').value;
    const payment = document.getElementById('payment').value;

    if (name && phone && address && city && pincode && state && payment) {
        alert(`Order placed successfully!\nName: ${name}\nTotal: ₹${totalPrice}`);
        cart = [];
        updateCart();
        document.getElementById('order-form').reset();
    } else {
        alert('Please fill in all the details.');
    }
});

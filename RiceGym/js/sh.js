// Kiểm tra nếu có giỏ hàng trong localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Cập nhật số lượng giỏ hàng
function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(product, price) {
    cart.push({ product, price, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Đã thêm vào giỏ hàng!");
}

// Hiển thị giỏ hàng trên trang cart.html
function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <tr>
                <td>${item.product}</td>
                <td>${item.price}</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                </td>
                <td>${item.price * item.quantity}</td>
                <td><button onclick="removeFromCart(${index})">❌</button></td>
            </tr>
        `;
    });

    totalPrice.innerText = total;
}

// Cập nhật số lượng sản phẩm
function updateQuantity(index, quantity) {
    cart[index].quantity = parseInt(quantity);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Xóa toàn bộ giỏ hàng
function clearCart() {
    localStorage.removeItem("cart");
    cart = [];
    displayCart();
}

// Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
if (document.getElementById("cart-items")) {
    displayCart();
}

// Cập nhật số lượng giỏ hàng trên trang index.html
updateCartCount();

// Hàm thanh toán
function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
        return;
    }

    // Xóa giỏ hàng sau khi thanh toán
    localStorage.removeItem("cart");
    cart = [];

    // Chuyển hướng sang trang xác nhận thanh toán thành công
    window.location.href = "success.html";
}













// // Kiểm tra nếu có giỏ hàng trong localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Cập nhật số lượng giỏ hàng
// function updateCartCount() {
//     document.getElementById("cart-count").innerText = cart.length;
// }

// // Thêm sản phẩm vào giỏ hàng
// function addToCart(product, price) {
//     cart.push({ product, price, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     alert("Đã thêm vào giỏ hàng!");
// }

// // Hiển thị giỏ hàng trên trang cart.html
// function displayCart() {
//     const cartItems = document.getElementById("cart-items");
//     const totalPrice = document.getElementById("total-price");
//     let total = 0;

//     cartItems.innerHTML = "";

//     cart.forEach((item, index) => {
//         total += item.price * item.quantity;
//         cartItems.innerHTML += `
//             <tr>
//                 <td>${item.product}</td>
//                 <td>${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//                 <td><button onclick="removeFromCart(${index})">❌</button></td>
//             </tr>
//         `;
//     });

//     totalPrice.innerText = total;
// }

// // Cập nhật số lượng sản phẩm
// function updateQuantity(index, quantity) {
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa toàn bộ giỏ hàng
// function clearCart() {
//     localStorage.removeItem("cart");
//     cart = [];
//     displayCart();
// }

// // Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
// if (document.getElementById("cart-items")) {
//     displayCart();
// }

// // Cập nhật số lượng giỏ hàng trên trang index.html
// updateCartCount();

// // Hàm thanh toán
// function checkout() {
//     if (cart.length === 0) {
//         alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
//         return;
//     }

//     // Xóa giỏ hàng sau khi thanh toán
//     localStorage.removeItem("cart");
//     cart = [];

//     // Chuyển hướng sang trang xác nhận thanh toán thành công
//     window.location.href = "success.html";
// }
// // Kiểm tra nếu có giỏ hàng trong localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Cập nhật số lượng giỏ hàng
// function updateCartCount() {
//     document.getElementById("cart-count").innerText = cart.length;
// }

// // Thêm sản phẩm vào giỏ hàng
// function addToCart(product, price) {
//     cart.push({ product, price, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     alert("Đã thêm vào giỏ hàng!");
// }

// // Hiển thị giỏ hàng trên trang cart.html
// function displayCart() {
//     const cartItems = document.getElementById("cart-items");
//     const totalPrice = document.getElementById("total-price");
//     let total = 0;

//     cartItems.innerHTML = "";

//     cart.forEach((item, index) => {
//         total += item.price * item.quantity;
//         cartItems.innerHTML += `
//             <tr>
//                 <td>${item.product}</td>
//                 <td>${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//                 <td><button onclick="removeFromCart(${index})">❌</button></td>
//             </tr>
//         `;
//     });

//     totalPrice.innerText = total;
// }

// // Cập nhật số lượng sản phẩm
// function updateQuantity(index, quantity) {
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa toàn bộ giỏ hàng
// function clearCart() {
//     localStorage.removeItem("cart");
//     cart = [];
//     displayCart();
// }

// // Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
// if (document.getElementById("cart-items")) {
//     displayCart();
// }

// // Cập nhật số lượng giỏ hàng trên trang index.html
// updateCartCount();

// // Hàm thanh toán
// function checkout() {
//     if (cart.length === 0) {
//         alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
//         return;
//     }

//     // Xóa giỏ hàng sau khi thanh toán
//     localStorage.removeItem("cart");
//     cart = [];

//     // Chuyển hướng sang trang xác nhận thanh toán thành công
//     window.location.href = "success.html";
// }
// // Kiểm tra nếu có giỏ hàng trong localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Cập nhật số lượng giỏ hàng
// function updateCartCount() {
//     document.getElementById("cart-count").innerText = cart.length;
// }

// // Thêm sản phẩm vào giỏ hàng
// function addToCart(product, price) {
//     cart.push({ product, price, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     alert("Đã thêm vào giỏ hàng!");
// }

// // Hiển thị giỏ hàng trên trang cart.html
// function displayCart() {
//     const cartItems = document.getElementById("cart-items");
//     const totalPrice = document.getElementById("total-price");
//     let total = 0;

//     cartItems.innerHTML = "";

//     cart.forEach((item, index) => {
//         total += item.price * item.quantity;
//         cartItems.innerHTML += `
//             <tr>
//                 <td>${item.product}</td>
//                 <td>${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//                 <td><button onclick="removeFromCart(${index})">❌</button></td>
//             </tr>
//         `;
//     });

//     totalPrice.innerText = total;
// }

// // Cập nhật số lượng sản phẩm
// function updateQuantity(index, quantity) {
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa toàn bộ giỏ hàng
// function clearCart() {
//     localStorage.removeItem("cart");
//     cart = [];
//     displayCart();
// }

// // Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
// if (document.getElementById("cart-items")) {
//     displayCart();
// }

// // Cập nhật số lượng giỏ hàng trên trang index.html
// updateCartCount();

// // Hàm thanh toán
// function checkout() {
//     if (cart.length === 0) {
//         alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
//         return;
//     }

//     // Xóa giỏ hàng sau khi thanh toán
//     localStorage.removeItem("cart");
//     cart = [];

//     // Chuyển hướng sang trang xác nhận thanh toán thành công
//     window.location.href = "success.html";
// }
// // Kiểm tra nếu có giỏ hàng trong localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Cập nhật số lượng giỏ hàng
// function updateCartCount() {
//     document.getElementById("cart-count").innerText = cart.length;
// }

// // Thêm sản phẩm vào giỏ hàng
// function addToCart(product, price) {
//     cart.push({ product, price, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     alert("Đã thêm vào giỏ hàng!");
// }

// // Hiển thị giỏ hàng trên trang cart.html
// function displayCart() {
//     const cartItems = document.getElementById("cart-items");
//     const totalPrice = document.getElementById("total-price");
//     let total = 0;

//     cartItems.innerHTML = "";

//     cart.forEach((item, index) => {
//         total += item.price * item.quantity;
//         cartItems.innerHTML += `
//             <tr>
//                 <td>${item.product}</td>
//                 <td>${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//                 <td><button onclick="removeFromCart(${index})">❌</button></td>
//             </tr>
//         `;
//     });

//     totalPrice.innerText = total;
// }

// // Cập nhật số lượng sản phẩm
// function updateQuantity(index, quantity) {
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa toàn bộ giỏ hàng
// function clearCart() {
//     localStorage.removeItem("cart");
//     cart = [];
//     displayCart();
// }

// // Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
// if (document.getElementById("cart-items")) {
//     displayCart();
// }

// // Cập nhật số lượng giỏ hàng trên trang index.html
// updateCartCount();

// // Hàm thanh toán
// function checkout() {
//     if (cart.length === 0) {
//         alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
//         return;
//     }

//     // Xóa giỏ hàng sau khi thanh toán
//     localStorage.removeItem("cart");
//     cart = [];

//     // Chuyển hướng sang trang xác nhận thanh toán thành công
//     window.location.href = "success.html";
// }
// // Kiểm tra nếu có giỏ hàng trong localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Cập nhật số lượng giỏ hàng
// function updateCartCount() {
//     document.getElementById("cart-count").innerText = cart.length;
// }

// // Thêm sản phẩm vào giỏ hàng
// function addToCart(product, price) {
//     cart.push({ product, price, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     alert("Đã thêm vào giỏ hàng!");
// }

// // Hiển thị giỏ hàng trên trang cart.html
// function displayCart() {
//     const cartItems = document.getElementById("cart-items");
//     const totalPrice = document.getElementById("total-price");
//     let total = 0;

//     cartItems.innerHTML = "";

//     cart.forEach((item, index) => {
//         total += item.price * item.quantity;
//         cartItems.innerHTML += `
//             <tr>
//                 <td>${item.product}</td>
//                 <td>${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//                 <td><button onclick="removeFromCart(${index})">❌</button></td>
//             </tr>
//         `;
//     });

//     totalPrice.innerText = total;
// }

// // Cập nhật số lượng sản phẩm
// function updateQuantity(index, quantity) {
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa toàn bộ giỏ hàng
// function clearCart() {
//     localStorage.removeItem("cart");
//     cart = [];
//     displayCart();
// }

// // Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
// if (document.getElementById("cart-items")) {
//     displayCart();
// }

// // Cập nhật số lượng giỏ hàng trên trang index.html
// updateCartCount();

// // Hàm thanh toán
// function checkout() {
//     if (cart.length === 0) {
//         alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
//         return;
//     }

//     // Xóa giỏ hàng sau khi thanh toán
//     localStorage.removeItem("cart");
//     cart = [];

//     // Chuyển hướng sang trang xác nhận thanh toán thành công
//     window.location.href = "success.html";
// }

// // Kiểm tra nếu có giỏ hàng trong localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Cập nhật số lượng giỏ hàng
// function updateCartCount() {
//     document.getElementById("cart-count").innerText = cart.length;
// }

// // Thêm sản phẩm vào giỏ hàng
// function addToCart(product, price) {
//     cart.push({ product, price, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     alert("Đã thêm vào giỏ hàng!");
// }

// // Hiển thị giỏ hàng trên trang cart.html
// function displayCart() {
//     const cartItems = document.getElementById("cart-items");
//     const totalPrice = document.getElementById("total-price");
//     let total = 0;

//     cartItems.innerHTML = "";

//     cart.forEach((item, index) => {
//         total += item.price * item.quantity;
//         cartItems.innerHTML += `
//             <tr>
//                 <td>${item.product}</td>
//                 <td>${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//                 <td><button onclick="removeFromCart(${index})">❌</button></td>
//             </tr>
//         `;
//     });

//     totalPrice.innerText = total;
// }

// // Cập nhật số lượng sản phẩm
// function updateQuantity(index, quantity) {
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa toàn bộ giỏ hàng
// function clearCart() {
//     localStorage.removeItem("cart");
//     cart = [];
//     displayCart();
// }

// // Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
// if (document.getElementById("cart-items")) {
//     displayCart();
// }

// // Cập nhật số lượng giỏ hàng trên trang index.html
// updateCartCount();

// // Hàm thanh toán
// function checkout() {
//     if (cart.length === 0) {
//         alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
//         return;
//     }

//     // Xóa giỏ hàng sau khi thanh toán
//     localStorage.removeItem("cart");
//     cart = [];

//     // Chuyển hướng sang trang xác nhận thanh toán thành công
//     window.location.href = "success.html";
// }
// // Kiểm tra nếu có giỏ hàng trong localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Cập nhật số lượng giỏ hàng
// function updateCartCount() {
//     document.getElementById("cart-count").innerText = cart.length;
// }

// // Thêm sản phẩm vào giỏ hàng
// function addToCart(product, price) {
//     cart.push({ product, price, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     alert("Đã thêm vào giỏ hàng!");
// }

// // Hiển thị giỏ hàng trên trang cart.html
// function displayCart() {
//     const cartItems = document.getElementById("cart-items");
//     const totalPrice = document.getElementById("total-price");
//     let total = 0;

//     cartItems.innerHTML = "";

//     cart.forEach((item, index) => {
//         total += item.price * item.quantity;
//         cartItems.innerHTML += `
//             <tr>
//                 <td>${item.product}</td>
//                 <td>${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//                 <td><button onclick="removeFromCart(${index})">❌</button></td>
//             </tr>
//         `;
//     });

//     totalPrice.innerText = total;
// }

// // Cập nhật số lượng sản phẩm
// function updateQuantity(index, quantity) {
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa toàn bộ giỏ hàng
// function clearCart() {
//     localStorage.removeItem("cart");
//     cart = [];
//     displayCart();
// }

// // Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
// if (document.getElementById("cart-items")) {
//     displayCart();
// }

// // Cập nhật số lượng giỏ hàng trên trang index.html
// updateCartCount();

// // Hàm thanh toán
// function checkout() {
//     if (cart.length === 0) {
//         alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
//         return;
//     }

//     // Xóa giỏ hàng sau khi thanh toán
//     localStorage.removeItem("cart");
//     cart = [];

//     // Chuyển hướng sang trang xác nhận thanh toán thành công
//     window.location.href = "success.html";
// }
// // Kiểm tra nếu có giỏ hàng trong localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Cập nhật số lượng giỏ hàng
// function updateCartCount() {
//     document.getElementById("cart-count").innerText = cart.length;
// }

// // Thêm sản phẩm vào giỏ hàng
// function addToCart(product, price) {
//     cart.push({ product, price, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     alert("Đã thêm vào giỏ hàng!");
// }

// // Hiển thị giỏ hàng trên trang cart.html
// function displayCart() {
//     const cartItems = document.getElementById("cart-items");
//     const totalPrice = document.getElementById("total-price");
//     let total = 0;

//     cartItems.innerHTML = "";

//     cart.forEach((item, index) => {
//         total += item.price * item.quantity;
//         cartItems.innerHTML += `
//             <tr>
//                 <td>${item.product}</td>
//                 <td>${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//                 <td><button onclick="removeFromCart(${index})">❌</button></td>
//             </tr>
//         `;
//     });

//     totalPrice.innerText = total;
// }

// // Cập nhật số lượng sản phẩm
// function updateQuantity(index, quantity) {
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa toàn bộ giỏ hàng
// function clearCart() {
//     localStorage.removeItem("cart");
//     cart = [];
//     displayCart();
// }

// // Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
// if (document.getElementById("cart-items")) {
//     displayCart();
// }

// // Cập nhật số lượng giỏ hàng trên trang index.html
// updateCartCount();

// // Hàm thanh toán
// function checkout() {
//     if (cart.length === 0) {
//         alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
//         return;
//     }

//     // Xóa giỏ hàng sau khi thanh toán
//     localStorage.removeItem("cart");
//     cart = [];

//     // Chuyển hướng sang trang xác nhận thanh toán thành công
//     window.location.href = "success.html";
// }
// // Kiểm tra nếu có giỏ hàng trong localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Cập nhật số lượng giỏ hàng
// function updateCartCount() {
//     document.getElementById("cart-count").innerText = cart.length;
// }

// // Thêm sản phẩm vào giỏ hàng
// function addToCart(product, price) {
//     cart.push({ product, price, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     alert("Đã thêm vào giỏ hàng!");
// }

// // Hiển thị giỏ hàng trên trang cart.html
// function displayCart() {
//     const cartItems = document.getElementById("cart-items");
//     const totalPrice = document.getElementById("total-price");
//     let total = 0;

//     cartItems.innerHTML = "";

//     cart.forEach((item, index) => {
//         total += item.price * item.quantity;
//         cartItems.innerHTML += `
//             <tr>
//                 <td>${item.product}</td>
//                 <td>${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//                 <td><button onclick="removeFromCart(${index})">❌</button></td>
//             </tr>
//         `;
//     });

//     totalPrice.innerText = total;
// }

// // Cập nhật số lượng sản phẩm
// function updateQuantity(index, quantity) {
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa toàn bộ giỏ hàng
// function clearCart() {
//     localStorage.removeItem("cart");
//     cart = [];
//     displayCart();
// }

// // Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
// if (document.getElementById("cart-items")) {
//     displayCart();
// }

// // Cập nhật số lượng giỏ hàng trên trang index.html
// updateCartCount();

// // Hàm thanh toán
// function checkout() {
//     if (cart.length === 0) {
//         alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
//         return;
//     }

//     // Xóa giỏ hàng sau khi thanh toán
//     localStorage.removeItem("cart");
//     cart = [];

//     // Chuyển hướng sang trang xác nhận thanh toán thành công
//     window.location.href = "success.html";
// }
// // Kiểm tra nếu có giỏ hàng trong localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Cập nhật số lượng giỏ hàng
// function updateCartCount() {
//     document.getElementById("cart-count").innerText = cart.length;
// }

// // Thêm sản phẩm vào giỏ hàng
// function addToCart(product, price) {
//     cart.push({ product, price, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     alert("Đã thêm vào giỏ hàng!");
// }

// // Hiển thị giỏ hàng trên trang cart.html
// function displayCart() {
//     const cartItems = document.getElementById("cart-items");
//     const totalPrice = document.getElementById("total-price");
//     let total = 0;

//     cartItems.innerHTML = "";

//     cart.forEach((item, index) => {
//         total += item.price * item.quantity;
//         cartItems.innerHTML += `
//             <tr>
//                 <td>${item.product}</td>
//                 <td>${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//                 <td><button onclick="removeFromCart(${index})">❌</button></td>
//             </tr>
//         `;
//     });

//     totalPrice.innerText = total;
// }

// // Cập nhật số lượng sản phẩm
// function updateQuantity(index, quantity) {
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa toàn bộ giỏ hàng
// function clearCart() {
//     localStorage.removeItem("cart");
//     cart = [];
//     displayCart();
// }

// // Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
// if (document.getElementById("cart-items")) {
//     displayCart();
// }

// // Cập nhật số lượng giỏ hàng trên trang index.html
// updateCartCount();

// // Hàm thanh toán
// function checkout() {
//     if (cart.length === 0) {
//         alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
//         return;
//     }

//     // Xóa giỏ hàng sau khi thanh toán
//     localStorage.removeItem("cart");
//     cart = [];

//     // Chuyển hướng sang trang xác nhận thanh toán thành công
//     window.location.href = "success.html";
// }
// Kiểm tra nếu có giỏ hàng trong localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Cập nhật số lượng giỏ hàng
// function updateCartCount() {
//     document.getElementById("cart-count").innerText = cart.length;
// }

// // Thêm sản phẩm vào giỏ hàng
// function addToCart(product, price) {
//     cart.push({ product, price, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     alert("Đã thêm vào giỏ hàng!");
// }

// // Hiển thị giỏ hàng trên trang cart.html
// function displayCart() {
//     const cartItems = document.getElementById("cart-items");
//     const totalPrice = document.getElementById("total-price");
//     let total = 0;

//     cartItems.innerHTML = "";

//     cart.forEach((item, index) => {
//         total += item.price * item.quantity;
//         cartItems.innerHTML += `
//             <tr>
//                 <td>${item.product}</td>
//                 <td>${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//                 <td><button onclick="removeFromCart(${index})">❌</button></td>
//             </tr>
//         `;
//     });

//     totalPrice.innerText = total;
// }

// // Cập nhật số lượng sản phẩm
// function updateQuantity(index, quantity) {
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa toàn bộ giỏ hàng
// function clearCart() {
//     localStorage.removeItem("cart");
//     cart = [];
//     displayCart();
// }

// // Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
// if (document.getElementById("cart-items")) {
//     displayCart();
// }

// // Cập nhật số lượng giỏ hàng trên trang index.html
// updateCartCount();

// // Hàm thanh toán
// function checkout() {
//     if (cart.length === 0) {
//         alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
//         return;
//     }

//     // Xóa giỏ hàng sau khi thanh toán
//     localStorage.removeItem("cart");
//     cart = [];

//     // Chuyển hướng sang trang xác nhận thanh toán thành công
//     window.location.href = "success.html";
// }
// // Kiểm tra nếu có giỏ hàng trong localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Cập nhật số lượng giỏ hàng
// function updateCartCount() {
//     document.getElementById("cart-count").innerText = cart.length;
// }

// // Thêm sản phẩm vào giỏ hàng
// function addToCart(product, price) {
//     cart.push({ product, price, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     alert("Đã thêm vào giỏ hàng!");
// }

// // Hiển thị giỏ hàng trên trang cart.html
// function displayCart() {
//     const cartItems = document.getElementById("cart-items");
//     const totalPrice = document.getElementById("total-price");
//     let total = 0;

//     cartItems.innerHTML = "";

//     cart.forEach((item, index) => {
//         total += item.price * item.quantity;
//         cartItems.innerHTML += `
//             <tr>
//                 <td>${item.product}</td>
//                 <td>${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//                 <td><button onclick="removeFromCart(${index})">❌</button></td>
//             </tr>
//         `;
//     });

//     totalPrice.innerText = total;
// }

// // Cập nhật số lượng sản phẩm
// function updateQuantity(index, quantity) {
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa toàn bộ giỏ hàng
// function clearCart() {
//     localStorage.removeItem("cart");
//     cart = [];
//     displayCart();
// }

// // Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
// if (document.getElementById("cart-items")) {
//     displayCart();
// }

// // Cập nhật số lượng giỏ hàng trên trang index.html
// updateCartCount();

// // Hàm thanh toán
// function checkout() {
//     if (cart.length === 0) {
//         alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
//         return;
//     }

//     // Xóa giỏ hàng sau khi thanh toán
//     localStorage.removeItem("cart");
//     cart = [];

//     // Chuyển hướng sang trang xác nhận thanh toán thành công
//     window.location.href = "success.html";
// }
// // Kiểm tra nếu có giỏ hàng trong localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Cập nhật số lượng giỏ hàng
// function updateCartCount() {
//     document.getElementById("cart-count").innerText = cart.length;
// }

// // Thêm sản phẩm vào giỏ hàng
// function addToCart(product, price) {
//     cart.push({ product, price, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     alert("Đã thêm vào giỏ hàng!");
// }

// // Hiển thị giỏ hàng trên trang cart.html
// function displayCart() {
//     const cartItems = document.getElementById("cart-items");
//     const totalPrice = document.getElementById("total-price");
//     let total = 0;

//     cartItems.innerHTML = "";

//     cart.forEach((item, index) => {
//         total += item.price * item.quantity;
//         cartItems.innerHTML += `
//             <tr>
//                 <td>${item.product}</td>
//                 <td>${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//                 <td><button onclick="removeFromCart(${index})">❌</button></td>
//             </tr>
//         `;
//     });

//     totalPrice.innerText = total;
// }

// // Cập nhật số lượng sản phẩm
// function updateQuantity(index, quantity) {
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa toàn bộ giỏ hàng
// function clearCart() {
//     localStorage.removeItem("cart");
//     cart = [];
//     displayCart();
// }

// // Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
// if (document.getElementById("cart-items")) {
//     displayCart();
// }

// // Cập nhật số lượng giỏ hàng trên trang index.html
// updateCartCount();

// // Hàm thanh toán
// function checkout() {
//     if (cart.length === 0) {
//         alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
//         return;
//     }

//     // Xóa giỏ hàng sau khi thanh toán
//     localStorage.removeItem("cart");
//     cart = [];

//     // Chuyển hướng sang trang xác nhận thanh toán thành công
//     window.location.href = "success.html";
// }
// // Kiểm tra nếu có giỏ hàng trong localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Cập nhật số lượng giỏ hàng
// function updateCartCount() {
//     document.getElementById("cart-count").innerText = cart.length;
// }

// // Thêm sản phẩm vào giỏ hàng
// function addToCart(product, price) {
//     cart.push({ product, price, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     alert("Đã thêm vào giỏ hàng!");
// }

// // Hiển thị giỏ hàng trên trang cart.html
// function displayCart() {
//     const cartItems = document.getElementById("cart-items");
//     const totalPrice = document.getElementById("total-price");
//     let total = 0;

//     cartItems.innerHTML = "";

//     cart.forEach((item, index) => {
//         total += item.price * item.quantity;
//         cartItems.innerHTML += `
//             <tr>
//                 <td>${item.product}</td>
//                 <td>${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//                 <td><button onclick="removeFromCart(${index})">❌</button></td>
//             </tr>
//         `;
//     });

//     totalPrice.innerText = total;
// }

// // Cập nhật số lượng sản phẩm
// function updateQuantity(index, quantity) {
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa toàn bộ giỏ hàng
// function clearCart() {
//     localStorage.removeItem("cart");
//     cart = [];
//     displayCart();
// }

// // Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
// if (document.getElementById("cart-items")) {
//     displayCart();
// }

// // Cập nhật số lượng giỏ hàng trên trang index.html
// updateCartCount();

// // Hàm thanh toán
// function checkout() {
//     if (cart.length === 0) {
//         alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
//         return;
//     }

//     // Xóa giỏ hàng sau khi thanh toán
//     localStorage.removeItem("cart");
//     cart = [];

//     // Chuyển hướng sang trang xác nhận thanh toán thành công
//     window.location.href = "success.html";
// }
// // Kiểm tra nếu có giỏ hàng trong localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Cập nhật số lượng giỏ hàng
// function updateCartCount() {
//     document.getElementById("cart-count").innerText = cart.length;
// }

// // Thêm sản phẩm vào giỏ hàng
// function addToCart(product, price) {
//     cart.push({ product, price, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     alert("Đã thêm vào giỏ hàng!");
// }

// // Hiển thị giỏ hàng trên trang cart.html
// function displayCart() {
//     const cartItems = document.getElementById("cart-items");
//     const totalPrice = document.getElementById("total-price");
//     let total = 0;

//     cartItems.innerHTML = "";

//     cart.forEach((item, index) => {
//         total += item.price * item.quantity;
//         cartItems.innerHTML += `
//             <tr>
//                 <td>${item.product}</td>
//                 <td>${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//                 <td><button onclick="removeFromCart(${index})">❌</button></td>
//             </tr>
//         `;
//     });

//     totalPrice.innerText = total;
// }

// // Cập nhật số lượng sản phẩm
// function updateQuantity(index, quantity) {
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa toàn bộ giỏ hàng
// function clearCart() {
//     localStorage.removeItem("cart");
//     cart = [];
//     displayCart();
// }

// // Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
// if (document.getElementById("cart-items")) {
//     displayCart();
// }

// // Cập nhật số lượng giỏ hàng trên trang index.html
// updateCartCount();

// // Hàm thanh toán
// function checkout() {
//     if (cart.length === 0) {
//         alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
//         return;
//     }

//     // Xóa giỏ hàng sau khi thanh toán
//     localStorage.removeItem("cart");
//     cart = [];

//     // Chuyển hướng sang trang xác nhận thanh toán thành công
//     window.location.href = "success.html";
// }
// // Kiểm tra nếu có giỏ hàng trong localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Cập nhật số lượng giỏ hàng
// function updateCartCount() {
//     document.getElementById("cart-count").innerText = cart.length;
// }

// // Thêm sản phẩm vào giỏ hàng
// function addToCart(product, price) {
//     cart.push({ product, price, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     alert("Đã thêm vào giỏ hàng!");
// }

// // Hiển thị giỏ hàng trên trang cart.html
// function displayCart() {
//     const cartItems = document.getElementById("cart-items");
//     const totalPrice = document.getElementById("total-price");
//     let total = 0;

//     cartItems.innerHTML = "";

//     cart.forEach((item, index) => {
//         total += item.price * item.quantity;
//         cartItems.innerHTML += `
//             <tr>
//                 <td>${item.product}</td>
//                 <td>${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//                 <td><button onclick="removeFromCart(${index})">❌</button></td>
//             </tr>
//         `;
//     });

//     totalPrice.innerText = total;
// }

// // Cập nhật số lượng sản phẩm
// function updateQuantity(index, quantity) {
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// // Xóa toàn bộ giỏ hàng
// function clearCart() {
//     localStorage.removeItem("cart");
//     cart = [];
//     displayCart();
// }

// // Gọi hàm hiển thị giỏ hàng nếu đang ở trang cart.html
// if (document.getElementById("cart-items")) {
//     displayCart();
// }

// // Cập nhật số lượng giỏ hàng trên trang index.html
// updateCartCount();

// // Hàm thanh toán
// function checkout() {
//     if (cart.length === 0) {
//         alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
//         return;
//     }

//     // Xóa giỏ hàng sau khi thanh toán
//     localStorage.removeItem("cart");
//     cart = [];

//     // Chuyển hướng sang trang xác nhận thanh toán thành công
//     window.location.href = "success.html";
// }

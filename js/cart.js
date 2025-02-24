document.addEventListener("DOMContentLoaded", function () {
    updateTotal();

    // Cập nhật tổng tiền khi thay đổi số lượng
    document.querySelectorAll(".quantity").forEach(input => {
        input.addEventListener("input", updateTotal);
    });

    // Xóa sản phẩm khỏi giỏ hàng
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", function () {
            this.closest("tr").remove();
            updateTotal();
        });
    });

    // Thanh toán
    document.getElementById("checkout").addEventListener("click", function () {
        let total = document.getElementById("total-amount").innerText;
        if (parseInt(total.replace(/\D/g, '')) === 0) {
            alert("Giỏ hàng của bạn đang trống!");
        } else {
            showPaymentPopup();
        }
    });
});

// Hàm cập nhật tổng tiền
function updateTotal() {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach(row => {
        let price = parseInt(row.querySelector(".price").innerText);
        let quantity = row.querySelector(".quantity").value;
        let totalPrice = price * quantity;
        row.querySelector(".total-price").innerText = totalPrice.toLocaleString() + "đ";
        total += totalPrice;
    });
    document.getElementById("total-amount").innerText = total.toLocaleString() + "đ";
}

// Hiển thị popup thanh toán thành công
function showPaymentPopup() {
    let popup = document.createElement("div");
    popup.className = "payment-popup";
    popup.innerHTML = `
        <p>🎉 Thanh Toán Thành Công!</p>
        <button onclick="closePopup()">OK</button>
    `;
    document.body.appendChild(popup);
    popup.style.display = "block";
}

// Đóng popup
function closePopup() {
    document.querySelector(".payment-popup").remove();
}

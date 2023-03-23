let orderList = document.getElementById("order-list");
let label = document.getElementById("label");
let generateTotal = document.getElementById("total-amount");

let order = JSON.parse(localStorage.getItem("order")) || [];
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
  
calculation();

let generateBill = () => {
    if (order.length !== 0){
        return (orderList.innerHTML = order.map((x) => {
            let { id, item} = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            let { price, name } = search;
            return `
            <div class="order-item">
                <div class="details">  
                    <div class="order-title-price">
                        <h4 class="title-price">
                            <p>${name}</p>
                            <p class="cart-item-price">₹ ${price}</p>
                            <p class="quantity">${item} Quantity</p>
                        </h4>
                    </div>              
                </div>
            </div>
            `;
        }).join(""));
    }
    else{
        orderList.innerHTML = "";
        label.innerHTML = `
        <h3>No Order Placed</h3>
        `;
    }
};

generateBill();
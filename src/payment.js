let basket = JSON.parse(localStorage.getItem("data")) || [];
// let orderData = JSON.parse(localStorage.getItem("orderdata")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
  
calculation();

let clearCart = () => {
    basket = [];
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
  };

var generateOrderList = () => {

  alert("Order Completed");

  let order = JSON.parse(localStorage.getItem("order")) || [];
  let data = JSON.parse(localStorage.getItem("data")) || [];
  
  if (order.length !== 0){
    order = [...data, ...order];
    localStorage.setItem("order", JSON.stringify(order));
  } else {
    localStorage.setItem("order", JSON.stringify(data));
  }

  clearCart();

};
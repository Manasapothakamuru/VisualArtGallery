function cartItems(){
    let cartList = localStorage.getItem("Test1");
    console.log(cartList)
    JSON.parse(cartList);
}
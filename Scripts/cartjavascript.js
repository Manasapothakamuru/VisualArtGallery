var cartListArr = []
function cartItems() {
    let cartList = localStorage.getItem("Test1");
    console.log(cartList)
    let obj = JSON.parse(cartList);
    cartListArr = obj
    cartListItems();
}


function cartListItems() {
    var cost =0;

    for (var i = 0; i < cartListArr.length; i++) {
        var cartListImg = new Image()
        cartListImg.src = "../images/art1.jpg"
        cartListImg.height = 200
        cartListImg.width = 250

        var allDescriptionDiv = document.createElement('div')
        allDescriptionDiv.className = "alldescription"

        var descriptionDiv = document.createElement('div')
        descriptionDiv.className = "description"

        var descriptionTitle = document.createElement('h1')
        descriptionTitle.innerHTML = cartListArr[i]["Name"]

        var descriptionPrice = document.createElement('h3')
        descriptionPrice.innerHTML = "Price: $"+cartListArr[i]["Price"]

        descriptionDiv.appendChild(descriptionTitle)
        descriptionDiv.appendChild(descriptionPrice)
        allDescriptionDiv.appendChild(descriptionDiv)

        var quantityDiv = document.createElement('div')
        quantityDiv.className = "quantity"

        var descriptionQuantity = document.createElement('h3')
        descriptionQuantity.innerHTML = "Quantity:1"

        quantityDiv.appendChild(descriptionQuantity)

        allDescriptionDiv.appendChild(quantityDiv)

        var dltfromCart = document.createElement('button')
        dltfromCart.type='button'
        dltfromCart.id= cartListArr[i]["Id"]
        dltfromCart.innerHTML="Remove"

        dltfromCart.addEventListener("click",function(e){
            var id= e.target.id;
            var stringId=parseInt(id)
            let searching_index = cartListArr.findIndex
            (ele => ele.Id == stringId);
            cartListArr.splice(searching_index,1)
            const deleteListArr = JSON.stringify(cartListArr);
            localStorage.setItem("Test1",deleteListArr)

            var myNode=document.getElementById("cartItemsContainer")
            myNode.innerHTML=""

            cartListArr=localStorage.getItem("Test1")
            cartListArr=JSON.parse(cartListArr);
            cartListItems()

        })

        var cartProductContainer = document.getElementById("cartItemsContainer")

        var newDiv= document.createElement('div')
        newDiv.className="cartContainer"


        newDiv.appendChild(cartListImg)
        newDiv.appendChild(allDescriptionDiv)

        cartProductContainer.appendChild(newDiv)
        cost= cost+cartListArr[i]["Price"]

        allDescriptionDiv.appendChild(dltfromCart)
    }
    var totalCost = document.createElement('h1')
    totalCost.innerHTML = "Total cost: $"+cost
    var cartProdContainer=document.getElementById("cartItemsContainer")
    cartProdContainer.appendChild(totalCost)
}


/* <img src="../images/art1.jpg" alt="" width="250" height="200">
<div class="alldescription">
    <div class="description">
        <h1>Artwork 1</h1>
        <h3>Price: $150</h3>
    </div>
    <div class="quantity">
        <h3>Quantity:1</h3>
    </div>
    <div class="deletebtn">
            <button type="button" id="delBtn">Remove</button>
    </div>
</div> */

//create static html for cart.html ( list of cart items vertically and total amount )
// convert Static html to dynamic using 


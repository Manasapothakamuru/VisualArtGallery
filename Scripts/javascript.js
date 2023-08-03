var artProducts = []
//Take an empty array
//const emptyArr = [];
var masterArtProducts=[]




// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to toggle the visibility of the scroll button
function toggleScrollButton() {
    var scrollButton = document.getElementById('scrollButton');
    if (window.pageYOffset > 300) {
        scrollButton.classList.add('show-scroll-button');
    } else {
        scrollButton.classList.remove('show-scroll-button');
    }
}

// Add event listener to scroll button
document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.getElementById('scrollButton');
    scrollButton.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', toggleScrollButton);
});

function getData() {
    //get api data

    fetch('http://127.0.0.1:5000/getItems',
        {
            method: 'GET',
            //mode: 'no-cors'
            headers: {
                Accept: 'application/json',
            },
        },)
        .then(response => {
            //console.log(response)
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            artProducts = data;
            masterArtProducts=data;
            insertProducts(); // Process the response data here
        })
        .catch(error => {
            console.error('Fetch request failed:', error);
        });
}

//fill response to empty arr
//make a call to insertprod function
function allartBtn(){
    artProducts=masterArtProducts;
    insertProducts()
}

function fineartBtn() {
    result= masterArtProducts.filter(e=>e.Category == "fineart");
    console.log(result)
    artProducts=result;
    insertProducts();
}
function decorativeartBtn(){
    result = masterArtProducts.filter(e=>e.Category=="decorativeart")
    artProducts=result;
    insertProducts();
}
function commercialartBtn(){
    result=masterArtProducts.filter(e=>e.Category=="commercialart")
    artProducts=result;
    insertProducts();
}
    // filter data 
    // and assign to artproducts // arproducts = filteredData 


function insertProducts() {
    var artProductContainer = document.getElementById("artproductscontainer")
    artProductContainer.innerHTML=""

    for (var i = 0; i < artProducts.length; i++) {
        var firstAnchor = document.createElement('a')
        firstAnchor.href = "description.html"

        var artImage = new Image()
        artImage.src = "../images/art1.jpg"
        artImage.height = 200
        artImage.width = 250

        firstAnchor.appendChild(artImage)

        var secondAnchor = document.createElement('a')
        secondAnchor.href = "description.html"

        var artTitle = document.createElement('h4')
        artTitle.innerHTML = artProducts[i]["Name"]

        secondAnchor.appendChild(artTitle)

        var price = document.createElement("p")
        price.innerHTML = "Price:" + artProducts[i]["Price"] + "<br>Rating:" + artProducts[i]["Rating"]


        var addToCartButton = document.createElement("button")
        addToCartButton.type = "button"
        addToCartButton.id = artProducts[i]["Id"]
        addToCartButton.className = "addtoCartBtn"
        addToCartButton.innerHTML = "Add to Cart"

        addToCartButton.addEventListener("click", function (e) {
            var id = e.target.id; // to get location print e and open console and expand 
            //Clicked Item should be pushed to this empty array
            let result = artProducts.filter(function (e) {
                return e.Id == id
                })
                fetch("http://127.0.0.1:5000/CartPostItems",{
                    method:"POST",
                    body:JSON.stringify(result[0]),
                    headers:{
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(response => response.json())
                .then(data =>{
                    result.textContent=JSON.stringify(data);
                })
                .catch(error =>{
                    console.error('Error fetching data:',error);
                });
                
            
            //addCartItems(result)
            
            // emptyArr.push(result[0])
            // // convert empty array to string and store in local storage
            // const stringArr = JSON.stringify(emptyArr);
            // localStorage.setItem("Test1", stringArr)

        });


        var artWorkDiv = document.createElement('div')
        artWorkDiv.className = "artwork"

        artWorkDiv.appendChild(firstAnchor)
        artWorkDiv.appendChild(secondAnchor)
        artWorkDiv.appendChild(artTitle)
        artWorkDiv.appendChild(price)
        artWorkDiv.appendChild(addToCartButton)

        var artProductContainer = document.getElementById("artproductscontainer")
        artProductContainer.appendChild(artWorkDiv)

    }


    // create new HTML and JS file and fetch/ get storaged string and convert back to array and print on screen 
}




//   <div class="artwork">
//   <a href="description.html"><img src="images/art1.jpg" alt="" width="250" height="200"></a>
//   <a href="description.html"><h4>Artwork 8</h4></a>
//   <p>Price: $50<br>
//       Rating: 4.6
//   </p>
//   <button type="button" id="myButton" onclick="myFunction()">Add to cart</button>
//   <p id="demo"></p>
// </div>
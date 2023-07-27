const artProducts = [{
    "Id": 1,
    "Name": "Artwork 1",
    "Rating": "4.6",
    "Price": "$50"

},
{
    "Id": 2,
    "Name": "Artwork 2",
    "Rating": "4.9",
    "Price": "$150"

},
{
    "Id": 3,
    "Name": "Artwork 3",
    "Rating": "4.8",
    "Price": "$250"

},
{
    "Id": 4,
    "Name": "Artwork 4",
    "Rating": "4.4",
    "Price": "$150"

},
{
    "Id": 5,
    "Name": "Artwork 5",
    "Rating": "4.6",
    "Price": "$350"

},
{
    "Id": 6,
    "Name": "Artwork 6",
    "Rating": "4.6",
    "Price": "$250"

},
{
    "Id": 7,
    "Name": "Artwork 7",
    "Rating": "4.2",
    "Price": "$150"

},
{
    "Id": 8,
    "Name": "Artwork 8",
    "Rating": "4.0",
    "Price": "$150"

}]
//Take an empty array
const emptyArr = [];


 

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

function myFunction() {
    console.log("Print here")
}

function insertProducts() {

    for (var i = 0; i < artProducts.length; i++) {
        var firstAnchor = document.createElement('a')
        firstAnchor.href = "description.html"

        var artImage = new Image()
        artImage.src = "images/art1.jpg"
        artImage.height = 200
        artImage.width = 250

        firstAnchor.appendChild(artImage)

        var secondAnchor = document.createElement('a')
        secondAnchor.href = "description.html"

        var artTitle = document.createElement('h4')
        artTitle.innerHTML = artProducts[i]["Name"]

        secondAnchor.appendChild(artTitle)

        var price = document.createElement("p")
        price.innerHTML = "Price:" +artProducts[i]["Price"] + "<br>Rating:"+ artProducts[i]["Rating"]

        var addToCartButton = document.createElement("button")
        addToCartButton.type = "button"
        addToCartButton.id = artProducts[i]["Id"]
        addToCartButton.innerHTML="Add to Cart"

        addToCartButton.addEventListener("click", function (e) {
            var id = e.target.id;
            //Clicked Item should be pushed to this empty array
            let result=artProducts.filter(function(e){
                return e.Id== id
            });
           emptyArr.push(result)
           // convert empty array to string and store in local storage
           const stringArr = JSON.stringify(emptyArr);
           localStorage.setItem("Test1",stringArr)

        })

        var artWorkDiv = document.createElement('div')
        artWorkDiv.class = "artwork"

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
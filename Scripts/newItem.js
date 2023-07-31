function newItem(){
    var name = document.getElementById("fname").value;
    var price = document.getElementById("price").value;
    var rating= document.getElementById("rating").value;
    var reqObj={
        
        "Name": name,
        "Price":price,
        "Rating":rating
    }

    fetch("http://127.0.0.1:5000/postItems",{
        method:"POST",
        body:JSON.stringify(reqObj),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(json=>{console.log(json)
    //fetch
}
    );
}
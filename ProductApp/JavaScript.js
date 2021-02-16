window.addEventListener("load", loadEvent);

function loadEvent(){
    document.getElementById("productInput").addEventListener("click", InputProduct);
    document.getElementById("productRemove").addEventListener("click", RemoveProducts);
}
var productCounter = 0;


function InputProduct() {
    var productTitle = document.getElementById("productTitle").value;
    document.getElementById("productList").innerHTML += "<button>" + productTitle + "</button>"
    productCounter++;
    document.getElementById("productNumber").innerHTML = "<p>Number of products: <span style='color: orangered'>" + productCounter + "</span></p>";
    document.getElementById("productRemove").innerHTML = "<a href=''>Remove all products</a>";
    document.getElementById("productTitle").value = "";
}

function RemoveProducts() {
    var confirmRemove = confirm("Are you sure that you want to remove all products?");
    if (!confirmRemove) {
        event.preventDefault();
    }
}
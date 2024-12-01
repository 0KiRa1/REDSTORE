var menuItem = document.querySelector("#menuItems")
menuItem.style.maxHeight = "0px"

var menu = document.querySelector(".menu-icon")
menu.addEventListener("click", function() {
    if(menuItem.style.maxHeight == "0px") {
        menuItem.style.maxHeight = "200px"
    }
    else {
        menuItem.style.maxHeight = "0px"
    }
})


var productImg = document.querySelector("#product-img") 
var smallImgs = document.querySelectorAll("#small-img")

Array.from(smallImgs).forEach(function(smallImg, index) {
    smallImg.addEventListener("click", function() {
        productImg.src = smallImg.src
    })
})


var log = document.querySelector("#login-form")
var reg = document.querySelector("#reg-form")
var indicator = document.querySelector("#indicator")

document.querySelector("#login").addEventListener("click", function() {
    log.style.transform = "translateX(300px)"
    reg.style.transform = "translateX(300px)"
    indicator.style.transform = "translateX(-8px)"
})

document.querySelector("#register").addEventListener("click", function() {
    reg.style.transform = "translateX(0px)"
    log.style.transform = "translateX(0px)"
    indicator.style.transform = "translateX(72px)"
})

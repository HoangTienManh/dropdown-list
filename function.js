
let selectBox = 
    document.querySelector(".select-header i")
let options = document.querySelector(".options")

selectBox.addEventListener("click", () => {
    options.classList.toggle("active")
})

let selected = 
    document.querySelector(".selected")
let option = 
    document.querySelectorAll(".option")

option.forEach( option => {
    option.addEventListener( "click", () => {
        selected.innerHTML = option.innerHTML
        options.classList.toggle("active")   
    })
})
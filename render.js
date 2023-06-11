
// --------- constructor ---------
function HTMLtag(name, attributes, text, child) {
    this.name = name
    this.attributes = attributes
    this.text = text
    this.child = child
}

// --- init : select header ---
let selectButtonI = new HTMLtag("i", {
    class: "fa-solid fa-chevron-down"
}, "", [])

let selectedDiv = new HTMLtag("div", {
    class: "selected"
},"Select your option",[])

let selectHeaderDiv = new HTMLtag("div", {
    class: "select-header"
}, "",[selectedDiv, selectButtonI])


// --- init : select option  ---
const liText = ["python", "html", "css", "javascript", "git-github", "reactjs", "sass", "tailwind CSS"]

let liArray = []
liText.forEach( text => {
    let optionLi = new HTMLtag("li", {
        class: "option"
    }, text, [])
    
    liArray.push(optionLi)
})

let optionsUl = new HTMLtag("ul", {
    class: "options"
}, "", liArray)


// --- call : render() ---
let root = document.querySelector("#root")
root.appendChild(render(selectHeaderDiv))
root.appendChild(render(optionsUl))


// --- init : render() --- 
function render(htmlObject) {

    let tag = document.createElement(htmlObject.name)
    
    let keys = Object.keys(htmlObject.attributes)
    keys.forEach( key => {
        let attribute = key
        let value = htmlObject.attributes[attribute]

        tag.setAttribute(attribute, value)
    })
    
    tag.innerText = htmlObject.text

    let childs = htmlObject.child
    childs.forEach( tagChild => {
       tag.appendChild(render(tagChild))
    })

    return tag
}



// // --------- js : for functionality ---------

// let selectBox = 
//     document.querySelector(".select-header i")
// let options = document.querySelector(".options")

// selectBox.addEventListener("click", () => {
//     options.classList.toggle("active")
// })

// let selected = 
//     document.querySelector(".selected")
// let option = 
//     document.querySelectorAll(".option")

// option.forEach( option => {
//     option.addEventListener( "click", () => {
//         selected.innerHTML = option.innerHTML
//         options.classList.toggle("active")   
//     })
// })

/* <div class="root">
        <!-- <div class="select-header">
            <div class="selected">
                Select your option
            </div>
            
            <i class="fa-solid fa-chevron-down"></i>
        </div>

       <ul class="options">
           <li class="option">
               html
           </li> */
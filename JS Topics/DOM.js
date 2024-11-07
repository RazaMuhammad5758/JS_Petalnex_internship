// 4 pillers of DOM

// 1. selection of an element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event listener


const a = document.querySelector("h1")

a.style.color = 'Green'

a.addEventListener("click", function(){
    a.innerHTML = 'Changed Text'
})

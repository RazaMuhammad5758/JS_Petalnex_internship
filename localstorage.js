const uname = document.getElementById("username")
const btn = document.getElementById("button")

btn.addEventListener("click", ()=>{
    const value = uname.value
    localStorage.setItem("name", value)
})
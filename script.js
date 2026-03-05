const year = document.getElementById("year")

if(year){
year.textContent = new Date().getFullYear()
}



const toggle = document.querySelector(".nav-toggle")
const nav = document.querySelector(".nav")

if(toggle){

toggle.addEventListener("click", () => {

nav.classList.toggle("open")

})

}

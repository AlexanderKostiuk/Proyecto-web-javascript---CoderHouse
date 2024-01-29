const openMenu = document.querySelector("#open-menu");
const aside = document.querySelector("aside");


// Aca chekeo si clickstate es par o impar y en base a eso hago que el navBar se haga visible si es impar o invisible si es par 
let clickState = 0
openMenu.addEventListener("click", () => {
    clickState ++;
    if (clickState %2 !== 0) {
        aside.classList.add("aside-visible");
    }else {
        aside.classList.remove("aside-visible");
    } 
})
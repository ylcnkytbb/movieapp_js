const arrows = document.querySelectorAll(".arrow");
const movieLists= document.querySelectorAll(".movie-list");


/* console.log(arrows) */ //for slider

arrows.forEach((arrow,i) => {

const itemNumber = movieLists[i].querySelectorAll("img").length;//sliderda gosterilecek resimlerin başa sarması için bunu uyguluyoruz--!!!!burdan sonra geçtik2
let clickCounter = 0; //3
    arrow.addEventListener("click", () => {
        /* console.log("you clicked to: " +i) */
        clickCounter++; //4
        if(itemNumber - (4 + clickCounter) >= 0){ //5 //dortte bir başa saracak
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`; //slider hareket ediyoooor!!!!1

        } else { //6
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;

        }
        
    });
    console.log(movieLists[i].querySelectorAll("img").lenght);
});

//TOGGLE


const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active");
})
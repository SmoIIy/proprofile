//Animated text

const word = document.querySelector("h1");
const subtitle = document.querySelector(".title");
const letters = "ABCDEFGHIJKLMNOPQRSTUVXYZÆØÅ"
let interval = null;

word.onmouseover = event => {
    let interations = 0;

    

    const interval = setInterval(() => {
            event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < interations) {
                    return event.target.dataset.value[index];
                }
             
                return letters[Math.floor(Math.random() * 28)]; 
            }).join("");
            

            if(interations >= event.target.dataset.value.length) {
                clearInterval(interval);
            } 

            interations += 1 /3;
        }, 30);
        

}

//Scroll

const downArrowButton1 = document.querySelector("#downArrowButton1"); 

downArrowButton1.addEventListener("click", () => {
    window.scrollTo({
        top: 1080,
        behavior: "smooth"
    });
});



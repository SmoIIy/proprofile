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

let totalScrollDistance = 0;

const downArrowButton1 = document.querySelector("#downArrowButton1");

downArrowButton1.addEventListener("click", () => {
    const viewportHeight = window.innerHeight; // Get the height of the viewport
    const scrollIncrement = viewportHeight * 0.7; // Set scroll increment to 50% of viewport height
    totalScrollDistance += scrollIncrement; // Increment total scroll distance by the scroll increment

    window.scrollTo({
        top: totalScrollDistance,
        behavior: "smooth",
    });
});

/* Scroll in Animation */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}); 


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

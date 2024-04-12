//Animated text

const word = document.querySelector("h1");
const subtitle = document.querySelector(".title");
const letters = "ABCDEFGHIJKLMNOPQRSTUVXYZÆØÅ"
let interval = null;

word.onmouseover = event => {
    let interations = 0;
    console.log(event.target.dataset.value);
    

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

// Scroll in Animation 

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


//Box animations

const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content")
const tabContentWrapper = document.querySelector(".tab-content-wrapper");

const shiftTabs = (linkId) => {
  allTabs.forEach((tab, i) => {
      
    if (tab.id.includes(linkId)) {
      allTabs.forEach((tabItem) => { 
        tabItem.style = `transform: translateY(-${i*575}px);`;
      });
    }
  });
}

allLinks.forEach((elem) => {
  elem.addEventListener('click', function() {
    const linkId = elem.id;
    const hrefLinkClick = elem.href;

    allLinks.forEach((link, i) => {
      if (link.href == hrefLinkClick){
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });

    shiftTabs(linkId);
  });
});

// handle proper selection for initial load
const currentHash = window.location.hash;

let activeLink = document.querySelector(`.tabs a`);

if (currentHash) {
  const visibleHash = document.getElementById(
    `${currentHash.replace('#', '')}`
  );

  if (visibleHash) {
    activeLink = visibleHash;
  }
}

activeLink.classList.toggle('active');

shiftTabs(activeLink.id);
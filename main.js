const images = [
    { url: "./images/1.jpg", name: "Main title", description: "Main text content" },
    { url: "./images/2.jpg", name: "Main title", description: "Main text content" },
    { url: "./images/3.jpg", name: "Main title", description: "Main text content" },
    { url: "./images/4.jpg", name: "Main title", description: "Main text content" },
    { url: "./images/5.jpg", name: "Main title", description: "Main text content" },
    { url: "./images/6.jpg", name: "Main title", description: "Main text content" },
    { url: "./images/7.jpg", name: "Main title", description: "Main text content" },
    { url: "./images/8.jpg", name: "Main title", description: "Main text content" },
    { url: "./images/9.jpg", name: "Main title", description: "Main text content" },
    { url: "./images/10.jpg", name: "Main title", description: "Main text content" },
    { url: "./images/11.jpg", name: "Main title", description: "Main text content" },
    { url: "./images/12.jpg", name: "Main title", description: "Main text content" },
];



class Slider {

    constructor(images) {
        this.images = images;
        this.initElements();
    }

    addDots() {
        let dots = 0;
        if (this.images.length > 3) {
            dots = Math.ceil(this.images.length / 3);
        } else return;

        const dotsContainer = document.createElement("div");
        dotsContainer.classList.add("dots");
        this.sliderContent.after(dotsContainer);

        const dotsList = document.createElement("ul");
        dotsList.classList.add("dots__list");
        dotsContainer.prepend(dotsList);

        const dotsLi = [];
        for(let i = 0; i < dots; i++){
            dotsLi.push(`<li class="dots__item"></li>\n`);
        }

        dotsList.innerHTML = dotsLi.join("");
        
    }

    initElements() {
        this.sliderContent = document.querySelector(".slider__wrap");
    }
}

new Slider(images)
    .addDots();
const images = [
    { url: "./images/1.jpg", name: "Main title1", description: "Main text content1" },
    { url: "./images/2.jpg", name: "Main title2", description: "Main text content2" },
    { url: "./images/3.jpg", name: "Main title3", description: "Main text content3" },
    { url: "./images/4.jpg", name: "Main title4", description: "Main text content4" },
    { url: "./images/5.jpg", name: "Main title5", description: "Main text content5" },
    { url: "./images/6.jpg", name: "Main title6", description: "Main text content6" },
    { url: "./images/7.jpg", name: "Main title7", description: "Main text content7" },
    { url: "./images/8.jpg", name: "Main title8", description: "Main text content8" },
    { url: "./images/9.jpg", name: "Main title9", description: "Main text content9" },
    { url: "./images/10.jpg", name: "Main title10", description: "Main text content10" },
    { url: "./images/11.jpg", name: "Main title11", description: "Main text content11" },
    { url: "./images/12.jpg", name: "Main title12", description: "Main text content12" },
];



class Slider {

    constructor(images) {
        this.images = images;
        this.initElements();
    }

    initElements() {
        this.sliderContent = document.querySelector(".slider__wrap");
    }

    addDots() {
        let dots = 0;
        if (this.images.length > 3) {
            dots = Math.ceil(this.images.length / 3);
        } else {
            this.showSlider(0);
            return
        };

        const dotsContainer = document.createElement("div");
        dotsContainer.classList.add("dots");
        this.sliderContent.after(dotsContainer);

        this.dotsList = document.createElement("div");
        this.dotsList.classList.add("dots__list");
        dotsContainer.prepend(this.dotsList);

        const dotsLiArr = [];
        for (let i = 0; i < dots; i++) {
            dotsLiArr.push(`<a class="dots__item" data-index ="${i}"></a>\n`);
        }
        this.dotsList.innerHTML = dotsLiArr.join("");

        this.dotsLi = document.querySelectorAll(".dots__item");
        
        this.showSlider(0);
        this.getActive(0);

        this.dotsList.addEventListener("click", (e) => {
            if (!e.target.matches("a")) return;
            let index = e.target.dataset.index;
            this.getActive(+index);
            this.showSlider(+index);
        })

    }

    showSlider(index) {
        const sliderArr = this.images.map((image, i) => {
            if (index * 3 <= i && i < (index + 1) * 3)
                return `
                <div class="card" style="width: 18rem;">
                    <img src="${image.url}" class="card-img-top" alt="${image.name}">
                    <div class="card-body">
                        <h5 class="card-title">${image.name}</h5>
                        <p class="card-text">
                            ${image.description}
                        </p>
                    </div>
                </div>
            `;
        })
        this.sliderContent.innerHTML = sliderArr.join("");
    }

    getActive(index) {
        this.dotsLi.forEach((li, i) =>{
            if(index == i) {
                li.classList.add("active");
            } else {
                li.classList.remove("active");
            }
        })
    }

}

new Slider(images)
    .addDots();



// devyani code 
//  welcome dubai 


//  dubai all packages 
document.querySelectorAll('.filterDiv').forEach(div => {
    if (!div.classList.contains('all')) {
        div.classList.add('all');
    }
});

filterSelection("all");

function filterSelection(c) {
    const elements = document.getElementsByClassName("filterDiv");
    const category = c === "all" ? "all" : c;

    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("show");
        if (elements[i].classList.contains(category)) {
            elements[i].classList.add("show");
        }
    }
}

const btnContainer = document.getElementById("myBtnContainer");
const btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].classList.remove("active");
        }
        this.classList.add("active");
    });
}


document.addEventListener("DOMContentLoaded", function () {
    // Initialize Bootstrap carousel with auto-slide
    const imageSlider = document.getElementById('imageSlider');
    const carousel = new bootstrap.Carousel(imageSlider, {
        ride: true,
        interval: 2000 // Slide every 5 seconds
    });

    // Update content when carousel slides
    imageSlider.addEventListener('slide.bs.carousel', function (event) {
        const contentSections = document.querySelectorAll('.content-section');
        const nextItem = event.relatedTarget;
        const contentId = nextItem.getAttribute('data-content');

        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(contentId).classList.add('active');
    });

    // Image click to show content and slide to image
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            const contentId = this.getAttribute('data-content');
            const contentSections = document.querySelectorAll('.content-section');

            // Update content
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(contentId).classList.add('active');

            // Slide to the clicked image
            carousel.to(index);
        });
    });
});

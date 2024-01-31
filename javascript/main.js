let upButton = document.getElementById("upButton");

window.addEventListener("scroll", function () {
    if (this.window.scrollY > 500) {
        upButton.classList.add('active');
    } else {
        upButton.classList.remove('active');
    }
});

let sections = ['skills-section', 'projects-section', 'about-section', 'contactUs-section'];

let headerButtons = document.querySelectorAll("#headerLists li");

for (let i = 0; i < headerButtons.length; i++){
    headerButtons[i].addEventListener("click", function () {
        document.getElementById(sections[i]).scrollIntoView({behavior: 'smooth'});
    })
}


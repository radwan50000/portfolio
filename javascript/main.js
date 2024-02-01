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

//Start of Project Section
let project_container = document.getElementById('projects-section'),
    projectScrollPosition = project_container.getBoundingClientRect().top + (window.pageYOffset / 2);
    tree1 = document.getElementById('tree-1'),
    tree2 = document.getElementById('tree-1-rev'),
    pos = 1;



window.addEventListener('scroll', function () {
    if (window.scrollY >= projectScrollPosition) {
        pos = window.scrollY / 100;
        if (tree1.style.top >= '-17.5 rem' && tree1.style.right >= '-17.5 rem') {
            // tree1.style.cssText = `top: -17.5 rem;right: -17.5 rem;`;
            // tree2.style.cssText = `top: -17.5 rem;left: -17.5 rem;`;
        } else {
            tree1.style.cssText = `top: ${-50 + pos}rem;right: ${-50 + pos}rem;`;
            tree2.style.cssText = `top: ${-50 + pos}rem;left: ${-50 + pos}rem;`;
        }
        tree1.style.cssText = `top: ${-40 + pos}rem;right: ${-40 + pos}rem;`;
        tree2.style.cssText = `top: ${-40 + pos}rem;left: ${-40 + pos}rem;`;
    }
    console.log("projectScrollPosition => " +projectScrollPosition);

    console.log("Scroll Y => "+window.scrollY);
})
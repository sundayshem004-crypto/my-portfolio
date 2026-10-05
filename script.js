const menuBar = document.getElementById("menu-bar");
const navLinks = document.querySelector(".nav");
const closeMenu = document.getElementById('close-menu');

menuBar.addEventListener('click',function(){
    navLinks.classList.toggle('active');
    menuBar.classList.toggle('active');
    closeMenu.classList.toggle('active');

});

closeMenu.addEventListener('click',function(){
    navLinks.classList.remove('active');
    menuBar.classList.remove('active');
    closeMenu.classList.remove('active');
});
// TRANSITION

const navLink = document.querySelectorAll(".nav-links");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll",function(){

    sections.forEach(function(section){

        const sectionTop  = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (window.scrollY >= sectionTop && 
            window.scrollY < sectionTop + sectionHeight){

                navLink.forEach(function(link){
                    link.classList.remove('active');
                });
                document.querySelector(`.nav-links[href="#${sectionId}"]`)
                .classList.add('active');
            }

    });
});
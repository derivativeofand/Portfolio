function turnLight() {
    const main = document.querySelector('body');
    const style = window.getComputedStyle(main);
    let background = style.getPropertyValue("background-color");

    const tag = document.querySelectorAll('.tag');
    const experience = document.querySelectorAll('.experience-item');
    
    const icons = document.querySelectorAll('.social i');
    const element = document.querySelector(".light");

    
    if (background == "rgb(245, 245, 245)") {
        main.style.backgroundColor = "#121212";
        main.style.color = "#fff";
        for (let i = 0; i < tag.length; i++) {
            tag[i].style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            tag[i].style.color = "#ffffff";
            tag[i].addEventListener('mouseover', () => {
                tag[i].style.color = "#121212";
                tag[i].style.backgroundColor = "#ffcc00";
            })
            tag[i].addEventListener('mouseout', () => {
                tag[i].style.color = "#ffffff";
                tag[i].style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            })
        }

        for (let i = 0; i < icons.length; i++) {
            icons[i].style.color = "white";
            icons[i].addEventListener('mouseover', () => {
                icons[i].style.color = "#ffcc00";
            })
            icons[i].addEventListener('mouseout', () => {
                icons[i].style.color = "white";
            })
        }
        let newNode1 = document.createElement("i");
        newNode1.setAttribute("class", "fa-regular fa-moon fa-fw");
        element.replaceChild(newNode1, element.childNodes[1]);
        newNode1.addEventListener("click", turnLight);
    } else {

        main.style.backgroundColor = "#f5f5f5";
        main.style.color = "#333333";
        
        for (let i = 0; i < tag.length; i++) {
            tag[i].style.backgroundColor = "rgba(0, 0, 0, 0.1)";
            tag[i].style.color = "#333333";
            tag[i].addEventListener('mouseover', () => {
                tag[i].style.backgroundColor = "#ffcc00";
                tag[i].style.color = "#ffffff";
            })
            tag[i].addEventListener('mouseout', () => {
                tag[i].style.backgroundColor = "rgba(0, 0, 0, 0.1)";
                tag[i].style.color = "#333333";
            })
        }

        
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.color = "black";
            icons[i].addEventListener('mouseover', () => {
                icons[i].style.color = "#ffcc00";
            })
            icons[i].addEventListener('mouseout', () => {
                icons[i].style.color = "black";
            })
        }
        let newNode2 = document.createElement("i");
        newNode2.setAttribute("class", "fa-regular fa-sun fa-fw");
        element.replaceChild(newNode2, element.childNodes[1]);
        newNode2.addEventListener("click", turnLight);
    }

}

function hamburger() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
    } else {
        navLinks.classList.add("active");
    }
}

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId); // Find the target section
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll
        }
    });
});
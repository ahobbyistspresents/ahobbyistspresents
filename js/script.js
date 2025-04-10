document.addEventListener("DOMContentLoaded", function() {
    // Load Header and Footer
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header-placeholder").innerHTML = data);
    
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);

    // Mobile Menu Toggle
    setTimeout(() => {
        document.querySelector(".hamburger").addEventListener("click", function() {
            document.querySelector(".nav-links").classList.add("show");

            // find all the items on the page with the 'nav-item class and save them as a variable
            const navItems = document.getElementsByClassName("nav-item")

            // go over each item, and add the top-padding class
            for (let i = 0; i < navItems.length; i++) {
                navItems[i].classList.add("top-padding");
            }
        });
    }, 500);
});

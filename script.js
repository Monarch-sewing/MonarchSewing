function sendToServices() {
    var query = prompt("What service are you looking for?");
    if (query != null && query !== "") {
        window.location.href = "services.html?find=" + encodeURIComponent(query);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // 1. Get the current URL path
    const currentLocation = window.location.pathname;
    
    // 2. Get all the links inside your nav
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        // 3. Remove the dot and slash to compare names easily
        const linkPath = link.getAttribute('href');

        // 4. Check if the current URL ends with the link path (e.g. index.html)
        if (currentLocation.endsWith(linkPath)) {
            link.classList.add('active');
        }
        
        // Special Case: If user is at "yoursite.com/" (root), highlight Home
        if (currentLocation === "/" && linkPath === "index.html") {
            link.classList.add('active');
        }
    });
});

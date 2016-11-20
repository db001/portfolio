function dropLinks() {
    document.getElementById("navDropdown").classList.toggle("show");
}

var project = document.querySelector("#myProjects");

window.onscroll = function() {
    var position = project.getBoundingClientRect();
    var top = position.top - 120;
    var navbar = document.getElementsByTagName("nav")[0]
    if (top < 0) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, " + Math.abs(top / 100) + ")";
    };
}

window.onscroll();
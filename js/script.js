// Open the navbar
function openNav() {
    document.getElementById("hdr-nav").style.width = "100%";
}

// Close the navbar
function closeNav() {
    document.getElementById("hdr-nav").style.width = "0%";
}

// Close navbar when any link is clicked
document.querySelectorAll('#hdr-nav .navbar-content a').forEach(link => {
    link.addEventListener('click', closeNav);
});

//zoom in/out the nav bar when scroll
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("header").style.padding = "10px 50px";
        document.getElementById("header").style.transition = " 0.4s";
        document.getElementById("header").style.background = "#fff";
        document.getElementById("header").style.boxShadow = "1px -1px 20px rgb(0 0 0)";
    } else {
        document.getElementById("header").style.padding = "80px";
        document.getElementById("header").style.background = "#ffffff00";
        document.getElementById("header").style.boxShadow = "none";
    }
}

// profile sub nav bar
function openPage(pageName, elmnt) {

    if (pageName === 'secret') {
        showSweetAlert();
        return;
    }

    var i, tabcontent, navBtns;

    // Get all elements with class "tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    navBtns = document.getElementsByClassName("nav-btn");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active"); // Remove active class
        navBtns[i].classList.remove("active");
    }

    // Show the selected tab
    var targetTab = document.getElementById(pageName);
    targetTab.classList.add("active");
    elmnt.classList.add("active");
}

// Automatically open the default tab on page load
document.getElementById("defaultOpen").click();

//alert messege
function showSweetAlert() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You can not enter this section.!"
    });
}
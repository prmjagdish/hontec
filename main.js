// JavaScript for handling tab switching
function openTech(event, techName) {
    var i, techContent, tablinks;

    // Hide all tech content sections
    techContent = document.getElementsByClassName("tech-content");
    for (i = 0; i < techContent.length; i++) {
        techContent[i].style.display = "none";
        techContent[i].classList.remove("active");
    }

    // Remove the 'active' class from all tab links
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the clicked tab's content and add 'active' class
    document.getElementById(techName).style.display = "flex";
    document.getElementById(techName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Default to showing the first tab
document.getElementsByClassName("tablink")[0].click();







// Tab functionality
function openProcess(evt, processName) {
    var i, processContent, tablink_a;

    // Hide all process contents
    processContent = document.getElementsByClassName("process-content");
    for (i = 0; i < processContent.length; i++) {
        processContent[i].style.display = "none";
    }

    // Remove active class from all tabs
    tablink_a = document.getElementsByClassName("tablink-a");
    for (i = 0; i < tablink_a.length; i++) {
        tablink_a[i].className = tablink_a[i].className.replace(" active", "");
    }

    // Show the selected tab's content and add the active class to the clicked tab
    document.getElementById(processName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Display the first tab by default
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tablink-a').click();
});




const container = document.querySelector('.scrollable-container');
const itemWidth = document.querySelector('.portfolio-item').offsetWidth + 20; // Including margin

document.querySelector('.left-arrow').addEventListener('click', () => {
    container.scrollLeft -= itemWidth;
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    container.scrollLeft += itemWidth;
});

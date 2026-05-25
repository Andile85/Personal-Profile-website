document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("sidebarToggle");
    const sidenav = document.querySelector(".sidenav"); // Selects your sidebar container

    if (toggleBtn && sidenav) {
        toggleBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            sidenav.classList.toggle("show-sidenav");
        });

        // Optional: Closes the sidebar when clicking anywhere on the main body content
        document.addEventListener("click", function(e) {
            if (!sidenav.contains(e.target) && sidenav.classList.contains("show-sidenav")) {
                sidenav.classList.remove("show-sidenav");
            }
        });
    }
});
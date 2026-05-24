document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("sidebarToggle");
    const sidebar = document.getElementById("sidebar");

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener("click", function(e) {
            // Stop click from instantly propagating 
            e.stopPropagation();
            sidebar.classList.toggle("show-sidebar");
        });

        // Optional: Close sidebar if user clicks anywhere outside of it
        document.addEventListener("click", function(e) {
            if (!sidebar.contains(e.target) && sidebar.classList.contains("show-sidebar")) {
                sidebar.classList.remove("show-sidebar");
            }
        });
    }
});
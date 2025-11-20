document.addEventListener("DOMContentLoaded", function () {
    const navSearchBox = document.getElementById("navSearchBox");

    if (navSearchBox) {
        navSearchBox.addEventListener("keyup", function (event) {
            const searchText = navSearchBox.value.trim();

            // We only redirect when the user types text and hits the ENTER key
            if (event.key === 'Enter' && searchText.length > 0) {
                // Redirects to recipe.html and adds the search term to the URL
                window.location.href = `recipe.html?search=${encodeURIComponent(searchText)}`;
            }
        });
    }
    
    // Cleanup: If you had an old search box on index.html, it's not needed now.
    // The search on the homepage only needs to redirect.
});
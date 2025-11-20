document.addEventListener("DOMContentLoaded", function () {
    // We target the search box in the navbar
    const navSearchBox = document.getElementById("navSearchBox");
    const recipes = document.querySelectorAll(".recipe-card");

    // This is the core function that hides/shows recipe cards
    function filterRecipeCards(searchTerm) {
        const filter = searchTerm.toLowerCase();

        recipes.forEach(recipe => {
            // We use innerText to check the title, ingredients, and steps for the search term
            const text = recipe.innerText.toLowerCase();
            
            // Show if the text includes the filter, otherwise hide
            recipe.style.display = text.includes(filter) ? "block" : "none";
        });
    }
    
    // --- 1. Handle Search from the URL (After Redirection) ---
    const urlParams = new URLSearchParams(window.location.search);
    const initialSearch = urlParams.get('search'); // Looks for ?search=...

    if (initialSearch) {
        // If a search term exists in the URL, apply it immediately
        filterRecipeCards(initialSearch); 
        
        // Also place the term back into the search box
        if (navSearchBox) {
            navSearchBox.value = initialSearch;
        }
    }


    // --- 2. Handle Live Typing (User is on the recipe page) ---
    if (navSearchBox) {
        navSearchBox.addEventListener("keyup", function () {
            filterRecipeCards(navSearchBox.value);
        });
    }
});
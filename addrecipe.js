
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("recipeForm");
  const recipesContainer = document.getElementById("recipesContainer");

  // Check if the form exists to prevent errors
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Stop the page from refreshing

      // 1. Get the values from the form
      const chefName = document.getElementById("name").value;
      const recipeTitle = document.getElementById("recipe").value;
      const cookingTime = document.getElementById("time").value;
      const difficulty = document.getElementById("difficulty").value;
      const ingredients = document.getElementById("ingredients").value;
      const steps = document.getElementById("steps").value;

      // 2. Handle the Image (Create a fake URL for the uploaded file)
      const imageInput = document.getElementById("image");
      let imageUrl = "img/img1.jpeg"; // Default backup image if none uploaded
      if (imageInput.files && imageInput.files[0]) {
        imageUrl = URL.createObjectURL(imageInput.files[0]);
      }

      // 3. Create the HTML for the new card
      const newCard = document.createElement("article");
      newCard.classList.add("recipe-card"); // Reuse your existing CSS class
      
      // Apply a slide-in animation style
      newCard.style.animation = "fadeIn 0.5s ease-in-out";

      newCard.innerHTML = `
        <img src="${imageUrl}" alt="${recipeTitle}" style="width:100%; height:200px; object-fit:cover; border-radius:12px;">
        <h2>${recipeTitle}</h2>
        <p style="color:#555; font-size:0.9rem;">👤 <strong>Chef:</strong> ${chefName} | ⏱️ ${cookingTime} mins | 📊 ${difficulty}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 10px 0;">
        
        <h3>Ingredients:</h3>
        <p>${ingredients}</p>

        <h3>Steps:</h3>
        <p>${steps}</p>
        
        <button class="delete-btn" style="background:#e74c3c; color:white; border:none; padding:8px 15px; border-radius:5px; margin-top:15px; cursor:pointer;">Delete Recipe</button>
      `;

      // 4. Add functionality to the delete button
      newCard.querySelector(".delete-btn").addEventListener("click", function() {
        if(confirm("Are you sure you want to delete this recipe?")) {
            newCard.remove();
        }
      });

      // 5. Add the new card to the page
      recipesContainer.prepend(newCard); // "prepend" puts it at the top

      // 6. Clear the form and show success
      form.reset();
      alert("✅ Success! Your recipe has been added to the list.");
    });
  }
});
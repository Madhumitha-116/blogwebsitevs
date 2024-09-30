// JavaScript code to filter the posts and apply full-page layout for the selected category
document.addEventListener("DOMContentLoaded", () => {
    // Get all filter items and post boxes
    const filterItems = document.querySelectorAll(".filter-item");
    const postBoxes = document.querySelectorAll(".post-box");
    const postContainer = document.querySelector(".postcontainer");
  
    // Loop through each filter item and add a click event listener
    filterItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Remove active class from all filter items
        filterItems.forEach((el) => el.classList.remove("active-filter"));
  
        // Add active class to the clicked filter item
        item.classList.add("active-filter");
  
        // Get the filter category from the clicked item
        const filterCategory = item.getAttribute("data-filter");
  
        // Loop through all post boxes
        postBoxes.forEach((post) => {
          post.classList.remove("highlight-post");
  
          // If the filter is 'all', show all posts in grid format
          if (filterCategory === "all") {
            postContainer.classList.remove("full-width"); // Reset to grid
            post.style.display = "block";
          } else {
            // If the post category matches the filter, show the post in full width, otherwise hide it
            if (post.classList.contains(filterCategory)) {
              post.style.display = "block";
              post.classList.add("highlight-post"); // Add highlighting class
              postContainer.classList.add("full-width"); // Set full-width layout
            } else {
              post.style.display = "none";
            }
          }
        });
      });
    });
  });
  // JavaScript for showing and hiding the login form
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector(".login");
    const loginFormContainer = document.getElementById("loginFormContainer");
    const closeFormBtn = document.getElementById("closeForm");

    // Show the login form when login button is clicked
    loginBtn.addEventListener("click", () => {
        loginFormContainer.style.display = "flex";
    });

    // Hide the login form when cancel button is clicked
    closeFormBtn.addEventListener("click", () => {
        loginFormContainer.style.display = "none";
    });

    // Optionally, handle form submission (you can add more logic here for actual login)
    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault();
        // Logic for handling login, e.g., checking credentials
        alert("Login successful!");
        loginFormContainer.style.display = "none"; // Hide the form on successful login
    });
});

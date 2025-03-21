// Sample data for actors
const actors = [
    { id: 1, name: "Vijay", image: "C:/Users/DELL/Desktop/jeya/1.jpg" },
    { id: 2, name: "Ram Charan", image: "C:/Users/DELL/Desktop/jeya/2.jpg" },
    { id: 3, name: "Suriya", image: "C:/Users/DELL/Desktop/jeya/3.jpg" },
    // Add more actors here if needed
  ];
  
  // Retrieve favorited actors from localStorage
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
  // Function to render the actor list
  function renderActorList() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
      <h1>Actor List</h1>
      <div class="actor-list">
        ${actors.map(actor => `
          <div class="actor-card" data-id="${actor.id}">
            <img src="${actor.image}" alt="${actor.name}" />
            <h3>${actor.name}</h3>
            <button class="favorite-button" onclick="toggleFavorite(${actor.id})">
              ${favorites.some(fav => fav.id === actor.id) ? '❤️' : '🤍'}
            </button>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // Function to render the favorite actors page
  function renderFavoriteActors() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
      <h1>Favorite Actors</h1>
      <div class="actors-grid">
        ${favorites.length > 0 ? favorites.map(actor => `
          <div class="actor-card">
            <img src="${actor.image}" alt="${actor.name}" />
            <h3>${actor.name}</h3>
          </div>
        `).join('') : '<p>No favorite actors yet.</p>'}
      </div>
    `;
  }
  
  // Function to toggle favorite status for an actor
  function toggleFavorite(actorId) {
    const actor = actors.find(actor => actor.id === actorId);
    
    if (favorites.some(fav => fav.id === actorId)) {
      favorites = favorites.filter(fav => fav.id !== actorId);
    } else {
      favorites.push(actor);
    }
    
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderActorList(); // Re-render the actor list to update the button
  }
  
  // Event listeners for navigation links
  document.getElementById("homeLink").addEventListener("click", function() {
    renderActorList();
  });
  
  document.getElementById("favoritesLink").addEventListener("click", function() {
    renderFavoriteActors();
  });
  
  // Initial render (default is the actor list page)
  renderActorList();
  
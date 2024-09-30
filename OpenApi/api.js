const url = "https://api.sampleapis.com/coffee/hot";

async function fetchMenu() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Fetched data:', data); 

    // Limiting 3 items
    const limitedItems = data.slice(0, 3);
    displayMenuItems(limitedItems);
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }
}

// Function to display coffee menu items
function displayMenuItems(menuItems) {
  const menuSection = document.getElementById('menu');
  menuSection.innerHTML = '<h2> Menu </h2>';

  menuItems.forEach(item => {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menu-item');

    menuItemDiv.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <p><strong>$${item.price || '4'}</strong></p>
    `;

    menuSection.appendChild(menuItemDiv);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchMenu();
});

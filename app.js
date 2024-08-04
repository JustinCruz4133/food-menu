document.addEventListener('DOMContentLoaded', () => {
  // Define your menu items
  const menu = [
    { name: 'Spaghetti', price: 10.99, image: 'images/spaghetti.jpg' },
    { name: 'Salad', price: 5.99, image: 'images/salad.jpg' },
    { name: 'Pizza', price: 8.99, image: 'images/pizza.jpg' },
    { name: 'Burger', price: 12.99, image: 'images/burger.jpg' },
    { name: 'Sushi', price: 15.99, image: 'images/sushi.jpg' },
    { name: 'Tacos', price: 9.99, image: 'images/tacos.jpg' },
    { name: 'Pasta', price: 11.99, image: 'images/pasta.jpg' },
    { name: 'Steak', price: 22.99, image: 'images/steak.jpg' },
    { name: 'Chicken', price: 14.99, image: 'images/chicken.jpg' },
    { name: 'Fries', price: 3.99, image: 'images/fries.jpg' }
    // Add more items as needed
  ];

  const menuDiv = document.getElementById('menu');
  const itemSelector = document.getElementById('item-selector');
  
  // Populate the select dropdown
  menu.forEach((item, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = item.name;
    itemSelector.appendChild(option);
  });

  // Function to display selected menu items
  function displaySelectedItems(selectedIndices) {
    menuDiv.innerHTML = ''; // Clear existing items
    selectedIndices.forEach(index => {
      const item = menu[index];
      const itemDiv = document.createElement('div');
      itemDiv.className = 'menu-item';
      itemDiv.innerHTML = `<h2>${item.name}</h2><p>Price: $${item.price}</p><img src="${item.image}" alt="${item.name}">`;
      menuDiv.appendChild(itemDiv);
    });
  }

  // Handle form submission
  document.getElementById('menu-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    
    // Get selected options
    const selectedOptions = Array.from(itemSelector.selectedOptions);
    const selectedIndices = selectedOptions.map(option => parseInt(option.value));

    // Display selected menu items
    displaySelectedItems(selectedIndices);
  });
});

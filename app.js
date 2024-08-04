document.addEventListener('DOMContentLoaded', () => {
  const menu = [
    { name: 'Spaghetti', price: 10.99, image: 'images/spaghetti.jpg' },
    { name: 'Salad', price: 5.99, image: 'images/salad.jpg' },
    { name: 'Pizza', price: 8.99, image: 'images/pizza.jpg' }
  ];

  const menuDiv = document.getElementById('menu');
  menu.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'menu-item';
    itemDiv.innerHTML = `<h2>${item.name}</h2><p>Price: $${item.price}</p><img src="${item.image}" alt="${item.name}">`;
    menuDiv.appendChild(itemDiv);
  });
});

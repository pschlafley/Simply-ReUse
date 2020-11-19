const Category = require('../../models/Category');

async function categorySearch(event) {
    event.preventDefault();
  
    const category = document.querySelector('#category-text').value.trim();

    const response = await fetch(`/api/categories/${category}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
    });

    // check the response status
    if (response.ok) {
    console.log(`${category}`);
    } else {
    alert(response.statusText);
    }
};
  
document.querySelector('.category-form').addEventListener('submit', categorySearch);

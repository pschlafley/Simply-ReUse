const categoryItems = document.querySelector('#category-items');
function capitalize(str) {
    const category = document.querySelector('#category-text').value.trim();
    str = category
    let title = '<h2 class="category-title">' + str.charAt(0).toUpperCase() + str.slice(1) + '</h2>';
    $("#category-items").append(title);
};

async function categorySearch(event) {
    event.preventDefault();
    const category = document.querySelector('#category-text').value.trim();
    const response = await fetch(`/api/categories/${category}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        categoryItems.innerHTML = "";
        response.json().then(data => {
            if(data.items) {
                capitalize();
            }
            for (let i = 0; i < data.items.length; i++) {
                let item  = '<li>' + data.items[i].item_name + '</li>'
                $("#category-items").append(item);
            }
        });
    };
};

document.querySelector('.category-form').addEventListener('submit', categorySearch);
const categoryItems = document.querySelector('#category-items');

function printCategoryName(categoryName) {
    let title = '<h2 class="category-title">' + categoryName + '</h2>';
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
            if(data.category_name) {
                printCategoryName(data.category_name);
            }
            for (let i = 0; i < data.items.length; i++) {
                let item  = '<li>' + data.items[i].item_name + '</li>'
                $("#category-items").append(item);
            }
        });
    };
};

document.querySelector('.category-form').addEventListener('submit', categorySearch);
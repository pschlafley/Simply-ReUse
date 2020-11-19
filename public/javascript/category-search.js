async function categorySearch(event) {
    event.preventDefault();
  
    const category = document.querySelector('#category-text').value.trim();

    const response = await fetch(`/api/categories/${category}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        response.json().then(data => {
            for (let i = 0; i < data.items.length; i++) {
                // let title = '<h5 class="card-title">' + 'Recyclable Items' + '</h5>'
                let item  = '<li>' + data.items[i].item_name + '</li>'
                // console.log(data.items[i]);
                // need to append the item to page in the list from recycle.handlebars
                // $("#category-items").append(title);
                $("#category-items").append(item);

            }
        });
    };    
};

document.querySelector('.category-form').addEventListener('submit', categorySearch);

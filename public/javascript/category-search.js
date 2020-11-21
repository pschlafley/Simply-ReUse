const searcher = new FuzzySearch(<haystack>, [keys], [options]);
const result = searcher.search(<needle>);

// This can be excluded when loaded via <script>
import FuzzySearch from 'fuzzy-search'; // Or: var FuzzySearch = require('fuzzy-search');

const cat = [{
  category-text: { }

{/* const people = [{
  name: {
    firstName: 'Jesse',
    lastName: 'Bowen',
  },
  state: 'Seattle', */}
}];
 
{/* const searcher = new FuzzySearch(people, ['name.firstName', 'state'], { */}
const searcher = new FuzzySearch(categories, ['categories.categorySearch'], {
  caseSensitive: true,
});
const result = searcher.search('ess');


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

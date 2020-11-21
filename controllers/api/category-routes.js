const router = require('express').Router();
const { Items, Category } = require('../../models');
const Fuse = require('fuse.js');

const categoryData = [
    {
      category_name: 'Automotive'
    },
    {
      category_name: 'Construction'
    },
    {
      category_name: 'Electronics'
    },
    {
      category_name: 'Glass'
    },
    {
      category_name: 'Metal'
    },
    {
      category_name: 'Paper'
    },
    {
      category_name: 'Plastic'
    },
    {
      category_name: 'Hazardous'
    },
    {
      category_name: 'Organic Waste'
    },
    {
      category_name: 'Household'
    },
    {
      category_name: 'Holiday'
    },
    {
      category_name: 'Packaging'
    }
  ];

const fuzzySearch = function(pattern) {
    const options = {
        isCaseSensitive: false,
        includeScore: false,
        shouldSort: true,
        includeMatches: false,
        findAllMatches: false,
        minMatchCharLength: 1,
        location: 0,
        threshold: 0.6,
        distance: 100,
        useExtendedSearch: false,
        ignoreLocation: false,
        ignoreFieldNorm: false,
        keys: [
            "category_name"
        ]
    };
    const fuse = new Fuse(categoryData, options);
    return fuse.search(pattern);
};  

router.get('/', (req, res) => {
    Category.findAll({
        attributes: [
            'id',
            'category_name'
        ],
        include: [{
            model: Items,
            attributes: ['item_name']
        }]
    })   
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/:categories', (req, res) => {
    const search = fuzzySearch(req.params.categories)
    const searchResult = search[0].item.category_name
    Category.findOne({
        where: {
            category_name: searchResult
        },
        attributes: [
            'id',
            'category_name'
        ],
        include: [{
            model: Items,
            attributes: ['item_name']
        }]
    })
    .then(dbCategoryData => {
        res.json(dbCategoryData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;
const router = require('express').Router();
const { Items, Category } = require('../../models');

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
    .then(dbItemsData => res.json(dbItemsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;
const router = require('express').Router();
const { Items, Category } = require('../../models');

router.get('/', (req, res) => {
    Items.findAll({
        attributes: [
            'id',
            'item_name',
            'category_id'
        ],
        include: [
            {
                model: Category,
                attributes: [
                    'category_name'
                ]
            }
        ]
    })   
    .then(dbItemsData => res.json(dbItemsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;
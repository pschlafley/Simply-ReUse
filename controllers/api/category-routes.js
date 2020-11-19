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
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// router.get('/:id', (req, res) => {
//     Category.findOne({
//         where: {
//             id: req.params.id
//         },
//         attributes: [
//             'id',
//             'category_name'
//         ],
//         include: [{
//             model: Items,
//             attributes: ['item_name']
//         }]
//     })
//     .then(dbCategoryData => {
//         if(!dbCategoryData){
//             res.status(404).json({ message: 'No Category found with that id' });
//             return;
//         }
//         res.json(dbCategoryData)
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// });

router.get('/:category', (req, res) => {
    Category.findOne({
        where: {
            category_name: req.params.category
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
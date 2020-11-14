const router = require('express').Router();
const { Items, Category } = require('../../models');

router.get('/', (req, res) => {
    Items.findAll({})
    .then(dbItemsData => {
        if(!dbItemsData){
            res.status(404).json({ message: 'No Items found' });
            return;
        }
        res.json(dbItemsData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
    Items.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbItemsData => {
        if(!dbItemsData){
            res.status(404).json({ message: 'No Item found' });
            return;
        }
        res.json(dbItemsData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    Items.create({
        item_name: req.body.item_name
    })
    .then(dbItemsData => res.json(dbItemsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.put('/:id', (req, res) => {
    Items.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbItemsData => res.json(dbItemsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.delete('/:id', (req, res) => {
    Items.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbItemsData => {
        if (!dbItemsData) {
            res.status(404).json({ message: 'No Items found with this id' });
            return;
        }
        res.json(dbItemsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
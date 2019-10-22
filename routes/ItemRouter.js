var express = require('express');
var router = express.Router();
var todoController = require('../controllers/TodoController');


var TodoItem = require('../models/TodoItem');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'To Do App'});
});

router.get('/list', todoController.listItems);
router.get('/find', todoController.findItem);

router.post('/create', todoController.createItem);

router.post('/update', todoController.updateItem);

module.exports = router;

var express = require('express');
var TodoItem = require('../models/TodoItem');

var listItems = function (req, res, next) {
    console.log("wıeuthw")
    TodoItem.find(function (err, result) {
        if (err) return next(err);
        res.send(result);
    })
};

var createItem = function (req, res, next) {

    TodoItem.create(req.body, function (err, result) {
        if (err) return next(err);
        res.send(result);
    })
};

var findItem = function (req, res, next) {

    TodoItem.find({name: req.param("name")}, function (err, result) {
        if (err) return next(err);
        res.send(result);
    })
};

var updateItem = function(req, res, next) {

    TodoItem.update(req.body, {completed: true}, function (err, result) {
        if (err) return next(err);
        res.send(result);
    })
};


exports.listItems = listItems;
exports.createItem = createItem;
exports.findItem = findItem;
exports.updateItem = updateItem;

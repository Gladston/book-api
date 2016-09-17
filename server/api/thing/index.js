'use strict';

var express = require('express');
var controller = require('./thing.controller');
var bodyParser = require('body-parser');

var router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/', controller.index);

router.get('/:id', controller.get);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;

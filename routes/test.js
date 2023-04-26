const routes = require('express').Router();
const test = require('../controllers/test');

routes.get('/', test.helloRoute);
routes.get('/general', test.kenobiRoute);

module.exports = routes;
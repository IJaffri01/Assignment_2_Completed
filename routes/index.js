var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});
//get aboutme page
router.get('/aboutme', function(req, res, next) {
  res.render('index', { title: 'About Me Page' });
});
//get projects page
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects Page' });
});
//get contact page
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me Page' });
});
module.exports = router;

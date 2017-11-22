var express = require('express');
var router = express.Router();

var userCount = 0;
var dbHelper = require('../public/javascripts/dbhelper.js');





/* GET home page. */
router.get('/', function(req, res, next) {
    
  res.render('index', { title: 'pouchDB'});

});

/* post to home page. */
router.post('/', function(req, res, next) {
    userCount++;

    var result = dbHelper.create(req.body.email, req.body.contactReason, req.body.comment);

    var allDocs = dbHelper.readAll();

    res.render('index', { 
        title: 'pouchDB', 
        count: userCount,
        Docs: allDocs
    });

    //console.log(req.body);
    //console.log(allDocs);
    //console.log('hello');

});

router.get("/all", function(req, res) {
    
    dbHelper.readAll().then(function(response){
        console.log(response);
            res.send(response);

    }, function(error) {
  console.error("Failed!", error);
});
});
module.exports = router;
var express = require('express');
var router = express.Router();
var PouchDB = require('pouchdb');
var database = new PouchDB('http://localhost:5984/test_db');
var userCount = 0;





/* GET home page. */
router.get('/', function(req, res, next) {
    
  res.render('index', { title: 'pouchDB'});

});

/* post to home page. */
router.post('/', function(req, res, next) {
    userCount++;
    res.render('index', { title: 'pouchDB', count: userCount });
    console.log(req.body);
});

router.get("/all", function(req, res) {
    database.allDocs({include_docs: true}).then(function(result) {
        res.send(result.rows.map(function(item) {
            return item.doc;
        }));
    }, function(error) {
        res.status(400).send(error);
    });
});
module.exports = router;
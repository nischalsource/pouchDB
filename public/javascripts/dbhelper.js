var PouchDB = require('pouchdb');
var remoteDB = new PouchDB('http://localhost:5984/feedback');


var localDB_Singleton = (function () {
    var instance;
 
    function createInstance() {
        var localDB = new PouchDB('feedback');
        return localDB;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();


function create(email, contactReason, comment){

    localDB_Singleton.getInstance().put({
    _id: (Math.round((new Date()).getTime() / 1000)).toString(),
    email: email,
    reason: contactReason,
    comment: comment
}).then(function (response) {
    
    console.log(response);
    return response;

    }).catch(function (err) {
    console.log(err);
});
}


function readAll(){

return new Promise((resolve, reject) => {
    
    localDB_Singleton.getInstance().allDocs({
         include_docs: true
        }).then(function(result) {

         all = result.rows.map(function(item) {
            return(item.doc);
        });
        resolve(all);
        //console.log(all);

    }, function(error) {
        reject(error);
    });   


});

   
 return all;
}


module.exports = {create, readAll};
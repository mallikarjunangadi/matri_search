var data = require('./profiles');
var dbconfig = require('../dbconfig/db')

module.exports = function(app, db, dirname) {
    console.log(data);
    app.post('/addMembers', function(req, res) {
        db.collection(dbconfig.collectionName).insert(data, function(err, result) {
            if(err) {
                console.log(err);
                return;
            } 
            res.send({"message":"added successfully", "done":"true"});
        })
    })

    app.get('/getMembersByFilter', function(req, res) {
        var details = req.query;
        db.collection(dbconfig.collectionName).find(details).toArray(function(err, result) {
            if(err) {
                console.log(err);
                return;
            }
            res.send({"message":"successfully fetched", done:true, "data":result})
        }) 
    })

    app.get('*', function(req, res) {
        res.sendFile(dirname+'/public/index.html')
    })
}


module.exports = function(app, db, dirname) {
    app.post('/addMembers', function(req, res) {
      
    })

    app.get('*', function(req, res) {
        res.sendFile(dirname+'/index.html')
    })
}
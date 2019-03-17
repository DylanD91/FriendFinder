// Friends Data
let friendsData = require('../data/friends');

module.exports = function(app){
    //direct the user to json data we have
    app.get('/api/friends',function(req,res){
        res.json(friendsData);
    })
}; 

// Update Data with Post
app.post("/api/friends", function (req, res){
    console.log('friend post data',req.body);
    // Declare a variable for our best match
    let bestMatch = {
        "name": "",
        "photo": "",
        "difference": Infinity
    };
})

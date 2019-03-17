// Load data 
var friendsData = require("../data/friends");
var arraySort = require('array-sort');

//Routing
module.exports = function (app) {

    //API GET request
  app.get("/api/Friends", function (req, res) {
        res.json(friendsData)
    });

    // API POST Requests
    app.post("/api/friends", function (req, res) {

        // request body store in one variable
        var userinputdata = (req.body);

      
        // for loop for frinddata and userdata
        var results = 0;
        var scoretotaldiff = [];
        for (var i = 0; i < friendsData.length; i++) {
            results = 0;
            for (var j = 0; j < 10; j++) {
                results += Math.abs(userinputdata.scores[j] - friendsData[i].scores[j]);
            }
            scoretotaldiff.push({ name: friendsData[i].name, photo: friendsData[i].photo, score: Math.abs(results) });
        }

        arraySort(scoretotaldiff, 'score');
     

        // data push in friend.js file
        friendsData.push(req.body);
        
        // return data in survey.html 
        return res.json(scoretotaldiff[0]);
    });
}
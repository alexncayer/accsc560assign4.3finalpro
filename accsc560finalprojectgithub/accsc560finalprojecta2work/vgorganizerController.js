//vgorganizerController.js down below
//Purpose here is to handle many different requests.

//Imports the Vgorganizer Model
Vgorganizer = require('./vgorganizerModel');

//For index

exports.index = function (req, res) {
    Vgorganizer.get(function (err, vgorganizer) {
        if(err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Vgorganizer Successfully!",
            data: vgorganizer
        });
    });
};

//For creating new Vgorganizer bio on specific game.
exports.add = function(req, res) {
    var vgorganizer = new Vgorganizer();
    vgorganizer.name = req.body.name? req.body.name: vgorganizer.name;
    vgorganizer.system = req.body.system;
    vgorganizer.publisher = req.body.publisher;
    vgorganizer.eshopUSApriceindollars = req.body.eshopUSApriceindollars;
    vgorganizer.rating = req.body.rating;
    vgorganizer.owngame = req.body.owngame;
    vgorganizer.beatmainstory = req.body.beatmainstory;
    vgorganizer.unitssoldtotal = req.body.unitssoldtotal;
    vgorganizer.releaseyear = req.body.releaseyear;
    vgorganizer.personalratingoutoften = req.body.personalratingoutoften;

    //Saves new game bio and then checks to see if any error happened
    vgorganizer.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: "New Vgorganizer bio on Game Added!",
            data: vgorganizer
        });
    });


};

//View Vgorganizer bio based on Id, which can help identify each game within an array list.
exports.view = function(req, res) {
    Vgorganizer.findById(req.params.vgorganizer_id, function (err, vgorganizer) {
        if(err)
            res.send(err);
        res.json({
            message: "Vgorganizer Details on Game",
            data: vgorganizer
        });
    });
};

//Updates Vgorganizer
exports.update = function(req, res) {
    Vgorganizer.findById(req.params.vgorganizer_id, function(err, vgorganizer) {
        if(err) 
            res.send(err);
        vgorganizer.name = req.body.name ? req.body.name : vgorganizer.name;
        vgorganizer.system = req.body.system;
        vgorganizer.publisher = req.body.publisher;
        vgorganizer.eshopUSApriceindollars = req.body.eshopUSApriceindollars;
        vgorganizer.rating = req.body.rating;
        vgorganizer.owngame = req.body.owngame;
        vgorganizer.beatmainstory = req.body.beatmainstory;
        vgorganizer.unitssoldtotal = req.body.unitssoldtotal;
        vgorganizer.releaseyear = req.body.releaseyear;
        vgorganizer.personalratingoutoften = req.body.personalratingoutoften;

        //Save Vgorganizer game changes and checks if any errors happened.
        vgorganizer.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Vgorganizer on Game Updated Successfully",
                data: vgorganizer
            });
        });
    });
};

//Deletes or removes Vgorganizer regarding specific game.
exports.delete = function (req, res) {
    Vgorganizer.deleteOne({
        _id: req.params.vgorganizer_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Vgorganizer on this specific Game Deleted'
        })
    })
}

//routes.js of accsc560projecta2 down below

//Allows for the API to test itself.

//sets up the router
let router = require('express').Router();

//Creates normal API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to AC CSC560 Final Project API'
    });
});

//Utilizes the Vgorganizer Controller to help with routing
var vgorganizerController = require('./vgorganizerController');

//Vgorganizer routes
router.route('/vgorganizer')
    .get(vgorganizerController.index)
    .post(vgorganizerController.add);

router.route('/vgorganizer/:vgorganizer_id')
    .get(vgorganizerController.view)
    .patch(vgorganizerController.update)
    .put(vgorganizerController.update)
    .delete(vgorganizerController.delete);

//Exports API router
module.exports = router;
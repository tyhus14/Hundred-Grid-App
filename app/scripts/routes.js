var MainRouter = Backbone.Router.extend({

    routes: {
        'board': 'Quickstart',
    },

    initialize: function() {
        console.log('Hey guys, a router is born!')
    },

    Quickstart: function(id) {

        new GameView();
        fastleague = new Quickleague();

        fastleague.save(null, {
            success: function(fastleague) {
                // Execute any logic that should take place after the object is saved.
                id = fastleague.id
                console.log(id)
            },
            error: function(fastleague, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and description.
                alert('Failed to create new object, with error code: ' + error.description);
            }
        });
    },

});
var MainRouter = Backbone.Router.extend({

    routes: {
        'board': 'Start',
        'board/:id': 'Quickstart'
    },

    initialize: function() {
        console.log('router is born!')
    },

    Start: function() {
        new PlayView();
        fastleague = new Quickleague();
        fastleague.save(null, {
            success: function(fastleague) {
                // Execute any logic that should take place after the object is saved.
                window.id = this.fastleague.id
                console.log(id)
                console.log(fastleague.get('boxes'))

            },
            error: function(fastleague, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and description.
                alert('Failed to create new object, with error code: ' + error.description);
            }
        });
    },

    Quickstart: function(id) {

        // var quickLeagueQuery = new Parse.Query(Quickleague);
        // quickLeagueQuery.get(id, {
        //     success: function() {
        //         console.log(id)
        //     },
        // })
    }
});
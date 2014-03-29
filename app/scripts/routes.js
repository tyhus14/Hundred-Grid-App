var MainRouter = Backbone.Router.extend({

    routes: {
        'board': 'Start',
        'board/:id': 'loadGame'
    },

    initialize: function() {
        console.log('router is born!')
    },

    Start: function() {
        new PlayView();
        fastleague = new QuickLeague();
        fastleague.save(null, {
            success: function(fastleague) {
                // Execute any logic that should take place after the object is saved.
                window.id = this.fastleague.id
                console.log(id)

            },
            error: function(fastleague, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and description.
                alert('Failed to create new object, with error code: ' + error.description);
            }
        });
    },

    loadGame: function(id) {
        window.id = id;
        var query = new Parse.Query(QuickLeague);
        query.get(id, {
            success: function(game) {
                console.log(game)
                window.objectBoxes = game.get('boxes');
                new PlayView();
                fastleague = game
                window.currentWinner = _.where(objectBoxes, {
                    score: finalScore
                });
                new GameView();
                new StartView();
                window.columnNumber = game.get('columns');
                window.rowNumber = game.get('rows');
                new visualNumbersView();
                new visualNumbersTopView();
                $("#id-" + finalScore).css("background-color", "blue");
                new WinnerView();

            },
            error: function(object, error) {
                // The object was not retrieved successfully.
                // error is a Parse.Error with an error code and description.
            }
        });
    }
});
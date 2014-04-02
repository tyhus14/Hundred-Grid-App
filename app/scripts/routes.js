var MainRouter = Backbone.Router.extend({

    routes: {
        'rules': 'Start',
        'game/:id': 'loadGame'
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
        $(".board-inside").hide();
    },

    loadGame: function(id) {
        window.id = id;
        var query = new Parse.Query(QuickLeague);
        query.get(id, {
            success: function(game) {
                console.log(game)
                // retrieves array of objects
                window.objectBoxes = game.get('boxes');
                new PlayView();
                fastleague = game

                // looks through array of objects to see where propety score is equal to score of game aka finalScore
                window.currentWinner = _.where(objectBoxes, {
                    score: window.finalScore
                });

                new numberGameView();
                $(".board-inside").show();
                new GameView();
                new StartView();
                window.columnNumber = game.get('columns');
                window.rowNumber = game.get('rows');
                new visualNumbersView();
                new visualNumbersTopView();
                $("#id-" + window.finalScore).css("background-color", "rgb(113, 160, 182)");

                // shows logos
                $(".broncos").show();
                $(".seahawks").show();
                new teamAView()
                setInterval(fetchScoreQuery, 2000)
                // new WinnerView();
            },
            error: function(object, error) {
                // The object was not retrieved successfully.
                // error is a Parse.Error with an error code and description.
            }
        });
    }
});
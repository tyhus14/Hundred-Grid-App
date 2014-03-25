var GameView = Parse.View.extend({

    className: 'gameview',

    gameTemplate: _.template($('#game-template').text()),

    events: {
        'click .logout-btn': 'LogOut',
        'click .generate-numbers': 'Generate'
    },

    initialize: function() {
        $('.board').html(this.el);
        this.render();


        _.each(objectBoxes, function(item) {
            new BoardView({
                data: item
            });

        });

    },

    render: function() {
        var gameRenderedTemplate = this.gameTemplate({
            model: this.model
        });
        this.$el.html(gameRenderedTemplate);
    },

    Generate: function() {
        new numberGameView();
        $(".board-inside").show();
        new visualNumbersView();

    },

    LogOut: function() {
        Parse.User.logOut();

        // var currentUser = Parse.User.current();
    }

});
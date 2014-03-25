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

        // var row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        // var column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        // _.each(board, function() {
        //     new BoardView();
        // })

        _.each(aArray, function(item) {
            new BoardView({
                model: item
            });
        });
        _.each(bArray, function(item) {
            new BoardView({
                model: item
            });
        });
        _.each(cArray, function(item) {
            new BoardView({
                model: item
            });
        });
        _.each(dArray, function(item) {
            new BoardView({
                model: item
            });
        });
        _.each(eArray, function(item) {
            new BoardView({
                model: item
            });
        });

        _.each(fArray, function(item) {
            new BoardView({
                model: item
            });
        });

        _.each(gArray, function(item) {
            new BoardView({
                model: item
            });
        });

        _.each(hArray, function(item) {
            new BoardView({
                model: item
            });
        });
        _.each(iArray, function(item) {
            new BoardView({
                model: item
            });
        });
        _.each(jArray, function(item) {
            new BoardView({
                model: item
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
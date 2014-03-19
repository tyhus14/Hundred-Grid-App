var GameView = Parse.View.extend({

    className: 'gameview',

    gameTemplate: _.template($('#game-template').text()),

    events: {
        'click .logout-btn': 'LogOut'
    },

    initialize: function() {
        $('.board').html(this.el);
        this.render();

        var row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        var column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

        _.each(aArray, function() {
            new BoardView();
        });
        _.each(bArray, function() {
            new BoardView();
        });
        _.each(cArray, function() {
            new BoardView();
        });
        _.each(dArray, function() {
            new BoardView();
        });
        _.each(eArray, function() {
            new BoardView();
        });
        _.each(hArray, function() {
            new BoardView();
        });
        _.each(iArray, function() {
            new BoardView();
        });
        _.each(jArray, function() {
            new BoardView();
        });
    },

    render: function() {
        var gameRenderedTemplate = this.gameTemplate({
            model: this.model
        });
        this.$el.html(gameRenderedTemplate);
    },

    LogOut: function() {
        Parse.User.logOut();

        // var currentUser = Parse.User.current();
    }

});
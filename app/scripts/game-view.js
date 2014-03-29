var GameView = Parse.View.extend({

    className: 'gameview',

    gameTemplate: _.template($('#game-template').text()),

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

});
var GameView = Parse.View.extend({

    className: '',

    gameTemplate: _.template($('#game-template').text()),

    events: {
        'click .logout-btn': 'LogOut'
    },

    initialize: function() {
        $('.jumbotron').html(this.el);
        this.render();
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
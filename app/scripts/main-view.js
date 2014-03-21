var MainView = Parse.View.extend({

    className: '',

    mainTemplate: _.template($('#main-template').text()),

    events: {
        'click .create-league-btn': 'CreateLeagueView',
        'click .signin-btn': 'CreateSigninView',
        'click .quickstart-btn': 'CreateGameView',
        'click .generate-numbers': 'Generate',
    },


    initialize: function() {
        $('.jumbotron').html(this.el);
        this.render()
    },

    render: function() {
        var mainRenderedTemplate = this.mainTemplate({
            model: this.model
        });
        this.$el.html(mainRenderedTemplate);
    },

    CreateLeagueView: function() {
        new CreateLeagueView();
    },

    CreateSigninView: function() {
        new SigninView();
    },

    CreateGameView: function() {
        new GameView();
    },

    Generate: function() {
        new numberGameView();
    }


});
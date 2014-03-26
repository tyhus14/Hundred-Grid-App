var MainView = Parse.View.extend({

    className: '',

    mainTemplate: _.template($('#main-template').text()),

    events: {
    //     'click .create-league-btn': 'CreateLeagueView',
    //     'click .signin-btn': 'CreateSigninView',
    'click .generate-numbers': 'Generate'
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

    Generate: function() {
        new numberGameView();
        $(".board-inside").show();
        new visualNumbersView();
        new visualNumbersTopView();
    },

    // CreateLeagueView: function() {
    //     new CreateLeagueView();
    // },

    // CreateSigninView: function() {
    //     new SigninView();
    // },

});
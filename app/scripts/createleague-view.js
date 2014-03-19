var CreateLeagueView = Parse.View.extend({

    className: '',

    createLeagueTemplate: _.template($('#createleague-template').text()),


    initialize: function() {
        $('.jumbotron').html(this.el);
        this.render()
    },

    render: function() {
        var createLeagueRenderedTemplate = this.createLeagueTemplate({
            model: this.model
        });
        this.$el.html(createLeagueRenderedTemplate);
    }

});
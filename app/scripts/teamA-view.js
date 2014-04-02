var teamAView = Parse.View.extend({

    className: 'teamAview',

    teamATemplate: _.template($('#teamA-template').text()),

    initialize: function() {
        $('.teamA-score').html(this.el);
        this.render();
    },

    render: function() {
        var teamARenderedTemplate = this.teamATemplate({
            model: this.model
        });
        this.$el.html(teamARenderedTemplate);
    },

});
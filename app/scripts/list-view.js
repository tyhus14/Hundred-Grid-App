var WinnerView = Parse.View.extend({

    className: 'winner',

    boxTemplate: _.template($('#winner-template').text()),

    initialize: function() {
        $('.jumbotron').html(this.el);
        this.render()
    },

    render: function() {
        var boxRenderedTemplate = this.boxTemplate({
            model: this.model
        });
        this.$el.html(boxRenderedTemplate);
    }

});
var WinnerView = Parse.View.extend({
    // this displays the winner at the top of the page
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
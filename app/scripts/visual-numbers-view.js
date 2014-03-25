var visualNumbersView = Parse.View.extend({

    className: 'visual-numbers',

    visualNumbersTemplate: _.template($('#visualNumbers-template').text()),


    initialize: function() {
        $('.row-numbers').html(this.el);
        this.render()

    },

    render: function() {
        var visualNumbersRenderedTemplate = this.visualNumbersTemplate({
            model: this.model
        });
        this.$el.html(visualNumbersRenderedTemplate);
    }

});
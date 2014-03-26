var visualNumbersTopView = Parse.View.extend({

    className: 'visual-numbers-top',

    visualNumbersTopTemplate: _.template($('#visualNumbersTop-template').text()),


    initialize: function() {
        $('.column-numbers').html(this.el);
        this.render()

    },

    render: function() {
        var visualNumbersTopRenderedTemplate = this.visualNumbersTopTemplate({
            model: this.model
        });
        this.$el.html(visualNumbersTopRenderedTemplate);
    }

});
var numberBoxView = Parse.View.extend({

    className: 'number-box',

    numberBoxTemplate: _.template($('#numberbox-template').text()),

    initialize: function() {
        $('.board-inside').append(this.el);
        this.render()
    },

    render: function() {
        var numberBoxRenderedTemplate = this.numberBoxTemplate({
            model: this.model
        });
        this.$el.html(numberBoxRenderedTemplate);
    },

});
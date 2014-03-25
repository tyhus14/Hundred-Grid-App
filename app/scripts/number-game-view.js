var numberGameView = Parse.View.extend({

    className: 'numbergameview',

    numberGameTemplate: _.template($('#numbergame-template').text()),

    initialize: function() {
        $('.board-inside').html(this.el);
        this.render();

        _.each(numbersArray, function(item) {
            new numberBoxView({
                model: item
            });
        });

    },

    render: function() {
        var numberGameRenderedTemplate = this.numberGameTemplate({
            model: this.model
        });
        this.$el.html(numberGameRenderedTemplate);
    },

});
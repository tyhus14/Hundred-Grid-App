var numberGameView = Parse.View.extend({

    className: 'numbergameview',

    numberGameTemplate: _.template($('#numbergame-template').text()),

    initialize: function() {
        $('.board-inside').html(this.el);
        this.render();

        _.each(zeroArray, function(item) {
            new numberBoxView({
                model: item
            });
        });
        _.each(oneArray, function(item) {
            new numberBoxView({
                model: item
            });
        });
        _.each(twoArray, function(item) {
            new numberBoxView({
                model: item
            });
        });
        _.each(threeArray, function(item) {
            new numberBoxView({
                model: item
            });
        });
        _.each(fourArray, function(item) {
            new numberBoxView({
                model: item
            });
        });

        _.each(fiveArray, function(item) {
            new numberBoxView({
                model: item
            });
        });

        _.each(sixArray, function(item) {
            new numberBoxView({
                model: item
            });
        });

        _.each(sevenArray, function(item) {
            new numberBoxView({
                model: item
            });
        });
        _.each(eightArray, function(item) {
            new numberBoxView({
                model: item
            });
        });
        _.each(nineArray, function(item) {
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
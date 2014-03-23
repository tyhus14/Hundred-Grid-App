var BoardView = Parse.View.extend({

    className: 'box',

    boardTemplate: _.template($('#board-template').text()),

    initialize: function() {
        $('.board').append(this.el);
        this.render()
    },

    render: function() {
        var boardRenderedTemplate = this.boardTemplate({
            model: this.model
        });
        this.$el.html(boardRenderedTemplate);
    },

});
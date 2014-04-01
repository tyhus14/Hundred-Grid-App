var BoardView = Parse.View.extend({

    className: 'box',

    boardTemplate: _.template($('#board-template').text()),

    events: {
        "blur .name-input": "addName",
    },

    initialize: function(options) {
        this.data = options.data;
        this.el.id = "id-" + this.data.score;
        $('.board').append(this.el);
        this.render()

    },

    render: function() {
        var boardRenderedTemplate = this.boardTemplate({
            data: this.data
        });
        this.$el.html(boardRenderedTemplate);
    },

    addName: function() {
        console.log('cool')
        this.data.name = this.$el.find('.name-input').val();
        console.log('this.data is', this.data)
        fastleague.save();
        allInputsFilled = _.every(objectBoxes, function(box) {
            return box.name && box.name.length
        });
        if (allInputsFilled == true) {
            $('.generate-numbers').show();
        };

    }

});
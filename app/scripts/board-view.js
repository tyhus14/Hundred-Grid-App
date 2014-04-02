var BoardView = Parse.View.extend({
    // this is the the where all 100 boxes are displayed 
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
        // this add a name property to the objects based on the what was typed into input
        this.data.name = this.$el.find('.name-input').val();
        console.log('this.data is', this.data)

        // this saves the names to appropriate spot
        fastleague.save();

        // this checks to make sure that all boxes have been villed with a name value, checks if true
        allInputsFilled = _.every(objectBoxes, function(box) {
            return box.name && box.name.length
        });

        // this shows the generate numbers button if all inputs are filled from above
        if (allInputsFilled == true) {
            $('.generate-numbers').show();
            $('.shadow').addClass('active')
        };

    }

});
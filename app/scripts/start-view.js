var StartView = Parse.View.extend({

    className: 'startview',

    startViewTemplate: _.template($('#start-view-template').text()),

    events: {
        'click .generate-numbers': 'Generate'
    },

    initialize: function() {
        $('.jumbotron').html(this.el);
        this.render()

    },

    render: function() {
        var startViewRenderedTemplate = this.startViewTemplate({
            model: this.model
        });
        this.$el.html(startViewRenderedTemplate);
    },

    Generate: function() {
        new numberGameView();
        $(".board-inside").show();

        // these views display the shuffled numbers 
        new visualNumbersView();
        new visualNumbersTopView();
        $('.shadow').removeClass('active')
        // currentWinner finds where the score property matches the score of the game
        // window.currentWinner = _.where(fastleague._previousAttributes.boxes, {
        //     score: finalScore
        // });

        // this view displays who the current winner is
        // new WinnerView();
        // fetchScoreQuery()
        // this changes the background of the box that corresponds with the correct score of the game
        // $("#id-" + finalScore).addClass("background-color", "blue");
        // setInterval(fetchScoreQuery, 1000);

    },

});
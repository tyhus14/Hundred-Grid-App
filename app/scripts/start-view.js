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
        new visualNumbersView();
        new visualNumbersTopView();
        window.currentWinner = _.where(fastleague._previousAttributes.boxes, {
            score: finalScore
        });
        new WinnerView();
        $("#id-" + finalScore).css("background-color", "blue");
    },

});
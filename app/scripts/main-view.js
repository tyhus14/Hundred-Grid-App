var MainView = Parse.View.extend({

    className: '',

    mainTemplate: _.template($('#main-template').text()),

    initialize: function() {
        $('.jumbotron').html(this.el);
        this.render()
    },

    render: function() {
        var mainRenderedTemplate = this.mainTemplate({
            model: this.model
        });
        this.$el.html(mainRenderedTemplate);
    },

});
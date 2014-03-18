var ListView = Parse.View.extend({

    className: '',

    boxTemplate: _.template($('#list-template').text()),


    initialize: function() {
        $('.jumbotron').prepend(this.el);
        this.render()
    },

    render: function() {
        var boxRenderedTemplate = this.boxTemplate({
            model: this.model
        });
        this.$el.html(boxRenderedTemplate);
    }

});
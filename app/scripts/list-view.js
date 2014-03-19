var ListView = Parse.View.extend({

    className: '',

    boxTemplate: _.template($('#list-template').text()),


    initialize: function() {
        $('.jumbotron').html(this.el);
        this.render()
    },

    render: function() {
        var boxRenderedTemplate = this.boxTemplate({
            model: this.model
        });
        this.$el.html(boxRenderedTemplate);
    }

});
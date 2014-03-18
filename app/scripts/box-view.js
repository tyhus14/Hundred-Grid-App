var BoxView = Parse.View.extend({

    className: 'item-list-js',

    itemTemplate: _.template($('#item-template').text()),


    initialize: function() {
        $('.jumbotron').prepend(this.el);
        this.render()
    },

    render: function() {
        console.log('hi')
        var itemRenderedTemplate = this.itemTemplate({
            model: this.model
        });
        this.$el.html(itemRenderedTemplate);
    }

})
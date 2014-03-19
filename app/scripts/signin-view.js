var SigninView = Parse.View.extend({

    className: '',

    signinTemplate: _.template($('#signin-template').text()),

    events: {
        'click .submit-sigin-button': 'LogInUser',
    },


    initialize: function() {
        $('.jumbotron').html(this.el);
        this.render()
    },

    render: function() {
        var signinRenderedTemplate = this.signinTemplate({
            model: this.model
        });
        this.$el.html(signinRenderedTemplate);
    },

    LogInUser: function() {
        Parse.User.logIn($('.login-username-js').val(), $('.login-password-js').val(), {
            success: function(user) {
                console.log(user)
            },
            error: function(user, error) {
                // The login failed. Check error to see why.
            }
        });
    }

});
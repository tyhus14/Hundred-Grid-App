$('.submit-button').click(function() {

    var user = new Parse.User();

    user.set("name", $('.js-name').val());
    user.set("username", $('.js-username').val());
    user.set("password", $('.js-password').val());
    user.set("email", $('.js-email').val());
    user.set("leaguename", $('.js-leaguename').val());
    user.set("leaguepassword", $('.js-leaguepassword').val());

    user.signUp(null, {
        success: function(user) {
            // Hooray! Let them use the app now.
        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }

    });


})
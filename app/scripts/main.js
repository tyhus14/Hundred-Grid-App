$(function() {
    Parse.initialize("hIvxwhUFjYfjWMn0e0cGoG8PuMWlFhDzKQcyanAn", "kM82dBDl28jw7SYZ7CXnZ1KI2cpfrMOjA1lU6TWf");


    router = new MainRouter();

    Backbone.history.start();
    new MainView();


    currentUser = Parse.User.current();


    teamAscore = "0";
    teamBscore = "0";

    slicedTeamAscore = teamAscore.slice(-1);
    slicedTeamBscore = teamBscore.slice(-1);

    twoSlicedStrings = "";

    finalScore = twoSlicedStrings.concat(slicedTeamAscore, slicedTeamBscore);


    // _.where(fastleague._previousAttributes.boxes, {
    //     score: finalScore
    // });



    // window.users = new UserCollection();


    // users.fetch({
    //     success: function() {
    //         users.each(function(user) {
    //             new ListView({
    //                 model: user
    //             });
    //         })
    //     },

    // })


})
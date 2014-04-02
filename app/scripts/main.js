$(function() {
    Parse.initialize("hIvxwhUFjYfjWMn0e0cGoG8PuMWlFhDzKQcyanAn", "kM82dBDl28jw7SYZ7CXnZ1KI2cpfrMOjA1lU6TWf");
    //connects to parse

    router = new MainRouter();

    Backbone.history.start();
    new MainView();


    currentUser = Parse.User.current();

    // this query sets the score changed in parse
    var ScoreQuery = new Parse.Query(Score);


    fetchScoreQuery = function() {


        ScoreQuery.get("VUVDX88QEH", {
            success: function(gameScore) {
                console.log(gameScore.attributes.TeamAScore);
                console.log(gameScore.attributes.TeamBScore);

                window.teamAscore = gameScore.attributes.TeamAScore;
                window.teamBscore = gameScore.attributes.TeamBScore;

                // these take the last digit from the score, which is the one that matters
                window.slicedTeamAscore = teamAscore.slice(-1);
                window.slicedTeamBscore = teamBscore.slice(-1);

                window.twoSlicedStrings = "";
                //final score is the combined score of each team
                window.finalScore = twoSlicedStrings.concat(slicedTeamAscore, slicedTeamBscore);
                $('.box').css('background-color', "rgba(113, 160, 182, .3)");
                $("#id-" + window.finalScore).css("background-color", "rgba(86, 191, 241, 0.6)");

                window.currentWinner = _.where(objectBoxes, {
                    score: window.finalScore
                });

                $(".broncos").show();
                $(".seahawks").show();
                new WinnerView();
                new teamAView()



            },
            error: function(object, error) {
                // The object was not retrieved successfully.
                // error is a Parse.Error with an error code and description.
            },

        });

    }

    // setInterval(fetchScoreQuery, 3000)


});
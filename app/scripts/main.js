$(function() {
    Parse.initialize("hIvxwhUFjYfjWMn0e0cGoG8PuMWlFhDzKQcyanAn", "kM82dBDl28jw7SYZ7CXnZ1KI2cpfrMOjA1lU6TWf");


    router = new MainRouter();

    Backbone.history.start();
    new MainView();


    currentUser = Parse.User.current();


    teamAscore = "7";
    teamBscore = "3";

    slicedTeamAscore = teamAscore.slice(-1);
    slicedTeamBscore = teamBscore.slice(-1);

    twoSlicedStrings = "";

    finalScore = twoSlicedStrings.concat(slicedTeamAscore, slicedTeamBscore);



})
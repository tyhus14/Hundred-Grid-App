var Player = Parse.Object.extend("Players");

var PlayersCollection = Parse.Collection.extend({
    model: Player
});

var League = Parse.Object.extend("Leagues");

var LeaguesCollection = Parse.Collection.extend({
    model: League
});

var User = Parse.Object.extend("User");

var UserCollection = Parse.Collection.extend({
    model: User
});
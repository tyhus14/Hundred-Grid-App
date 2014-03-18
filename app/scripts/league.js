var User = Parse.Object.extend("User")

var UserCollection = Parse.Collection.extend({
    model: User
})
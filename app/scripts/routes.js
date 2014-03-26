var MainRouter = Backbone.Router.extend({

    routes: {
        'board': 'Quickstart',
    },

    initialize: function() {
        console.log('Hey guys, a router is born!')
    },

    Quickstart: function(id) {
        rowNumber = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        columnNumber = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

        var row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        var column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

        function createSets(total, rows, columns, label) {
            return _.flatten(_.map(_.range(total), function(x) {
                return _.map(rows, function(row) {
                    var obj = {}
                    obj[label] = columns[x] + '' + row;
                    return obj
                });
            }));
        }

        numbersArray = createSets(10, rowNumber, columnNumber, 'score');
        lettersArray = createSets(10, row, column, 'location');

        allBoxes = _.zip(lettersArray, numbersArray);
        objectBoxes = _.map(allBoxes, function(item, index) {
            return _.extend(item[0], item[1])
        })

        fastleague = new Quickleague();
        fastleague.set('boxes', objectBoxes)

        new GameView();

        fastleague.save(null, {
            success: function(fastleague) {
                // Execute any logic that should take place after the object is saved.
                id = fastleague.id
                console.log(id)
                console.log(fastleague.get('boxes'))
            },
            error: function(fastleague, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and description.
                alert('Failed to create new object, with error code: ' + error.description);
            }
        });

    },

});
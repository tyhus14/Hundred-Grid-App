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


        // Number Arrays
        zeroArray = _.map(rowNumber, function(num) {
            return columnNumber[0] + '' + num
        });

        oneArray = _.map(rowNumber, function(num) {
            return columnNumber[1] + '' + num
        });

        twoArray = _.map(rowNumber, function(num) {
            return columnNumber[2] + '' + num
        });

        threeArray = _.map(rowNumber, function(num) {
            return columnNumber[3] + '' + num
        });

        fourArray = _.map(rowNumber, function(num) {
            return columnNumber[4] + '' + num
        });

        fiveArray = _.map(rowNumber, function(num) {
            return columnNumber[5] + '' + num
        });

        sixArray = _.map(rowNumber, function(num) {
            return columnNumber[6] + '' + num
        });

        sevenArray = _.map(rowNumber, function(num) {
            return columnNumber[7] + '' + num
        });

        eightArray = _.map(rowNumber, function(num) {
            return columnNumber[8] + '' + num
        });

        nineArray = _.map(rowNumber, function(num) {
            return columnNumber[9] + '' + num
        });

        numbersArray = _.union(zeroArray, oneArray, twoArray, threeArray, fourArray, fiveArray, sixArray, sevenArray, eightArray, nineArray)

        // Letter Arrays

        aArray = _.map(row, function(num) {
            return column[0] + '' + num
        });

        bArray = _.map(row, function(num) {
            return column[1] + '' + num
        });

        cArray = _.map(row, function(num) {
            return column[2] + '' + num
        });

        dArray = _.map(row, function(num) {
            return column[3] + '' + num
        });

        eArray = _.map(row, function(num) {
            return column[4] + '' + num
        });

        fArray = _.map(row, function(num) {
            return column[5] + '' + num
        });

        gArray = _.map(row, function(num) {
            return column[6] + '' + num
        });

        hArray = _.map(row, function(num) {
            return column[7] + '' + num
        });

        iArray = _.map(row, function(num) {
            return column[8] + '' + num
        });

        jArray = _.map(row, function(num) {
            return column[9] + '' + num
        });



        lettersArray = _.union(aArray, bArray, cArray, dArray, eArray, fArray, gArray, hArray, iArray, jArray)
        allBoxes = _.zip(lettersArray, numbersArray);
        boxObject = _.object(allBoxes)

        new GameView();
        fastleague = new Quickleague();

        fastleague.save(null, {
            success: function(fastleague) {
                // Execute any logic that should take place after the object is saved.
                id = fastleague.id
                console.log(id)
            },
            error: function(fastleague, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and description.
                alert('Failed to create new object, with error code: ' + error.description);
            }
        });
    },

});
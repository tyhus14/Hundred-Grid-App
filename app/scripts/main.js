$(function() {
    Parse.initialize("hIvxwhUFjYfjWMn0e0cGoG8PuMWlFhDzKQcyanAn", "kM82dBDl28jw7SYZ7CXnZ1KI2cpfrMOjA1lU6TWf");

    new MainView();



    currentUser = Parse.User.current();
    if (currentUser) {
        // do stuff with the user
    } else {
        // show the signup or login page
    }




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


    var rowNumber = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    var columnNumber = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

    var row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    var column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    // var rowone = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // var columnone = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // var column = _.shuffle(columnone)
    // var row = _.shuffle(rowone)



    // Number Arrays
    window.zeroArray = _.map(rowNumber, function(num) {
        return columnNumber[0] + '' + num
    });

    window.oneArray = _.map(rowNumber, function(num) {
        return columnNumber[1] + '' + num
    });

    window.twoArray = _.map(rowNumber, function(num) {
        return columnNumber[2] + '' + num
    });

    window.threeArray = _.map(rowNumber, function(num) {
        return columnNumber[3] + '' + num
    });

    window.fourArray = _.map(rowNumber, function(num) {
        return columnNumber[4] + '' + num
    });

    window.fiveArray = _.map(rowNumber, function(num) {
        return columnNumber[5] + '' + num
    });

    window.sixArray = _.map(rowNumber, function(num) {
        return columnNumber[6] + '' + num
    });

    window.sevenArray = _.map(rowNumber, function(num) {
        return columnNumber[7] + '' + num
    });

    window.eightArray = _.map(rowNumber, function(num) {
        return columnNumber[8] + '' + num
    });

    window.nineArray = _.map(rowNumber, function(num) {
        return columnNumber[9] + '' + num
    });




    // Letter Arrays

    window.aArray = _.map(row, function(num) {
        return column[0] + '' + num
    });

    window.bArray = _.map(row, function(num) {
        return column[1] + '' + num
    });

    window.cArray = _.map(row, function(num) {
        return column[2] + '' + num
    });

    window.dArray = _.map(row, function(num) {
        return column[3] + '' + num
    });

    window.eArray = _.map(row, function(num) {
        return column[4] + '' + num
    });

    window.fArray = _.map(row, function(num) {
        return column[5] + '' + num
    });

    window.gArray = _.map(row, function(num) {
        return column[6] + '' + num
    });

    window.hArray = _.map(row, function(num) {
        return column[7] + '' + num
    });

    window.iArray = _.map(row, function(num) {
        return column[8] + '' + num
    });

    window.jArray = _.map(row, function(num) {
        return column[9] + '' + num
    });







})
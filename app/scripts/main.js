$(function() {
    Parse.initialize("hIvxwhUFjYfjWMn0e0cGoG8PuMWlFhDzKQcyanAn", "kM82dBDl28jw7SYZ7CXnZ1KI2cpfrMOjA1lU6TWf");


    window.users = new UserCollection();



    users.fetch({
        success: function() {
            users.each(function(item) {
                new BoxView({
                    model: item
                });
            })
        },

    })

    var row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    var column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var numbersTwo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];



    var shuffledNumbers = _.shuffle(numbers);
    var shuffledNumbersTwo = _.shuffle(numbersTwo);

    var aArray = _.map(row, function(num) {
        return column[0] + num
    });

    var bArray = _.map(row, function(num) {
        return column[1] + num
    });

    var cArray = _.map(row, function(num) {
        return column[2] + num
    });

    var dArray = _.map(row, function(num) {
        return column[3] + num
    });

    var eArray = _.map(row, function(num) {
        return column[4] + num
    });

    var fArray = _.map(row, function(num) {
        return column[5] + num
    });

    var gArray = _.map(row, function(num) {
        return column[6] + num
    });

    var hArray = _.map(row, function(num) {
        return column[7] + num
    });

    var iArray = _.map(row, function(num) {
        return column[8] + num
    });

    var jArray = _.map(row, function(num) {
        return column[9] + num
    });



})
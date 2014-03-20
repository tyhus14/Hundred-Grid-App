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

// var box = Backbone.Model.extend(board);



// var rowNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var columnNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// var board = [{
//         position: 'AA',
//         rowValue: rowNumber[0],
//         columnValue: columnNumber[0]
//     },

//     {
//         position: 'AB',
//         rowValue: rowNumber[0],
//         columnValue: columnNumber[1]
//     },

//     {
//         position: 'AC',
//         rowValue: rowNumber[0],
//         columnValue: columnNumber[2]
//     },

//     {
//         position: 'AD',
//         rowValue: rowNumber[0],
//         columnValue: columnNumber[3]
//     },

//     {
//         position: 'AE',
//         rowValue: rowNumber[0],
//         columnValue: columnNumber[4]
//     },

//     {
//         position: 'AF',
//         rowValue: rowNumber[0],
//         columnValue: columnNumber[5]
//     },

//     {
//         position: 'AG',
//         rowValue: rowNumber[0],
//         columnValue: columnNumber[6]
//     },

//     {
//         position: 'AH',
//         rowValue: rowNumber[0],
//         columnValue: columnNumber[7]
//     },

//     {
//         position: 'AI',
//         rowValue: rowNumber[0],
//         columnValue: columnNumber[8]
//     },

//     {
//         position: 'AJ',
//         rowValue: rowNumber[0],
//         columnValue: columnNumber[9]
//     },

//     {
//         position: 'BA',
//         rowValue: rowNumber[1],
//         columnValue: columnNumber[0]
//     },

//     {
//         position: 'BB',
//         rowValue: rowNumber[1],
//         columnValue: columnNumber[1]
//     },

//     {
//         position: 'BC',
//         rowValue: rowNumber[1],
//         columnValue: columnNumber[2]
//     },

//     {
//         position: 'BD',
//         rowValue: rowNumber[1],
//         columnValue: columnNumber[3]
//     },

//     {
//         position: 'BE',
//         rowValue: rowNumber[1],
//         columnValue: columnNumber[4]
//     },

//     {
//         position: 'BF',
//         rowValue: rowNumber[1],
//         columnValue: columnNumber[5]
//     },

//     {
//         position: 'BG',
//         rowValue: rowNumber[1],
//         columnValue: columnNumber[6]
//     },

//     {
//         position: 'BH',
//         rowValue: rowNumber[1],
//         columnValue: columnNumber[7]
//     },

//     {
//         position: 'BI',
//         rowValue: rowNumber[1],
//         columnValue: columnNumber[8]
//     },

//     {
//         position: 'BJ',
//         rowValue: rowNumber[1],
//         columnValue: columnNumber[9]
//     },

//     {
//         position: 'CA',
//         rowValue: rowNumber[2],
//         columnValue: columnNumber[0]
//     },

//     {
//         position: 'CB',
//         rowValue: rowNumber[2],
//         columnValue: columnNumber[1]
//     },

//     {
//         position: 'CC',
//         rowValue: rowNumber[2],
//         columnValue: columnNumber[2]
//     },

//     {
//         position: 'CD',
//         rowValue: rowNumber[2],
//         columnValue: columnNumber[3]
//     },

//     {
//         position: 'CE',
//         rowValue: rowNumber[2],
//         columnValue: columnNumber[4]
//     },

//     {
//         position: 'CF',
//         rowValue: rowNumber[2],
//         columnValue: columnNumber[5]
//     },

//     {
//         position: 'CG',
//         rowValue: rowNumber[2],
//         columnValue: columnNumber[6]
//     },

//     {
//         position: 'CH',
//         rowValue: rowNumber[1],
//         columnValue: columnNumber[7]
//     },

//     {
//         position: 'CI',
//         rowValue: rowNumber[2],
//         columnValue: columnNumber[8]
//     },

//     {
//         position: 'CJ',
//         rowValue: rowNumber[2],
//         columnValue: columnNumber[9]
//     },

//     {
//         position: 'DA',
//         rowValue: rowNumber[3],
//         columnValue: columnNumber[0]
//     },

//     {
//         position: 'DB',
//         rowValue: rowNumber[3],
//         columnValue: columnNumber[1]
//     },

//     {
//         position: 'DC',
//         rowValue: rowNumber[3],
//         columnValue: columnNumber[2]
//     },

//     {
//         position: 'DD',
//         rowValue: rowNumber[3],
//         columnValue: columnNumber[3]
//     },

//     {
//         position: 'DE',
//         rowValue: rowNumber[3],
//         columnValue: columnNumber[4]
//     },

//     {
//         position: 'DF',
//         rowValue: rowNumber[3],
//         columnValue: columnNumber[5]
//     },

//     {
//         position: 'DG',
//         rowValue: rowNumber[3],
//         columnValue: columnNumber[6]
//     },

//     {
//         position: 'DH',
//         rowValue: rowNumber[3],
//         columnValue: columnNumber[7]
//     },

//     {
//         position: 'DI',
//         rowValue: rowNumber[3],
//         columnValue: columnNumber[8]
//     },

//     {
//         position: 'DJ',
//         rowValue: rowNumber[3],
//         columnValue: columnNumber[9]
//     },

//     {
//         position: 'EA',
//         rowValue: rowNumber[4],
//         columnValue: columnNumber[0]
//     },

//     {
//         position: 'EB',
//         rowValue: rowNumber[4],
//         columnValue: columnNumber[1]
//     },

//     {
//         position: 'EC',
//         rowValue: rowNumber[4],
//         columnValue: columnNumber[2]
//     },

//     {
//         position: 'ED',
//         rowValue: rowNumber[4],
//         columnValue: columnNumber[3]
//     },

//     {
//         position: 'EE',
//         rowValue: rowNumber[4],
//         columnValue: columnNumber[4]
//     },

//     {
//         position: 'EF',
//         rowValue: rowNumber[4],
//         columnValue: columnNumber[5]
//     },

//     {
//         position: 'EG',
//         rowValue: rowNumber[4],
//         columnValue: columnNumber[6]
//     },

//     {
//         position: 'EH',
//         rowValue: rowNumber[4],
//         columnValue: columnNumber[7]
//     },

//     {
//         position: 'EI',
//         rowValue: rowNumber[4],
//         columnValue: columnNumber[8]
//     },

//     {
//         position: 'EJ',
//         rowValue: rowNumber[4],
//         columnValue: columnNumber[9]
//     },


//     {
//         position: 'FA',
//         rowValue: rowNumber[5],
//         columnValue: columnNumber[0]
//     },

//     {
//         position: 'FB',
//         rowValue: rowNumber[5],
//         columnValue: columnNumber[1]
//     },

//     {
//         position: 'FC',
//         rowValue: rowNumber[5],
//         columnValue: columnNumber[2]
//     },

//     {
//         position: 'FD',
//         rowValue: rowNumber[5],
//         columnValue: columnNumber[3]
//     },

//     {
//         position: 'FE',
//         rowValue: rowNumber[5],
//         columnValue: columnNumber[4]
//     },

//     {
//         position: 'FF',
//         rowValue: rowNumber[5],
//         columnValue: columnNumber[5]
//     },

//     {
//         position: 'FG',
//         rowValue: rowNumber[5],
//         columnValue: columnNumber[6]
//     },

//     {
//         position: 'FH',
//         rowValue: rowNumber[5],
//         columnValue: columnNumber[7]
//     },

//     {
//         position: 'FI',
//         rowValue: rowNumber[5],
//         columnValue: columnNumber[8]
//     },

//     {
//         position: 'FJ',
//         rowValue: rowNumber[5],
//         columnValue: columnNumber[9]
//     },

//     {
//         position: 'GA',
//         rowValue: rowNumber[6],
//         columnValue: columnNumber[0]
//     },

//     {
//         position: 'GB',
//         rowValue: rowNumber[6],
//         columnValue: columnNumber[1]
//     },

//     {
//         position: 'GC',
//         rowValue: rowNumber[6],
//         columnValue: columnNumber[2]
//     },

//     {
//         position: 'GD',
//         rowValue: rowNumber[6],
//         columnValue: columnNumber[3]
//     },

//     {
//         position: 'GE',
//         rowValue: rowNumber[6],
//         columnValue: columnNumber[4]
//     },

//     {
//         position: 'GF',
//         rowValue: rowNumber[6],
//         columnValue: columnNumber[5]
//     },

//     {
//         position: 'GG',
//         rowValue: rowNumber[6],
//         columnValue: columnNumber[6]
//     },

//     {
//         position: 'GH',
//         rowValue: rowNumber[6],
//         columnValue: columnNumber[7]
//     },

//     {
//         position: 'GI',
//         rowValue: rowNumber[6],
//         columnValue: columnNumber[8]
//     },

//     {
//         position: 'GJ',
//         rowValue: rowNumber[6],
//         columnValue: columnNumber[9]
//     },

//     {
//         position: 'HA',
//         rowValue: rowNumber[7],
//         columnValue: columnNumber[0]
//     },

//     {
//         position: 'HB',
//         rowValue: rowNumber[7],
//         columnValue: columnNumber[1]
//     },

//     {
//         position: 'HC',
//         rowValue: rowNumber[7],
//         columnValue: columnNumber[2]
//     },

//     {
//         position: 'HD',
//         rowValue: rowNumber[7],
//         columnValue: columnNumber[3]
//     },

//     {
//         position: 'HE',
//         rowValue: rowNumber[7],
//         columnValue: columnNumber[4]
//     },

//     {
//         position: 'HF',
//         rowValue: rowNumber[7],
//         columnValue: columnNumber[5]
//     },

//     {
//         position: 'HG',
//         rowValue: rowNumber[7],
//         columnValue: columnNumber[6]
//     },

//     {
//         position: 'HH',
//         rowValue: rowNumber[7],
//         columnValue: columnNumber[7]
//     },

//     {
//         position: 'HI',
//         rowValue: rowNumber[7],
//         columnValue: columnNumber[8]
//     },

//     {
//         position: 'HJ',
//         rowValue: rowNumber[7],
//         columnValue: columnNumber[9]
//     },

//     {
//         position: 'IA',
//         rowValue: rowNumber[8],
//         columnValue: columnNumber[0]
//     },

//     {
//         position: 'IB',
//         rowValue: rowNumber[8],
//         columnValue: columnNumber[1]
//     },

//     {
//         position: 'IC',
//         rowValue: rowNumber[8],
//         columnValue: columnNumber[2]
//     },

//     {
//         position: 'ID',
//         rowValue: rowNumber[8],
//         columnValue: columnNumber[3]
//     },

//     {
//         position: 'IE',
//         rowValue: rowNumber[8],
//         columnValue: columnNumber[4]
//     },

//     {
//         position: 'IF',
//         rowValue: rowNumber[8],
//         columnValue: columnNumber[5]
//     },

//     {
//         position: 'IG',
//         rowValue: rowNumber[8],
//         columnValue: columnNumber[6]
//     },

//     {
//         position: 'IH',
//         rowValue: rowNumber[8],
//         columnValue: columnNumber[7]
//     },

//     {
//         position: 'II',
//         rowValue: rowNumber[8],
//         columnValue: columnNumber[8]
//     },

//     {
//         position: 'IJ',
//         rowValue: rowNumber[8],
//         columnValue: columnNumber[9]
//     },


//     {
//         position: 'JA',
//         rowValue: rowNumber[9],
//         columnValue: columnNumber[0]
//     },

//     {
//         position: 'JB',
//         rowValue: rowNumber[9],
//         columnValue: columnNumber[1]
//     },

//     {
//         position: 'JC',
//         rowValue: rowNumber[9],
//         columnValue: columnNumber[2]
//     },

//     {
//         position: 'JD',
//         rowValue: rowNumber[9],
//         columnValue: columnNumber[3]
//     },

//     {
//         position: 'JE',
//         row: rowNumber[9],
//         columnValue: columnNumber[4]
//     },

//     {
//         position: 'JF',
//         row: rowNumber[9],
//         columnValue: columnNumber[5]
//     },

//     {
//         position: 'JG',
//         row: rowNumber[9],
//         columnValue: columnNumber[6]
//     },

//     {
//         position: 'JH',
//         row: rowNumber[9],
//         columnValue: columnNumber[7]
//     },

//     {
//         position: 'JI',
//         row: rowNumber[9],
//         columnValue: columnNumber[8]
//     },

//     {
//         position: 'JJ',
//         row: rowNumber[9],
//         columnValue: columnNumber[9]
//     },

// ]
var PlayView = Parse.View.extend({

    className: 'Playview',

    PlayViewTemplate: _.template($('#play-view-template').text()),

    events: {
        "click .play-game": "Play"
    },

    initialize: function() {
        $('.jumbotron').html(this.el);
        this.render()

    },

    render: function() {
        var PlayViewRenderedTemplate = this.PlayViewTemplate({
            model: this.model
        });
        this.$el.html(PlayViewRenderedTemplate);
    },

    Play: function() {
        rowNumber = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        columnNumber = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        console.log(id)
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
        fastleague.set('boxes', objectBoxes)
        fastleague.set('columns', columnNumber)
        fastleague.set('rows', rowNumber)

        new GameView();
        new StartView();
        console.log(fastleague.get('boxes'))
        fastleague.save();
    }

});
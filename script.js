$(document).ready(function() {
    // $('#button-container').append('<button id="add-dice">Add Dice!</button>');
    // $('#button-container').append('<button id="roll-die">Roll Die!</button>');
    $('#add-dice').click(function() {
        return newDice();
    })
    
    //array to store loaded dice.
    var dieArray = [];
    //create Dice object that gives ID and value.
    var Dice = function(elementID) {
        this.elementID = elementID;
        this.value = Math.floor((Math.random() * 6) + 1);
        this.generate = function() {
            var d = $('<div id =' + this.elementID + ' class="dice"></div>');
            $('#dice-containter').append(d);
            $('#' + this.elementID).text(this.value.toString());
        }
    };
     function newDice() {
        var dice = new Dice(dieArray.length);
        dice.generate();
        dieArray.push(dice);
    };
    
});










    
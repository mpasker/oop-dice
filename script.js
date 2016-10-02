$(document).ready(function() {
    $('#add-dice').click(function() {
        return newDice();
    });
    $('#roll-dice').click(function() {
        return rollDice();
    });

    //array to store loaded dice.
    var dieArray = [];
    //create Dice object that gives ID and value.
    var Dice = function(elementID) {
        this.elementID = elementID;
        this.value = Math.floor((Math.random() * 6) + 1);
        this.generate = function() {
            var d = $('<div id =' + this.elementID + ' class="dice"></div>');
            $('#dice-container').append(d);
            $('#' + this.elementID).text(this.value.toString());
        };
        this.roll = function() {
            this.value = Math.floor((Math.random() * 6) + 1);
            $('#' + this.elementID).text(this.value.toString());
        }
    };
    function newDice() {
        var dice = new Dice(dieArray.length);
        dice.generate();
        dieArray.push(dice);
    }
    function rollDice() {
        for(i = 0; i < dieArray.length; i++) {
            dieArray[i].roll();
        }
    }
    
});










    
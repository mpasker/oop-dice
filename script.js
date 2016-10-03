$(document).ready(function() {
    $('#add-dice').click(function() {
        return newDice();
    })
    $('#roll-dice').click(function() {
        return rollDice();
    })
    $('#sum-dice').click(function() {
        return sumDice();
    })

    //array to store loaded dice.
    var dieArray = [];
    console.log(dieArray);
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
    //Loops through array of die to roll all dice loaded on page.
    function rollDice() {
        for(i = 0; i < dieArray.length; i++) {
            dieArray[i].roll();
        }
    }
    function sumDice() {
        var sum = 0;
        for(i = 0; i < dieArray.length; i++) {
            sum += dieArray[i].value;
        }
        return alert("The sum of all die on the screen is equal to" + " " + sum);
    }
    
});










    
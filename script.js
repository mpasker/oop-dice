$(document).ready(function() {
    $('#add-dice').click(function() {
        var die = new Dice();
        die.rollDie();
        die.generate();
        dieArray.push(die);
    })

    $('#roll-dice').click(function() {
        $(dieArray).each(function(index, value) {
            value.rollDie();
        });
    })

    $('#sum-dice').click(function() {
         var sum = dieArray.reduce(function (total, num) {
            return total + num.number;
        }, 0);
        alert('the total is ' + sum);
    })

});

    //array to store loaded dice.
    var dieArray = [];
    console.log(dieArray);
    //create Dice object
    var Dice = function() {
        this.number = 0;
        this.die = $('<div class="die"></div>');
        this.die.click(function() {
            this.rollDie();
        }.bind(this));

        this.die.dblclick(function() {
            this.die.remove();
            var i = dieArray.indexOf(this);
            if(i != -1) {
                dieArray.splice(i, 1);
            }
        }.bind(this));
    };

    Dice.prototype.generate = function() {
       $('#dice-container').append(this.die);
   }
   
    Dice.prototype.rollDie = function() {
       this.number = Math.floor((Math.random() * 6) + 1);
       $(this.die).text(this.number);
   }
  
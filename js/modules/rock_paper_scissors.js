var RockPaperScissors = (function () {
    'use strict';

    var _whoWins, _validate,
        choices = ['scissors', 'paper', 'rock'];

    _validate = function (choice) {
        var _choice = choice.toLowerCase();

        if (-1 === choices.indexOf(_choice)) {
            throw '"' + _choice + '"' + ' is not a valid option :-(';
        }

        return _choice;
    };

    _whoWins = function (option1, option2) {
        var result,
            index1 = choices.indexOf(option1),
            index2 = choices.indexOf(option2),
            numChoices = choices.length - 1;

        if (index1 === index2) {
            return 'x';
        }

        if (index1 === numChoices && index2 === 0) {
            return 1;
        }

        if (index1 === 0 && index2 === numChoices) {
            return 2;
        }

        if (index1 < index2) {
            return 1;
        }

        if (index1 > index2) {
            return 2;
        }

        /*
        if (index1 === 2 && index2 === 0) {
            return 1;
        }

        if (index1 > index2) {
            return 2;
        }

        if (index2 > index1) {
            return 1;
        }
        */

        /*
        if (option1 === 'rock') {
            if (option2 === 'rock') {
                result = 'x';
            }
            if (option2 === 'paper') {
                result = 2;
            }
            if (option2 === 'scissors') {
                result = 1;
            }
        }
        if (option1 === 'paper') {
            if (option2 === 'paper') {
                result = 'x';
            }
            if (option2 === 'rock') {
                result = 1;
            }
            if (option2 === 'scissors') {
                result = 2;
            }
        }
        if (option1 === 'scissors') {
            if (option2 === 'scissors') {
                result = 'x';
            }
            if (option2 === 'rock') {
                result = 2;
            }
            if (option2 === 'paper') {
                result = 1;
            }
        }

         return result;
        */
    };

    return {
        whoWins: _whoWins,
        validate: _validate
    };
})();

/*global RockPaperScissors:false */

(function ($, rps) {
    'use strict';

    var choices, randomChoice, send, $info,
    user1Score = 0, user2Score = 0, updateScores;

    updateScores = function () {
        $('#userScore').text(user1Score);
        $('#robotScore').text(user2Score);
    };

    randomChoice = function () {
        if (choices.length > 0) {
            return choices[Math.floor(Math.random() * choices.length)];
        }
        return null;
    };

    send = function () {
        var choice = $('#myChoice').val(),
            winner;

        $info
            .removeClass('alert-danger')
            .removeClass('alert-info')
            .removeClass('alert-success')
            .removeClass('alert-warning');

        if (choice !== '') {
            try {
                rps.validate(choice);
                winner = rps.whoWins(choice, randomChoice());
            } catch (e) {
                $info.addClass('alert-danger').text(e);
            }
        }
    };

    $(document).on('ready', function () {
        choices = rps.getChoices();
        $info = $('#info');

        $('#fForm').on('submit', function (e) {
            send();
            e.preventDefault();
        });
    })
    .on('score:draw', function () {
        $info.text('draw').addClass('alert-info');
    })
    .on('score:user1', function () {
        $info.text('you win!').addClass('alert-warning');
        user1Score++;
        updateScores();
    })
    .on('score:user2', function () {
        $info.text('I WIN!!!!').addClass('alert-success');
        user2Score++;
        updateScores();
    });

})(jQuery, RockPaperScissors);

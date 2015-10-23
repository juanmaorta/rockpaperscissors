/*global describe:false, it:false, expect:false, it:false, beforeEach:false, afterEach: false, spyOn:false */
(function($, rps) {
    'use strict';

    var $document,
        $body,
        $info,
        $form,
        $input;

    describe('misc test', function() {
        beforeEach(function() {
            // setting a mocked DOM

            var $infoDiv,
                $_form,
                $_input;

            $infoDiv = $('<div id="info">')
                .addClass('alert');
            $_input = $('<input type="text" id="myChoice">');
            $_form = $($('<form id="fForm">'))
                .append($_input);

            $document = $(document);
            $body = $('body');
            $body.append($infoDiv);
            $body.append($_form);


            $info = $('#info');
            $input = $('input');
            $form = $('form');

            spyOn(rps, 'getChoices').and.callFake(function () {
                return [];
            });

            $document.trigger('ready');

            // $document.trigger('content:loaded');
        });

        afterEach(function() {
            $input.val('');
        });

        describe('User triggered events', function () {

            it('should reset info on form submit', function() {
                /** Mocking some RockPaperScissor behaviour **/
                spyOn(rps, 'validate').and.callFake(function() {
                    return '';
                });

                spyOn(rps, 'whoWins').and.callFake(function() {});

                $input.val('');
                $form.trigger('submit');

                expect($info).toHaveText('');
                expect($info).not.toHaveClass('alert-danger');
                expect($info).not.toHaveClass('alert-info');
                expect($info).not.toHaveClass('alert-success');
                expect($info).not.toHaveClass('alert-warning');
            });

            it('should display an error user types a non valid choice', function() {
                spyOn(rps, 'validate').and.callFake(function() {
                    throw("not valid");
                });

                $input.val('non-valid-choice');
                $form.trigger('submit');

                expect($info).toHaveText('not valid');
            });

            it('should assert who wins if choice is valid', function() {
                var choice = 'rock';

                spyOn(rps, 'validate').and.callFake(function() {
                    return choice;
                });

                spyOn(rps, 'whoWins').and.callFake(function() {
                    // forces user to win
                    $(document).trigger('score:user1');
                });

                $input.val(choice);
                $form.trigger('submit');

                expect($info).toHaveText('you win!');
            });
        });

        xdescribe('Event driven results', function() {
            it('should show the text draw into the info box when a draw event is fired', function() {
                $document.trigger('score:user1');

                expect($info.text()).toBe('you win!');
            });

            it('should show the text draw into the info box when a draw event is fired', function() {
                $document.trigger('score:user2');

                expect($info.text()).toBe('I WIN!!!!');
            });

            it('should show the text draw into the info box when a draw event is fired', function() {
                $document.trigger('score:draw');

                expect($info.text()).toBe('draw');
            });
        });
    });
})(jQuery, RockPaperScissors);

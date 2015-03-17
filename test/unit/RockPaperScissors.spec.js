/*global describe:false, it:false, expect:false, it:false, RockPaperScissors:false */
(function (rps) {
    'use strict';

    describe('When playing rock-paper-scissors', function () {

        it('should throw an exception when a choice is not valid', function () {
            try {
                rps.validate('stone');
            } catch (e) {
                expect(e).toEqual('"stone" is not a valid option :-(');
            }
        });

        it('should get a valid lowercase option', function () {
            var result = rps.validate('Scissors');
            expect(result).toEqual('scissors');
        });

        it('Rock wins scissors', function () {
            var result = rps.whoWins('rock', 'scissors');
            expect(result).toEqual(1);
        });

        it('Scissors loses agains rock', function () {
            var result = rps.whoWins('scissors', 'rock');
            expect(result).toEqual(2);
        });

        it('Paper wins rock', function () {
            var result = rps.whoWins('paper', 'rock');
            expect(result).toEqual(1);
        });

        it('Rock loses agains paper', function () {
            var result = rps.whoWins('rock', 'paper');
            expect(result).toEqual(2);
        });

        it('Scissors win paper', function () {
            var result = rps.whoWins('scissors', 'paper');
            expect(result).toEqual(1);
        });

        it('Paper loses against scissors', function () {
            var result = rps.whoWins('paper', 'scissors');
            expect(result).toEqual(2);
        });

        it('Paper draws with paper', function () {
            var result = rps.whoWins('paper', 'paper');
            expect(result).toEqual('x');
        });

        it('Scissors draws with scissors', function () {
            var result = rps.whoWins('scissors', 'scissors');
            expect(result).toEqual('x');
        });

        it('Rock draws with Rock', function () {
            var result = rps.whoWins('rock', 'rock');
            expect(result).toEqual('x');
        });
    });
})(RockPaperScissors);

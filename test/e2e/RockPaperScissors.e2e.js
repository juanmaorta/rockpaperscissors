/*global describe:false, beforeEach:false, it:false, expect:false, by:false, browser:false, element:false */
describe('Rock, Paper, Scissors end 2 end test', function () {
    'use strict';

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:9000');
    });

    it('should show alert-danger if options is not valid', function () {

        element(by.id('myChoice')).sendKeys('stone');
        element(by.css('.btn')).click();

        var alert = element.all(by.css('.alert-danger'));

        expect(alert.count()).toBe(1);
    });

    it('should reset the counters when click reset', function () {
        var score1 = element(by.id('userScore')),
            score2 = element(by.id('robotScore')),
            alert = element(by.css('.alert'));

        element(by.id('myChoice')).sendKeys('rock');
        element(by.css('.btn')).click();

        element(by.id('resetScore')).click();

        expect(score1.getText()).toEqual('0');
        expect(score2.getText()).toEqual('0');
        expect(alert.getText()).toEqual('');
    });

    xit('should match the text with the alert class and the counters', function () {
        var score1 = element(by.id('userScore')),
            score2 = element(by.id('robotScore')),
            alert = element(by.css('.alert'));

        element(by.id('resetScore')).click();

        element(by.id('myChoice')).sendKeys('rock');
        element(by.css('.btn')).click();

        if (alert.getText() === 'you win!') {
            expect(score1.getText()).toEqual('1');
            expect(score2.getText()).toEqual('0');
            // expect(alert.getText()).toEqual('');
        } else if (alert.getText() === 'I WIN!!!!') {
            expect(score1.getText()).toEqual('0');
            expect(score2.getText()).toEqual('1');
        } else {
            expect(score1.getText()).toEqual('0');
            expect(score2.getText()).toEqual('0');
        }
    });

});

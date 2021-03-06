/**
 * Created by sergei on 1/13/14.
 */
var should = require('should');
var calc = require('../source/calc');

describe('calc spec', function () {
    it('should calc exist', function () {
        should(calc).be.ok;
    });

    it('should  return 0 for empty string ', function () {
        should(calc.add('')).equal(0);
    });

    it('should return 1 for 1', function () {
        should(calc.add('1')).equal(1);
    });

    it('should return 2 for 2', function () {
        should(calc.add('2')).equal(2);
    });

    it('should return 3 for 1,2', function () {
        should(calc.add('1,2')).equal(3);
    });

    it('should return 5 for 1,2,2', function () {
        should(calc.add('1,2,2')).equal(5);
    });

    it('should return 5 for 1,1,1,1,1', function () {
        should(calc.add('1,1,1,1,1')).equal(5);
    });

    it('should return 6 with new line separator', function () {
        should(calc.add('3,1\n2')).equal(6);
    });

    describe('different delimeters',function(){
        it('should return 6 with custom delimeters', function () {
            should(calc.add('\\;\n3;1;2')).equal(6);
        });

    });

    describe('negative numbers', function(){
        it('should return exception', function () {
            (function(){
              calc.add('1,-4');
            }).should.throw('negatives are not allowed')
        });

    })

});
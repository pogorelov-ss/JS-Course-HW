/**
 * Created by sergei on 1/13/14.
 */

var calc = {
    add: function (str) {
        var defaultDelimiter =/\n|,/ ;
        if(str.indexOf('\\') === 0){
            var  customDelimiter = str.substring(2,1);
            console.log(customDelimiter);
            defaultDelimiter = new RegExp(customDelimiter);
            str = str.substr(3);
        }
        var numbers = str.split(defaultDelimiter);
        var integers = numbers.map(function (val) {
            return +val;
        });

        console.log(numbers);
        var negatives = integers.some(function(val){
            return val < 0;
        });

        if(negatives){
            throw new Error("negatives are not allowed");
        }

        return integers.reduce(function (memo, value) {
            return memo + value;
        });
    }
};

module.exports = calc;
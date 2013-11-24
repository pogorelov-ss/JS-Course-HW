/**
 * Created by sergei on 11/21/13.
 */
var HW4 = HW4 || {
    PersonSimple: function () {
        return arguments[0];
    },
    Person:function(args){
        var privateObj ={};
        var capitalizeFirst = function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        };
            for (var key in args) {
                (function(key){
                if (typeof args[key]!='function'){
                    privateObj['get'+capitalizeFirst(key)] = function(){return args[key]};
                    privateObj['set'+capitalizeFirst(key)] = function(newVal){args[key]=newVal};
                }
                else {
                    privateObj[key] = function(){return args[key]()};
                }
                })(key);
            }
        return privateObj;
    },
    $:function(selector){
        var elementList = document.querySelectorAll(selector);
        elementList.height = function(height){
            for (var i = 0; i < elementList.length; i++) {
                elementList[i].style.height = height+'px';
            }
        };
        elementList.weight = function(weight){
            for (var i = 0; i < elementList.length; i++) {
                elementList[i].style.weight = weight+'px';
            }
        };
        return elementList;
    }
};
var $div = HW4.$('div');
console.log($div);
$div.height(100);

/*
проверка

var testObj1 = {name: 'Jack', age: '10', jump: function () {
    return "My name is " + this.name + " and I can jump.";
}};
var testObj2 = {name: 'Mike', age: '100', jump: function () {
    return "My name is " + this.name + " and I can't jump.";
}};

var p1 = new HW4.PersonSimple(testObj1);
var p2 = new HW4.PersonSimple(testObj2);
console.log('====t2');
 console.log(p1.age);
 console.log(p1.jump());
 console.log(p2.age);
 console.log(p2.jump());

var pp = new HW4.Person(testObj1);
console.log('====t3');

console.log(pp.getAge());
pp.setName('Ivan');
pp.setAge(5);
console.log(pp.getAge());
console.log(pp.jump());
console.log(pp.name);*/

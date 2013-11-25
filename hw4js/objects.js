/**
 * Created by sergei on 11/21/13.
 */
var HW4 = HW4 || {
    App:function(){
        // работать заставил но окончательно так и не понял ... надо будет переделать реализацию
        return{
            init: function(selector) {
                this.nodes = document.querySelectorAll(selector);
                //console.log(this.nodes);
                this.setListeners();
            },
            setListeners: function() {
                [].slice.call(this.nodes).forEach(function(n){
                    n.onclick = this.onClick.myBind(this);
                }, this);
            },

            onClick: function(e) {
                e = e || window.event;
                var node = e.target || e.srcElement;
                console.log(node);
                // this - should be the main context - instance of App
                // node - should be the node, that fires event
            }
        }
    },
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

//Добавляем в прототип Function свой метод
if (typeof Function.prototype.myBind === 'undefined') {
    Function.prototype.myBind = function(context){
        // Put your code here
        var __this = this;
        return function() {
            __this.apply(context, arguments);
        }
    };
}
//подключаем свое событие
(new HW4.App()).init('div');

/*
проверка для 4го отмененного задания
var $div = HW4.$('div');
console.log($div);
$div.height(100);
*/


//проверка заданий 2 3
/*
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
console.log(pp.name);//
console.log(pp.jump);*/
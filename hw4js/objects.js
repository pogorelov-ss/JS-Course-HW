/**
 * Created by sergei on 11/21/13.
 */
var HW4 = HW4 || {
    PersonSimple: function () {
        return arguments[0];
    },
    Person:function(args){
        var privateObj ={};
            for (var key in args) {
                (function(key){
                if (typeof args[key]!='function'){
                    privateObj['get'+key] = function(){return args[key]};
                    privateObj['set'+key] = function(newVal){args[key]=newVal};
                }
                else {
                    privateObj[key] = function(){return args[key]()};
                }
                })(key);
            }
        return privateObj;
    }
};
var testObj1 = {name: 'Jack', age: '10', jump: function () {
    return "My name is " + this.name + " and I can jump.";
}};
var testObj2 = {name: 'Mike', age: '100', jump: function () {
    return "My name is " + this.name + " and I can't jump.";
}};

var p1 = new HW4.PersonSimple(testObj1);
var p2 = new HW4.PersonSimple(testObj2);


var pp = new HW4.Person(testObj1);
console.log(pp.getage());
pp.setname('h');
console.log(pp.jump());
console.log(pp.name);
//console.log('====');

/*console.log(p1.age);
console.log(p1.jump());
console.log(p2.age);
console.log(p2.jump());*/

//console.log('====');
//console.log(HW4.PersonSimple({name: 'Jack', age: '10', jump: function () {
//    return "My name is " + this.name + " and I can jump.";
//}}).jump());
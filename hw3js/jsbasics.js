var HW3 = HW3 || {
    myObj1: {
        a: {
            b: 'c',
            d: 'e'
        },
        s: 'f'
    },
    people: [
        {
            id: 1,
            name: 'Brad',
            friends: [2, 5, 6]
        },
        {
            id: 2,
            name: 'John',
            friends: [1, 3, 55]
        },
        {
            id: 3,
            name: 'Tom',
            friends: [2, 5]
        },
        {
            id: 4,
            name: 'Fil',
            friends: null
        },
        {
            id: 5,
            name: 'John',
            friends: [1, 3]
        },
        {
            id: 6,
            name: 'Jim',
            friends: [1]
        }
    ],
    getObject: function (path, obj) {
        var parts = path.split('.');
        for (var i = 0; i < parts.length; i++) {
            obj = obj[parts[i]];
        }
        return obj;
    },
    //наверное не оптимально по производительности ... содрать из jquery extend
    deepCopy: function (obj) {

        return JSON.parse(JSON.stringify(obj));
    },
    findFriends: function findF() {
        var id = [];
        var friends = [];
        id = id.concat(arguments[0]);
        //console.log(id);
        for (var i = 0; i < this.people.length; i++) {
            if (~id.indexOf(this.people[i].id)) {
                friends.push(this.people[i]);
            }
        }
        return friends;
    },
    getFriends: function (id) {
        return HW3.findFriends(HW3.findFriends(id)[0].friends);
    }

};

console.log('t1');
console.log(HW3.getObject('a.d', HW3.myObj1));
console.log(HW3.getObject('a', 1));
console.log('t2');
console.log(HW3.deepCopy(HW3.myObj1));
console.log('t3');
console.log(HW3.getFriends(2));

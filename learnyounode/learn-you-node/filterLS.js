/**
 * Created by sergei on 12/27/13.
 */
var fs = require('fs');
var rExp = new RegExp('\\.'+process.argv[3]+'$');

    fs.readdir(process.argv[2],function(err,list){
    if (err){
        console.log(err);
    }
    else{
        for (var i = 0; i < list.length; i++) {
            if (rExp.test(list[i])){
                console.log(list[i])
            }

        }
    }
});
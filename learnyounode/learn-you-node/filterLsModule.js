/**
 * Created by sergei on 12/29/13.
 */
var fs = require('fs');

module.exports = function filteredLs(dir,ext,callback){
    var rExp = new RegExp('\\.'+ext+'$');

    fs.readdir(dir,function(err,list){
        var result = [];
        if (err){
            return callback(err);
        }
        else{
            for (var i = 0; i < list.length; i++) {
                if (rExp.test(list[i])){
                    result.push(list[i])
                }
            }
            return callback(null,result); //а как правильно ? просто callback или с return
        }
    })
};



/**
 * Created by sergei on 12/29/13.
 */
var filtLs = require('./filterLsModule');

filtLs(process.argv[2],process.argv[3],function(err,list){
    if(err){
        return console.error('wtf ',err)
    }
    else{
        list.forEach(function(item){console.log(item)})
    }
});
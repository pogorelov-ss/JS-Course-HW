/**
 * Created by sergei on 12/30/13.
 */
var http = require('http'),
    bl = require('bl'),
    urls = process.argv.splice(2, 3),
    responses = [],
    count = 0;

function httpGet(url, index) {
    http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                responses[index] = err;
            }
            else {
                responses[index] = data.toString();
            }
            count++;
            if (count == 3) {
                responses.forEach(function (item) {
                    console.log(item);
                })
            }
        }))
    })
}
urls.forEach(function (item, index) {
    httpGet(item, index)
});

/*
 urls.forEach(function(item){
 http.get(item,function(res){
 res.pipe(bl(function(err,data){
 if(err){
 console.error(err)
 }
 else{
 console.log(data.toString())
 }
 }))
 })
 });
 */

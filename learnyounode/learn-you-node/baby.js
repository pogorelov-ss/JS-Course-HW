/**
 * Created by sergei on 12/27/13.
 */
var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
     sum += Number(process.argv[i]);

}
console.log(sum);
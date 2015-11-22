/**
 * Created by Rain on 2015/11/18.
 */
test='test';
global.test1='test1';
var test2='test2';

delete test;
delete test1;
delete test2;

console.log(test);
console.log(test1);
console.log(test2);

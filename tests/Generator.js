/**
 * Created by Rain on 2015/12/5.
 */

//function* idMaker() {
//  var index = 0;
//  while (index < 3) {
//    yield index++;
//  }
//}
//
//var gen = idMaker();
//
//console.log(gen.next().value);
//console.log(gen.next().value);
//console.log(gen.next().value);

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());





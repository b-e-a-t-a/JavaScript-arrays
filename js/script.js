/*var array = ['HTML', 5, 'World', 9.99, {name: 'Piotr'}, 99];
console.log(array.length);

var array = ['aaa', [2.55, 'bbb', [5] ] ];
var stringWithArray = array.toString();
console.log(stringWithArray);

var array = ['aaa', [2.55, 'bbb', [5, {id: 'hello' } ] ] ];
var stringWithArray = array.toString();
console.log(stringWithArray);

var test = [ 'aaa', 2.55, 'bbb', 5 ];
var testToString = test.join(' | ');
console.log(testToString);


var test = ['a', 'b', 'c'];
var x = test.push('d');
console.log(test);

var array = ['a', 'b', 'c'];
array.splice(1, 0, 'x', 'y', 'z');
console.log(array); 

var array = ['a', 'x', 'y', 'z', 'b', 'c'];
var x = array.splice(2, 2);
console.log(array);  //  ['a', 'x', 'b', 'c']
console.log(x);  //  ['y', 'z'] 

var test = [1, 2, 3];
var test2 = ['a', 'b', 'c'];
var test3 = ['x', 'y', 'z'];
var arr = test.concat(test2,test3);
console.log(arr);

var names = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola'];
var indexOfOla = names.indexOf('Ola');
console.log('The search value is on ' + indexOfOla + ' position');
console.log(names[indexOfOla]);

var values = [1, 2, 3, 4, 5, 6];
    var multipliedValues = values.map(function(value) {
    return value * 10;
});
console.log(values);
console.log(multipliedValues);

var names = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola', 'Ania'];
var namesWithoutOla = names.filter(function(name) {
    console.log('name in filter: ' + name);
    return name != 'Ola';
});
console.log(namesWithoutOla);*/

var woman = ['Beata', 'Anna', 'Alicja', 'Marta'];
var man = ['Maciej', 'Michał', 'Szymon', 'Paweł'];
var allNames = woman.concat(man);
console.log(allNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
  var x = allNames.push(newName)
} else {
  var x = 'Name duplicated'
}

console.log(x);
console.log(allNames);

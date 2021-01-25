var a = ['hello', 20, 'nodejs', '2222'];

console.log(a[0]);

console.log(a[3]);

a[4] = 55;

console.log(a);

a[0] = 'hi';

console.log(a[0]);

console.log(a.length);

console.log(a.indexOf('nodejs'));

var b = new Array('2222', 'nodejs');

console.log(b[0]);

var c = [];

for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}

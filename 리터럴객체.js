// var a = [1, 2, 3, "hello"];

var a = {
    'a': 110,
    'b': 'hello',
    'c': function () {
        this.a++;
    }
}

// var test = new Car();

// a.c();

// console.log(a.a);
// console.log(a.b);

// var a = new Object();

console.log(typeof a);

Object.prototype.sum = function () {
    console.log(this.a + 20);
}

a.sum();
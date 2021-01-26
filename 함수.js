function test(a, b) {
    console.log(a);
    console.log(b);
}

test(10, 'hello world');

function sum(a, b) {
    return a + b;
}

var c = sum(10, 20);
console.log(c);

function sum2() {
    return 'sum 함수를 호출했나요?';
}

var d = sum2();
console.log(d);

function sum3() {
    console.log('sum 함수를 호출했나요?');
}

sum3();

var sum5 = function () {

}

sum5();

var sum6 = function (c, d) {
    return c + d;
}

var e = sum6(1, 2);
console.log(e);

function Car(a, b, c) {
    this.name = a;
    this.color = b;
    var move = c;
}

var a = new Car('현대', '노란색', '전진');
console.log(a.name);
console.log(a.color);
console.log(a.move);

// var b = new Car('기아', '파란색');
// console.log(b.name);
// console.log(b.color);

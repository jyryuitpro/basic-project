// function Car(a, b) {
//     this.name = a;
//     this.color = b;
// }

// Car.prototype.move = function () {
//     console.log(`${this.name} 차이고 ${this.color} 색입니다.`)
// }

// var a = new Car('현대', '노란색');
// a.move();
// var b = new Car('기아', '파란색');
// b.move();

var a = [1, 2, 3, 4, 10];
Array.prototype.print = function () {
    for (var i = 0; i < this.length; i++) {
        console.log(i);
    }
}

a.print();
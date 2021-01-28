function test(num, callback) {
    console.log(num);
    callback();
}

test(1, function () {
    console.log('콜백함수가 실행됩니다.');
})

function ex_cl() {
    var num = 0;
    return function () {
        num++;
        console.log(num);
    }
}

var test = ex_cl();
test();
test();
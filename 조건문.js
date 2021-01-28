var a = 5;

if (a < 10) {
    console.log('10보다 작습니다.');
} else if (a < 20) {
    console.log('20보다 작습니다.');
} else if (a < 30) {
    console.log('30보다 작습니다.');
} else {
    console.log('30보다 큽니다.');
}

switch ("yello") {
    case "blue":
        console.log('파란색입니다.');
        break;

    case "green":
        console.log('초록색입니다.')
        break;

    default:
        console.log('모든 벗어나는 조건')
}

if (a == 5) {
    console.log('5입니다.');
}

if (a === 5) {
    console.log('5입니다.');
}

if (a !== 5) {
    console.log('5입니다.');
}

function myNum(num) {
    if (num < 5) {
        return '10보다 작습니다';
    } else {
        return '10보다 큽니다.'
    }
}

var test = myNum(15);
console.log(test);
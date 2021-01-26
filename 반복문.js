// for (var i = 0; i < 5; i = i + 1) {
//     document.write('화면에 찍어주세요');
//     document.write('<br>');
// }

// var i = 0;
// while (i < 11) {
//     document.write('화면에 찍어주세요');
//     document.write('<br>');
//     i = i + 1;
// }

// do {
//     document.write('화면에 찍어주세요');
//     document.write('<br>');
//     i = i + 1;
// } while (i < 11)

for (var i = 2; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        document.write(`${i} * ${j} = ${i * j}`);
        document.write('<br>');
    }
    document.write('<br>');
}
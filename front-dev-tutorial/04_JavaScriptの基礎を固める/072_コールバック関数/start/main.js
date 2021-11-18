// function hello(firstName) {
//     console.log('hello ' + firstName());
// }

// function getName() {
//     return 'mahuyu';
// }

// function getFirstName() {
//     return 'asahina';
// }

// hello(() => 'Asahina');

function doSomething(a, b, callback) {
    const result = callback(a, b);
    console.log(result);
}

function multiply(a, b) {
    return a * b;
}

function plus(a, b) {
    return a + b;
}

doSomething(5, 2, multiply);
doSomething(5, 2, plus);
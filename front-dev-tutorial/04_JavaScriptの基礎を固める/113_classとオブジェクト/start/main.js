const obj = {
    first_name: 'asahina',
    last_name: 'mahuyu',
    printFullName: () => {
        console.log('hello');
    }
}

class MyObj {
    constructer() {
        this.first_name = 'Asahina';
        this.last_name = 'Mahuyu';
    }
    printFullName() {
        console.log('hello');
    }
}
const obj2 = new MyObj;

obj.printFullName();
obj2.printFullName();
function Person(ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
    this.sayHello = () => console.log(`Xin chao, toi la ${this.name}, toi ${this.age} tuoi.`);
    this.incrAge = () => this.age++;
}

const khoa = new Person('Khoa Pham', 30);
const teo = new Person('Teo', 18);

// console.log(khoa.name);
// console.log(teo.age);

khoa.name = 'Pham Khoa';
khoa.incrAge();
khoa.sayHello();
// teo.sayHello();

function Person(name, age) {
    this.name = name;
    this.getAge = function() {
        return age;
    }
    this.setAge = function(newAge) {
        // Kiem tra newAge
        age = newAge;
    }
}  

Person.prototype.sayHello = function() {
    console.log('Xin chao, toi la ' + this.name);
}

const khoa = new Person('Khoa Pham', 30);
const teo = new Person('Teo', 20);

// khoa.sayHello()
khoa.sayHello();

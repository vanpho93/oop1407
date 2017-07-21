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

const khoa = new Person('Khoa Pham', 30);
khoa.weight = 100;

console.log(khoa.getAge());
khoa.setAge(33);
console.log(khoa.getAge());
console.log(khoa);
function Company (name, address){
    this.name = name;
    this.address = address;
}

function Person(name, age, company) {
    this.name = name;
    this.age = age;
    this.company = company;
}

const kpt = new Company('KPT', '92 LTR');
const khoa = new Person('Khoa Pham', 30, kpt);

console.log(khoa.company.address);

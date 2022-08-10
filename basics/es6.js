class user {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    getAge(){
        return this.age;
    }
    getFullName(){
        return this.name + " " + this.surname;
    }
}

var u1 = new user("John", "Smith", 30);
var u2 = new user("Jane", "Doe", 25);

console.log(u1.name);
console.log(u1.getAge());
console.log(u2.getFullName());

// var user = {
//     name: "John",
//     surname: "Smith",
//     age: 30,
//     fullname: () =>{
//         return user.name + " " + user.surname;
//     }
// };

// console.log(user.fullname());

function user(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.getAge = () => {
        return this.age;
    }
}

user.prototype.getFullName = function(){
    return this.name + " " + this.surname;
}

var u1 = new user("John", "Smith", 30);
var u2 = new user("Jane", "Doe", 25);

debugger;
console.log(u1.name);
console.log(u1.getAge());
console.log(u2.getFullName());
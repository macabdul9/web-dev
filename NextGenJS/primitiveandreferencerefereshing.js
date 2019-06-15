const person = {
    name : "Abdul Waheed",
    age: 20
};

console.log(person)

const secondPerson = person

console.log(secondPerson)

person.name = "Abdul"

console.log(secondPerson) // outpur will surprise you

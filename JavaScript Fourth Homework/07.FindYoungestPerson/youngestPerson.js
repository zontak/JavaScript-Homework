var persons = [
  { firstname: 'George', lastname: 'Kolev', age: 32 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'Baba', lastname: 'Ginka', age: 40 }]

findYoungestPerson(persons);

function findYoungestPerson(persons) {
    var age = Number.MAX_VALUE;
    for (var i = 0; i < persons.length; i++) {
        if (persons[i].age < age) {
            var ages = persons[i];
            age = persons[i].age;
        }
    }
    return console.log('The youngest person is %s %s', ages.firstname, ages.lastname);
}
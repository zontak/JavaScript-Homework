var foods = ["fries", "banana", "cake"];
variableTypes("pesho", 22, true, foods);

function variableTypes(name, age, isMale, foods) {
    var message = console.log("My name is: " + name + " //type is " + typeof (name) + "\n" +
    "My age: " + age + " //type is " + typeof (age) + "\n" +
    "I am male: " + isMale + " //type is " + typeof (isMale) + "\n" +
    "My favorite foods are: " + foods[0] + ", " + foods[1] + ", " + foods[2] + "\n" +
    "//type is " + typeof (foods));
    return message;
}
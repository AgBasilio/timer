//this js is for things that I learnt on the way but don't have any util place where to put them in the other file
function funcionConArgumentosVariables(...argumentos){
    console.log("Esta funcion recive varios argumentos en la variable argumentos, como un array...");
    console.log(argumentos);
}
//ej. funcion para sumar n numeros
const sumEverything = (...argsArr) => argsArr.reduce((a, b) => a + b, 0);

////sintaxis de desestructuracion
//tengo el obj usr
const usr = {
    name: "pepe",
    age: 42,
    contact: {
        phone: "092-231231",
        email: "pepe@gmail.com"
    }
}
//para desestructurarlo en variables pongo entre {} el nombre de las variables
//si coinciden con el nombre de la propiedad del objeto, se asignan
const {name, age} = usr; //el orden no importa, el nombre de las variables tiene que coincidir.
const {contact: {phone: usrPhone, email: usrEmail}} = usr //se puede acceder a un objeto anidado y cambiar el nombre de la variable a la que se asignara el valor
console.log(name);
console.log(age);
console.log(usrPhone);
console.log(usrEmail);

//Template literals (Template strings)
console.log(`The name of the contact: ${name}, his/her "e-mail" is: ${usrEmail} and 'phone number' is ${usrPhone}. We suggest as user name: ${name+age}`);
//working w/ objs.
const persona = (name, age, language) => ({name, age, language}); //this way we tell js to build and object w/ this parameters.
//working with classes. This classes aren't the same as c# classes, 
///https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class MyClass { //in JS class should start with uppercase
    #theRealPrivateField;
    constructor(fieldOne)
    {
        this._privateFieldOne = fieldOne; // by convention underscore means private, since 2019 # represents private
        this.#theRealPrivateField = fieldOne;
    }

    //Private class features https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

    get giveMeMyPropertie(){
        return this.#theRealPrivateField;
    }

    set privateField(field){
        this.#theRealPrivateField = field;
        this._privateFieldOne = field;
    }
}

// Palíndromo
// La expresión regular nos permite eliminar carácteres que no nos interesan, incluso con el punto devuelve true

function palindrome(word) {
  var regularExpresion = /[\W_]/g;
  var lowRegWord = word.toLowerCase().replace(regularExpresion, '');
  var reverseWord = lowRegWord.split('').reverse().join(''); 
  if (reverseWord === lowRegWord){
  		return true;
  	} 
  	else {
  		return false;
  	}
}

var checkPalindrome = palindrome("Luz azul.");
console.log(checkPalindrome);


// Múltiplos de 7

const numbers = [1, 8, 7, 49, 23, 21, 12, 19, 5, 73, 63, 9, 14];

function checkMultiples(numbers){
	var multiples = [];
	numbers.forEach(function(number) {
		if( number % 7 == 0 ) {
			multiples.push(number);
        }
	})
	return multiples;
}

var multiplesSeven = checkMultiples(numbers);

console.log(multiplesSeven);

// 1ª Pregunta Objetos:

// Respuesta: Obj2 es distinto a obj y obj 3 

// * Aclaración: Cuando obj3 = obj estamos declarando que ambos referencian al mismo valor, por tanto si cambiamos
// el valor de obj3 también se cambia obj, y viceversa. No son objetos iguales e independientes. Así no se "clonan" objetos.

// 2ª Pregunta Objetos:

// Respuesta: Obj y Obj3 son iguales


// Función para seleccionar determinados parámetros de objeto Persona

var person = {
	"name": "John",
	"surname": "Doe",
	"age": "30",
	"country": "Spain",
	"city": "Madrid",
	"employed": "true",
	"dni": "00000000A",
}

function removeProps(person){
	const newPerson = (({ name, age }) => ({ name, age }))(person);
	return newPerson;
}

var updatedPerson = removeProps(person);
console.log(updatedPerson);



// Función para devolver algunos parámetros en un array

function returnProps(person){
	const newProps = { ...person }
	delete newProps.employed;
	delete newProps.dni;
	return (Object.values(newProps)); // Object.keys si queremos devolver el nombre de cada parámetro
}

var propsUpdated = returnProps(person);
console.log(propsUpdated);


// async await

(() => {
	const getTodos = async () => {
		 return await fetch('https://jsonplaceholder.typicode.com/todos/')
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(error => console.log(error));
}
	getTodos();
})();


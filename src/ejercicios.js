'use strict'
// Importo la función "imprimir" desde "utils.js".
// Notar el uso de "desestructuración".
/**
 * Imprimir por consola y en la página.
 *
 * @param  {...any} variables Variables a imprimir
 */
function imprimir(...variables) {
  // Imprimo por consola:
  console.info(...variables);

  // Obtengo el contenedor para la consola buscando
  // el elemento con ID "consola-html" (en el index.html):
  const consola = document.getElementById('consola-html');

  // Creo elemento HTML <hr> para mostrar una línea de
  // separación:
  consola.appendChild(document.createElement('hr'));

  // Creo elemento HTML <pre>:
  const linea = document.createElement('pre');

  // Uno las variables con "join" separando con un espacio
  // y lo asigno al contenido del elemnto HTML <pre> creado:
  linea.innerText = variables.join(' ');

  // Agrego al contenedor "consola":
  consola.appendChild(linea);
}

// Al iniciar, borro lo que hay en la consola actualmente:
console.clear();

// =====================================================
// 1. Crea una Clase para definir a un Usuario genérica.
// Definir la clase "User".
//
// Debe tener las siguientes características:
//   - "username": Nombre de usuario.
//     Propiedad texto (String).
//     Default: null.
//   - "age": Edad.
//     Propiedad numérica (Number).
//     Default: null.
//   - "password": Contraseña.
//     Propiedad texto (String).
//     Default: null.
//   - "loggedIn": Usuario logueado?
//     Propiedad Booleano (Boolean).
//     Default: false (Falso).
//   - "login(): Debe definirse un método que
//     establezca la propiedad "loggedin" en
//     `true` cuando el valor que se pasa por
//     parámetro es igual al 'password' de la
//     instancia actual.
//     Al llamar al método "login()", debe imprimirse el
//     texto 'Usuario [username] ha iniciado sesión' si
//     el 'password' ingresado es correcto, o el texto
//     'Contraseña incorrecta' si la misma es
//     incorrecta.

class User {
  username = null;
  age = Number(null);
  password = null;
  loggedIn = false;
  mayor = false;
  constructor(username, password, age, loggedIn, mayor) {
    this.username = username;
    this.age = age;
    this.password = password;
    this.loggedIn = loggedIn;
    this.mayor = mayor;
  };
  esMayor(){
    if(this.age >= (18)){
      this.mayor = true;
    imprimir(this.username, 'es mayor,puede iniciar session');
    

  } else {
      imprimir(this.username, 'es menor, no puede iniciar session')
    }

  }
  login(username, password, age) {
    if (this.username === username && this.password === password && (this.mayor)) {
      this.loggedIn = true;
      
      imprimir('Usuario', this.username, 'ha iniciado sesión');

    } else {
      this.loggedIn = false;
      imprimir('Usuario, contraseña o edad incorrecta');
    }
  };
  vender() {
    if (this.loggedIn) {
      imprimir(this.username, 'esta listo para vender');
      let carro = [];
      carro.push({
        producto: 'X'
      });
      imprimir(this.username, 'cargo y vendio el', (carro[0]));
    } else {
      imprimir(this.username, 'no inicio sesion');
    }
  }
  comprar() {
    if (this.loggedIn) {
      imprimir(this.username, 'esta listo para comprar');

    } else {
      imprimir(this.username, 'no inicio sesion');
      imprimir([
        'El vendedor', (facu.username),
        ' ha vendido el'(carro),
        ' a ', (faca.username),
      ]);
    }
  };
  
};
class vendedor extends User {
  constructor(username, password, age) {
    super(username, password, age)
  };
  loggedIn = false;
  mayor = false;
};

class comprador extends User {
  constructor(username, password, age) {
    super(username, password, age)
  };

  loggedIn = false;
  mayor = false;
};


const facu = new vendedor('pepe', '1234', 21);
const mari = new comprador('pepa', '4321', 30);

// =====================================================
// 2. Crear la clase "Vendedor" a partir de la clase
// "User".
//
// Ahora, el Vendedor debe poder generar una venta.
// Para ello, se debe agregar un método "vender" al cuál
// se le indique una descripción del producto vendido
// por parámetro. Las ventas deben guardarse en un array
// de ventas interno de la instancia.
//
// Para poder realizar la cción de "vender", el usuario
// debe haber iniciado sesión mediante el método
// "login()" definido en la clase padre.
//
// Documentación recomendada:
//   - https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push

// =====================================================
// 3. Crear la clase "Comprador" a partir de la clase
// "User".
// Ahora, el Comprador debe poder generar una compra.
// Para ello, se debe agregar un método "comprar",
// al cuál se le indique una instancia de Vendedor
// que será quien le ha vendido el producto, y una
// descripción del producto vendido.
//
// Para poder realizar la acción de "comprar", el usuario
// debe haber iniciado sesión mediante el método
// "login()" definido en la clase padre.
//
// Desde el metodo "comprar" se debe agregar el
// producto vendido al vendedor, e imprimir el siguiente
// texto de ejemplo:



// =====================================================
// 4. Modificar las clases anteriores y agregar un
// "constructor" que reciba por parámetros
// los valores de las propiedades "username",
// "password" y "age".

// =====================================================
// 5. Modificar las clases anteriores y agregar un
// método "esMayor()" que devuelva `true` si el usuario
// es mayor de edad (`age >= 18`).

// =====================================================
// 6. Modificar las clases anteriores, de forma tal que
// solo las clases hijas de "User" (o sea: "Vendedor"
// y "Comrpador") verifiquen si "esMayor()" es `true`
// para hacer "login()". Si no es mayor de edad, debe
// mostrar un mensaje "Debes ser mayor de edad" e
// impedir el "login()" definido en "User".

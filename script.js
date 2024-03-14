/*function validarCedula() {
    var cedula = document.getElementById("cedula").value.trim();
    cedula = cedula.replace(/\D/g, '');

    // La cédula dominicana tiene 11 dígitos
    if (cedula.length !== 11) {
        mostrarResultado("La cédula debe tener 11 dígitos.");
        return;
    }

    // Verificar que los primeros dos dígitos sean válidos
    var provincia = parseInt(cedula.substring(0, 2));
    if (provincia < 1 || provincia > 32) {
        mostrarResultado("Los primeros dos dígitos deben estar entre 01 y 32.");
        return;
    }

    // Calcular el dígito verificador
    var suma = 0;
    for (var i = 0; i < 10; i++) {
        var digito = parseInt(cedula.charAt(i));
        if (i % 2 === 0) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }
        suma += digito;
    }
    var modulo = suma % 10;
    var digitoVerificador = modulo === 0 ? 0 : 10 - modulo;

    // Comparar el dígito verificador calculado con el último dígito de la cédula
    if (digitoVerificador === parseInt(cedula.charAt(10))) {
        mostrarResultado("La cédula es válida.");
    } else {
        mostrarResultado("La cédula no es válida.");
    }
}*/

function validarCedula() {
    var cedula = document.getElementById("cedula").value.trim();
    // Eliminar espacios en blanco y guiones si los hay
    cedula = cedula.replace(/\s|-/g, '');

    // Verificar si la cédula tiene 11 dígitos
    if (cedula.length !== 11) {
        mostrarResultado("La cédula debe tener 11 dígitos.");
        return false;
    }

    // Verificar si todos los caracteres son dígitos
    if (!/^\d+$/.test(cedula)) {
        mostrarResultado("Solo se permite Numeros.");
        return false;
    }

    // Obtener el último dígito de la cédula
    var ultimoDigito = parseInt(cedula.charAt(10));

    // Calcular el dígito verificador
    var suma = 0;
    for (var i = 0; i < 10; i++) {
        var digito = parseInt(cedula.charAt(i));
        if (i % 2 === 0) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }
        suma += digito;
    }
    var digitoVerificador = 10 - (suma % 10);
    console.log(digitoVerificador, ultimoDigito)
    if (digitoVerificador === 10) {
        digitoVerificador = 0;
    }

    // Comparar el dígito verificador calculado con el último dígito de la cédula
    //return digitoVerificador === ultimoDigito;
    if (digitoVerificador === ultimoDigito) {
        mostrarResultado("La cédula es válida.");
    } else {
        mostrarResultado("La cédula no es válida.");
    }
}

document.getElementById('cedula').addEventListener('input', function(event) {
    let input = event.target;
    let valor = input.value.replace(/\D/g, ''); // Eliminar cualquier caracter que no sea un dígito
    let longitud = valor.length;

    /*if (longitud > 3) {
        valor = valor.slice(0, 3) + '-' + valor.slice(3);
    }*/

    if (longitud > 8) {
        valor = valor.slice(0, 7) + '-' + valor.slice(7);
    }

    valor = valor.replace(/^(\d{3})(\d{7})(\d{1})$/, '$1-$2-$3');

    input.value = valor;
});


function mostrarResultado(mensaje, esValido) {
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerText = mensaje;
    resultadoElement.className = esValido ? "resultado-valido" : "resultado-no-valido";
}
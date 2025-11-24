// Ejercicio 3
const ejercicio3 = document.getElementById("ejercicio3");
ejercicio3.addEventListener("click", () => {
    try {
        
        console.log("Resultado: "+ dividirNumeros(2, 0));

    } catch (error) {
        console.log(error);
    }
});

const dividirNumeros = (numero1, numero2) => {
    if (numero2 === 0) {
        throw new Error("Division entre 0");
    }

    return numero1/numero2;
};



//Ejercicio 4

const ejercicio4 = document.getElementById("ejercicio4");
ejercicio4.addEventListener("click", () =>{
    try {
        console.log(adwdaw);
    } catch (error) {
        console.error("Error: " + error);
    } finally {
        console.log("Esto siempre se ejecuta");
    }
});


//Ejercicio 5

const ejercicio5 = document.getElementById("ejercicio5");
ejercicio5.addEventListener("click", () => {
    try {
        const parseJson1 =  JSON.parse("adawdwdwd");
        console.log("Nombre: "+parseJson1.nombre);

    } catch (error) {
        if (error instanceof SyntaxError) {
            console.log("Error al momento de parsear");
        }
        else if (error instanceof TypeError) {
            console.log("Dato no tiene la estructura esperada");
        }
        else {
            console.log("Error general: "+error);
        }
    }
});


//Ejercicio 6
function validarEdad(edad) {
    if (edad>0) {
        return;
    }
    throw new Error("Edad invalida");
}

const ejercicio6 = document.getElementById("ejercicio6");
ejercicio6.addEventListener("click", () => {
    try {
        validarEdad(-23);
    } catch (error) {
        console.log(error);
    }
});

//Ejercicio 7

const ejercicio7 = document.getElementById("ejercicio7");
ejercicio7.addEventListener("click", () => {
    const hombre = null;
    try {
        console.log(hombre.edad);
    }
    catch(error) {
        console.log(error);
    }
});

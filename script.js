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
        throw new Error("Division entree 0");
    }

    return numero1/numero2;
};



// Ejercicio 4

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


// Ejercicio 8

const nivel2 = () => {
    throw new Error("Segundo nivel");
    
}

const nivel1 = () => {
    try {
        nivel2();    
    }
    catch {
        throw new Error("Primer nivel");
    }
}

const funp = () => {
    try {
        nivel1();
    } catch (error) {
        console.log(error);
    }
};

const ejercicio8 = document.getElementById("ejercicio8");
ejercicio8.addEventListener("click", () => {
    funp();
});


// Ejercicio 9

const cargarMensaje = (callback9) => {
    console.log("Iniciando Mensaje...");

    setTimeout(() => {
        callback9("Mario");
    }, 1000);

    console.log("Mensaje Intermedio");
}

const saludo = (nombre) => {
    console.log("Mensaje cargado");
    console.log("Hola "+nombre+"!");
};

const ejercicio9 = document.getElementById("ejercicio9");
ejercicio9.addEventListener("click", () => {
    cargarMensaje(saludo)}
);


// Ejercicio 10
const mario = {
    nombre: "Mario",
    id: "1"
};
const pedro = {
    nombre: "Pedro",
    id: "2"
};

function cargarUsuario(callback1) {
    console.log("Cargando usuario...");
    setTimeout(() => {
        callback1(mario);
        callback1(pedro);
    }, Math.floor((Math.random()*1500-800)+800));
}

function mostrarUsuario(objeto) {
    try {
        console.log("Usuario: "+objeto.nombre+"\tID: "+objeto.id);
    } catch (error) {
        console.log("Error al mostrar usuario: "+error);
    }
}

const ejercicio10 = document.getElementById("ejercicio10");
ejercicio10.addEventListener("click", () => {
    cargarUsuario(mostrarUsuario);
});


// Ejercicio 11

function dividirAsync(a, b, callback11) {
    console.log("Cargando Division...");

    setTimeout(() => {
        if (b === 0) {
            callback11("No se puede dividir entre 0", null);
        }
        else {
            callback11(null, a/b);
        }
    }, 1500);
}

function division(observacion, numero) {
    if (observacion != null) {
        console.log(observacion);
    }
    else {
        console.log("Resultado Division: "+numero);
    }
}

const ejercicio11 = document.getElementById("ejercicio11");
ejercicio11.addEventListener("click", () => {
    dividirAsync(1, 20, division);
});


// Ejercicio 12

function procesarNumero(numero) {
    console.log("Numero procesado: "+numero);
}

function procesarLista(listaNumeros, callback12) {
    console.log("Cargando lista...");

    for (let i = 0; i<listaNumeros.length; i++) {
        setTimeout(() => {
            callback12(listaNumeros[i]);
        }, 1000*(i+1));
    }
    setTimeout(() => {
        console.log("Lista procesada exitosamente")
    }, 1000*listaNumeros.length);
}

const listaNumeros = [12, 143, 14, 1, 2, 6, 7, 1, 10];

const ejercicio12 = document.getElementById("ejercicio12");
ejercicio12.addEventListener("click", () => {
    procesarLista(listaNumeros, procesarNumero);
});


// Ejercicio 13

function ejercicio13() {
    console.log("Cargando Mensaje...");

    return new Promise((resolve, reject) =>{ 
        setTimeout(() => {
            const fallo = false;
            
            if (fallo) {
                reject("Mensaje de error");
            }
            else {
                resolve("Mensaje Cargado");
            }
        }, 1000);
    });
}

const ejercicio13btn = document.getElementById("ejercicio13");

ejercicio13btn.addEventListener("click", () => {
    ejercicio13()
        .then(resultado => {
            console.log("Promesa recibida: ", resultado);
        })
        .catch(error => {
            console.log("Error: ", error);
        });
});


//Ejercicio 14

const ejercicio14 = document.getElementById("ejercicio14");
ejercicio14.addEventListener("click", () => {
    cargarUsuario14()
        .then(res => {console.log(res)})
        .catch(err => {console.log("ERROR: "+err)});
});

function cargarUsuario14() {
    console.log("Cargando Usuario...");

    return new Promise((response, reject) => {
        setTimeout(() => {
            response("Nombre: "+pedro.nombre +"\tID: "+pedro.id);
        }, 1500);
    });
}

//Ejercicio 15

const ejercicio15 = document.getElementById("ejercicio15");
ejercicio15.addEventListener("click", () => {
    dividir0(12, 0)
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)});
});

function dividir0(a, b) {
    console.log("---Division---")
    return new Promise((response, reject) => {
        setTimeout(() => {
           if (b === 0) {
            reject("Error: No se puede dividir entre 0");
            }
            else {
                response(a/b);
            } 
        }, 1500);
    });
}


// Ejercicio 16

const ejercicio16 = document.getElementById("ejercicio16");
ejercicio16.addEventListener("click", () => {
    procesarLista(listaNumeros16)
    .then(mensaje => {
        console.log(mensaje);
    });
    
});

function procesarLista(lista) {
    const promesas = lista.map(numero => {
        return new Promise(resolve => {
            const tiempo = Math.random() * (1500 - 500) + 500;

            setTimeout(() => {
                console.log("Procesando " + numero + "...");
                resolve();
            }, tiempo);
        });
    });

    return Promise.all(promesas).then(() => {
        return "Proceso completado";
    });
}

const listaNumeros16 = [12, 143, 14, 1, 2, 6, 7, 1, 10];


//Ejercicio 17

const ejercicio17 = document.getElementById("ejercicio17");
ejercicio17.addEventListener("click", async() => {
    console.log("Iniciando Carga...");
    
    await new Promise(resolve => {
        setTimeout(() => {
            console.log("Mensaje Cargado");
        }, 1000);
    })

});


// Ejercicio 18

const ejercicio18 = document.getElementById("ejercicio18");
ejercicio18.addEventListener("click", async() => {
    console.log("Cargando contenido...")
    await new Promise(resolve => {
        setTimeout(() => {
            console.log("Nombre: "+pedro.nombre +"\tID: "+pedro.id);
        }, Math.random() * (1500 - 800) + 800);
    });
});

// Ejercicio 19

const ejercicio19 = document.getElementById("ejercicio19");
ejercicio19.addEventListener("click", async() => {
    console.log("Cargando Resultado...");
    dividirAsync(12, 0);
})

async function dividirAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject(new Error("No se puede dividir entre cero"));
            } else {
                resolve(a / b);
            }
        }, 1500);
    });
}


// Ejercicio 20
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function procesarLista(listaNumeros) {
    for (const numero of listaNumeros) {
        const tiempo = Math.floor(Math.random() * 1000) + 500; // entre 500 y 1500 ms
        await esperar(tiempo);

        console.log(`Procesando ${numero}...`);
    }

    return "Proceso completado";
}

const ejercicio20 = document.getElementById("ejercicio20");
ejercicio20.addEventListener("click", async() => {
    const mensaje = await procesarLista(listaNumeros);
    console.log(mensaje);
});
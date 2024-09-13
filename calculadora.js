let operacion = ['','',''];
let pantalla = document.getElementById("pantalla");

window.onkeydown = (e) => {
    if(e.key === "Backspace") {
        pantalla.textContent = pantalla.textContent.slice(0,-1);
        for (i = 2; i>= 0; i--) {
            let longitud = operacion[i]?.length;
            if (longitud > 0 ) {
                operacion[i] = operacion[i].slice(0, -1);
                break;
            }else if (longitud === undefined){
                break;
            }
        }
    }
}

function numeros(e) {
    e = e.value;
    validacionNaNEnPantalla();

    if (!operacion[1]) {
        operacion[0] = (operacion[0] || "") + e;
        pantalla.textContent += e;
    } else {
        operacion[2] = (operacion[2] || "") + e;
        pantalla.textContent += e;
    }
    console.log(operacion);
}

const signos = (e) => {
    validacionNaNEnPantalla();
    e = e.value; 

    if (operacion[0] === '') { 
        if (!validacionLargaStartWith(0)) {  
            operacion[0] = e; 
            pantalla.textContent += e; 
            return;
        } else { return; }
    } 
    if (operacion[1] === '' && !validacionLargaEndWith(0)) { 
        operacion[1] = e; 
        pantalla.textContent += e; 
        return;
    }
    if (operacion[2] === '' && operacion[1]) { 
        if (!validacionLargaStartWith(2)) {
            operacion[2] = e; 
            pantalla.textContent += e; 
            return;
        } else { return; }
    } 
}

const calcula = (e) => {
    if (operacion.includes('', 2) || operacion.includes(null, 2)) {
        console.log(operacion);
        resultSaveOnArray(parseInt(operacion[0]));
        return; 
    } 

    switch (e) {
        case "+": {
            resultado = parseInt(operacion[0]) + parseInt(operacion[2]);
            resultSaveOnArray(resultado);
            break;
        }
        case "-": {
            resultado = parseInt(operacion[0]) - parseInt(operacion[2]);
            resultSaveOnArray(resultado);
            break;
        }
        case "*": {
            resultado = parseInt(operacion[0]) * parseInt(operacion[2]);
            resultSaveOnArray(resultado);
            break;
        }
        case "/": {
            resultado = parseInt(operacion[0]) / parseInt(operacion[2]);
            resultSaveOnArray(resultado);
            break;
        }
    }
}
const cleanCalculator = () => {
    operacion = ['', '', ''];
    pantalla.textContent = "";
}

const resultSaveOnArray = (e) => {
    operacion = [`${e}`, '', ''];
    pantalla.textContent = e;
    console.log(operacion);
}

const validacionNaNEnPantalla = () => {
    if(pantalla.textContent === 'NaN') { 
        pantalla.textContent = ''; 
        operacion = ['','',''];
    }
}

const validacionLargaStartWith = (e) => {return operacion[e].startsWith('+') || operacion[e].startsWith('-') || operacion[e].startsWith('*') || operacion[e].startsWith('/');} 
const validacionLargaEndWith = (e) => {return operacion[e].endsWith('+') || operacion[e].endsWith('-') || operacion[e].endsWith('*') || operacion[e].endsWith('/');} 
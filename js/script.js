// Div principal
const divCalculadora = document.createElement("div");

// Input y div para los botones
const inputCalculadora = document.createElement("input");
inputCalculadora.value = 0;
const divBotones = document.createElement("div");

// Botones
const btnBorrarTodo = document.createElement("button");
const btnBorrar = document.createElement("button");
const btnPorcentaje = document.createElement("button");
const btnSuma = document.createElement("button");
const btnResta = document.createElement("button");
const btnMultiplicacion = document.createElement("button");
const btnDivision = document.createElement("button");
const btnIgual = document.createElement("button");
const btnComa = document.createElement("button");
const btnMasMenos = document.createElement("button");

const btnNumeros = [];
for (let i = 0; i < 10; i++) {
  btnNumeros[i] = document.createElement("button");
}

// Texto de los botones
const btnBorrarTodoTexto = document.createTextNode("CE");
const btnBorrarTexto = document.createTextNode("←");
const btnPorcentajeTexto = document.createTextNode("%");
const btnSumaTexto = document.createTextNode("+");
const btnRestaTexto = document.createTextNode("-");
const btnMultiplicacionTexto = document.createTextNode("x");
const btnDivisionTexto = document.createTextNode("÷");
const btnIgualTexto = document.createTextNode("=");
const btnComaTexto = document.createTextNode(",");
const btnMasMenosTexto = document.createTextNode("\u00B1");

const btnNumerosTexto = [];
for (let i = 0; i < 10; i++) {
  btnNumerosTexto[i] = document.createTextNode(i);
}

// Añadir texto a los botones
btnBorrarTodo.appendChild(btnBorrarTodoTexto);
btnBorrar.appendChild(btnBorrarTexto);
btnPorcentaje.appendChild(btnPorcentajeTexto);
btnSuma.appendChild(btnSumaTexto);
btnResta.appendChild(btnRestaTexto);
btnMultiplicacion.appendChild(btnMultiplicacionTexto);
btnDivision.appendChild(btnDivisionTexto);
btnIgual.appendChild(btnIgualTexto);
btnComa.appendChild(btnComaTexto);
btnMasMenos.appendChild(btnMasMenosTexto);

for (let i = 0; i < 10; i++) {
  btnNumeros[i].appendChild(btnNumerosTexto[i]);
}

// Añadir elementos al div principal y al div de los botones
divCalculadora.appendChild(inputCalculadora);
divCalculadora.appendChild(divBotones);

divBotones.appendChild(btnBorrarTodo);
divBotones.appendChild(btnBorrar);
divBotones.appendChild(btnPorcentaje);
divBotones.appendChild(btnSuma);
divBotones.appendChild(btnNumeros[7]);
divBotones.appendChild(btnNumeros[8]);
divBotones.appendChild(btnNumeros[9]);
divBotones.appendChild(btnResta);
divBotones.appendChild(btnNumeros[4]);
divBotones.appendChild(btnNumeros[5]);
divBotones.appendChild(btnNumeros[6]);
divBotones.appendChild(btnMultiplicacion);
divBotones.appendChild(btnNumeros[1]);
divBotones.appendChild(btnNumeros[2]);
divBotones.appendChild(btnNumeros[3]);
divBotones.appendChild(btnDivision);
divBotones.appendChild(btnNumeros[0]);
divBotones.appendChild(btnMasMenos);
divBotones.appendChild(btnComa);
divBotones.appendChild(btnIgual);

// Pintar la calculadora en el body
document.body.appendChild(divCalculadora);

// Estilos
divCalculadora.style.width = "30%";
divCalculadora.style.height = "100%";
divCalculadora.style.backgroundColor = "lightgrey";
divCalculadora.style.border = "3px solid gray";
divCalculadora.style.padding = "2%";

inputCalculadora.style.width = "99%";
inputCalculadora.style.marginBottom = "4%";
inputCalculadora.style.boxSizing = "border-box";
inputCalculadora.style.textAlign = "right";

divBotones.style.width = "100%";
divBotones.style.minHeight = "300px";
divBotones.style.display = "grid";
divBotones.style.gridTemplateColumns = "23% 23% 23% 24%";
divBotones.style.gridColumnGap = "2%";
divBotones.style.gridRowGap = "4%";

// Estilo para cada boton
const btnEstilo = document.querySelectorAll("button");
btnEstilo.forEach((boton) => {
  boton.style.minHeight = "40px";
  boton.style.border = "2px solid gray";
  boton.style.borderRadius = "5px";
  boton.style.fontSize = "20px";
  boton.style.backgroundColor = "white";
  boton.addEventListener("mouseover", () => {
    boton.style.backgroundColor = "#e6e6e6";
  });
  boton.addEventListener("mouseout", () => {
    boton.style.backgroundColor = "white";
  });
});

// COMPORTAMIENTO DEL DISPLAY
const calculadora = {
  display: "0",
  coma: false,
}

// Funciones
const mostrarDisplay = () => {
  inputCalculadora.value = calculadora.display;
};

const resetearDisplay = () => {
  calculadora.display = "0";
  calculadora.coma = false;
  mostrarDisplay();
};

const borrarUltimoCaracter = () => {
  if (calculadora.display.length > 1) {
    calculadora.display = calculadora.display.slice(0, -1);
  } else {
    calculadora.display = "0";
  }
  mostrarDisplay();
};

const cambiarSigno = () => {
  if (calculadora.display != "0") {
    let signo = calculadora.display.charAt(0);
    if (signo == "-") {
      calculadora.display = calculadora.display.slice(1);
    } else {
      calculadora.display = "-" + calculadora.display;
    }
    mostrarDisplay();
  }
};

const agregarComa = () => {
  if (calculadora.coma == false) {
    if (calculadora.display == "") {
      calculadora.display = "0,";
    } else {
      calculadora.display += ",";
    }
    calculadora.coma = true;
    mostrarDisplay();
  }
};

const agregarNumero = (numero) => {
  if (calculadora.display == "0") {
    calculadora.display = numero;
  } else {
    calculadora.display += numero;
  }
  mostrarDisplay();
};

// Eventos
btnNumeros.forEach((boton) => {
  boton.addEventListener("click", () => {
    agregarNumero(boton.textContent);
  });
});

btnComa.addEventListener("click", () => {
  agregarComa();
});

btnMasMenos.addEventListener("click", () => {
  cambiarSigno();
});

btnBorrarTodo.addEventListener("click", () => {
  resetearDisplay();
});

btnBorrar.addEventListener("click", () => {
  borrarUltimoCaracter();
});
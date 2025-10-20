// Tamaño de la matriz y del canvas
const filas = 10;
const columnas = 10;
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");
const cellSize = canvas.width / columnas;

// 🖌️ Función general para dibujar la matriz con colores y números
function dibujarMatriz(matriz) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      const valor = matriz[i][j];

      // 🎨 Color según el valor
      if (valor === 0) ctx.fillStyle = "rgba(115, 190, 233, 1)";
      else if (valor === 1) ctx.fillStyle = "#f3ededff";  
      else if (valor === 2) ctx.fillStyle = "#d5e40aff";
      else ctx.fillStyle = "#000000";

      // 🟩 Dibuja el rectángulo
      ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
      ctx.strokeStyle = "#000";
      ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);

      // 🔢 Dibuja el número en el centro
      ctx.fillStyle = "#000000";
      ctx.font = `${cellSize / 2}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(valor, j * cellSize + cellSize / 2, i * cellSize + cellSize / 2);
    }
  }
}

// Crea matriz vacía
function crearMatriz(valor = 0) {
  const matriz = [];
  for (let i = 0; i < filas; i++) {
    matriz.push(new Array(columnas).fill(valor));
  }
  return matriz;
}

// ---------------------------
// 🚀 Ejercicios
// ---------------------------

// 1. Cuadrado Relleno
function ejercicio1() {
  const matriz = crearMatriz(1);
  dibujarMatriz(matriz);
}

// 2. Marco Interno
function ejercicio2() {
  const matriz = crearMatriz(1);
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (i === 0 || i === filas - 1 || j === 0 || j === columnas - 1) matriz[i][j] = 0;
    }
  }
  dibujarMatriz(matriz);
}

// 3. Cruces
function ejercicio3() {
  const matriz = crearMatriz(0);
  const mid = Math.floor(filas / 2);
  for (let i = 0; i < filas; i++) {
    matriz[mid][i] = 1;
    matriz[i][mid] = 1;
  }
  dibujarMatriz(matriz);
}

// 4. Bordes y Diagonales
function ejercicio4() {
  const matriz = crearMatriz(0);
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (i === 0 || j === 0 || i === filas - 1 || j === columnas - 1) matriz[i][j] = 1;
      if (i === j || i + j === filas - 1) matriz[i][j] = 2;
    }
  }
  dibujarMatriz(matriz);
}

// 5. Bandera
function ejercicio5() {
  const matriz = crearMatriz(0);
  for (let i = 0; i < filas; i++) {
    if (i < 3) matriz[i].fill(1);
    else if (i < 6) matriz[i].fill(2);
    else matriz[i].fill(0);
  }
  dibujarMatriz(matriz);
}

// 6. Relleno Alterno
function ejercicio6() {
  const matriz = crearMatriz(0);
  for (let i = 0; i < filas; i++) {
    matriz[i].fill(i % 2 === 0 ? 1 : 0);
  }
  dibujarMatriz(matriz);
}

// 7. Zig-Zag Horizontal
function ejercicio7() {
  const matriz = crearMatriz(0);
  for (let i = 0; i < filas; i++) {
    matriz[i][i] = 1;
  }
  dibujarMatriz(matriz);
}

// 8. Espiral (simplificada)
function ejercicio8() {
  const matriz = crearMatriz(0);
  for (let i = 0; i < filas; i++) {
    matriz[0][i] = 1;
    matriz[filas - 1][i] = 1;
    matriz[i][0] = 1;
    matriz[i][columnas - 1] = 1;
  }
  for (let i = 1; i < filas - 1; i++) {
    matriz[2][i] = 1;
    matriz[4][i] = 1;
    matriz[6][i] = 1;
  }
  dibujarMatriz(matriz);
}

// 9. Triángulo Superior Izquierdo
function ejercicio9() {
  const matriz = crearMatriz(0);
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j <= i; j++) {
      matriz[i][j] = 1;
    }
  }
  dibujarMatriz(matriz);
}

// 10. Triángulo Inferior Derecho
function ejercicio10() {
  const matriz = crearMatriz(0);
  for (let i = 0; i < filas; i++) {
    for (let j = columnas - 1; j >= columnas - 1 - i; j--) {
      matriz[i][j] = 1;
    }
  }
  dibujarMatriz(matriz);
}

// 11. Cuadrícula
function ejercicio11() {
  const matriz = crearMatriz(0);
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (i % 2 === 0 || j % 2 === 0) matriz[i][j] = 1;
    }
  }
  dibujarMatriz(matriz);
}

// 🔄 Limpiar matriz
function limpiarMatriz() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 12. Triángulo Central
function ejercicio12() {
  const matriz = crearMatriz(0);
  const centro = Math.floor(columnas / 2);
  let ancho = 0;
  for (let i = 1; i <= 5; i++) {
    for (let j = centro - ancho; j <= centro + ancho; j++) {
      matriz[i][j] = 1;
    }
    ancho++;
  }
  dibujarMatriz(matriz);
}

// 13. Rombos Concéntricos
function ejercicio13() {
  const matriz = crearMatriz(0);
  const centro = Math.floor(filas / 2);
  for (let d = 1; d <= centro; d += 2) {
    for (let i = -d; i <= d; i++) {
      const j = d - Math.abs(i);
      matriz[centro + i][centro + j] = 1;
      matriz[centro + i][centro - j] = 1;
    }
  }
  dibujarMatriz(matriz);
}

// 14. Cruces Concéntricas
function ejercicio14() {
  const matriz = crearMatriz(0);
  for (let offset = 2; offset < filas / 2; offset += 2) {
    for (let i = offset; i < filas - offset; i++) {
      matriz[offset][i] = 1;
      matriz[filas - 1 - offset][i] = 1;
      matriz[i][offset] = 1;
      matriz[i][columnas - 1 - offset] = 1;
    }
  }
  dibujarMatriz(matriz);
}

// 15. Bandera Diagonal
function ejercicio15() {
  const matriz = crearMatriz(0);
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j <= i; j++) {
      matriz[i][j] = 1;
    }
  }
  dibujarMatriz(matriz);
}

// 16. Cuadrado dentro de Cuadrado
function ejercicio16() {
  const matriz = crearMatriz(0);
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (i === 0 || j === 0 || i === filas - 1 || j === columnas - 1) matriz[i][j] = 1;
      if (i >= 2 && i <= 7 && j >= 2 && j <= 7) {
        if (i === 2 || i === 7 || j === 2 || j === 7) matriz[i][j] = 2;
      }
    }
  }
  dibujarMatriz(matriz);
}

// 17. Bordes y Centro
function ejercicio17() {
  const matriz = crearMatriz(0);
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (i === 0 || j === 0 || i === filas - 1 || j === columnas - 1) matriz[i][j] = 1;
      if (i >= 3 && i <= 6 && j >= 3 && j <= 6) matriz[i][j] = 2;
    }
  }
  dibujarMatriz(matriz);
}

// 18. Líneas Paralelas
function ejercicio18() {
  const matriz = crearMatriz(0);
  for (let i = 0; i < filas; i++) {
    if (i % 2 === 0) matriz[i].fill(1);
    for (let j = 0; j < columnas; j++) {
      if (j % 2 === 0) matriz[i][j] = 1;
    }
  }
  dibujarMatriz(matriz);
}

// 19. Marcas de Cruz
function ejercicio19() {
  const matriz = crearMatriz(0);
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if ((i + j) % 4 === 0 || (i - j + columnas) % 4 === 0) matriz[i][j] = 1;
    }
  }
  dibujarMatriz(matriz);
}

// 20. Rombo de Esquinas
function ejercicio20() {
  const matriz = crearMatriz(0);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4 - i; j++) {
      matriz[i][j] = 1;
      matriz[i][columnas - 1 - j] = 1;
      matriz[filas - 1 - i][j] = 1;
      matriz[filas - 1 - i][columnas - 1 - j] = 1;
    }
  }
  dibujarMatriz(matriz);
}

// 21. Relleno de Ajedrez
function ejercicio21() {
  const matriz = crearMatriz(0);
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      matriz[i][j] = (i + j) % 2;
    }
  }
  dibujarMatriz(matriz);
}

// 22. Reloj de Arena
function ejercicio22() {
  const matriz = crearMatriz(0);
  for (let i = 0; i < filas; i++) {
    for (let j = i; j < columnas - i; j++) {
      if (i < filas / 2) matriz[i][j] = 1;
      else matriz[i][columnas - 1 - j] = 1;
    }
  }
  dibujarMatriz(matriz);
}

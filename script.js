
let contador = 0;
const contadorElemento = document.getElementById("contador");

document.getElementById("incrementar").addEventListener("click", () => {
    contador++;
    contadorElemento.textContent = contador;
});

document.getElementById("decrementar").addEventListener("click", () => {
    if (contador > 0) {
        contador--;
    } else {
        alert("O contador já está em zero!");
    }
    contadorElemento.textContent = contador;
});

const input = document.getElementById("inputTexto");
const contadorCaracteres = document.getElementById("contadorCaracteres");
const areaParagrafos = document.getElementById("paragrafos");

// Contador de caracteres (sem espaços)
input.addEventListener("input", () => {
    let texto = input.value.replace(/\s/g, "");
    contadorCaracteres.textContent = texto.length + " caracteres";
});

// Adicionar parágrafo ao pressionar ENTER
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {
        const p = document.createElement("p");
        p.textContent = input.value;
        areaParagrafos.appendChild(p);
        input.value = "";
        contadorCaracteres.textContent = "0 caracteres";
    }
});

const listasContainer = document.getElementById("listas");

document.getElementById("adicionarLista").addEventListener("click", () => {
    const tipo = document.getElementById("tipoLista").value;

    const lista = document.createElement(tipo);

    for (let i = 1; i <= 3; i++) {
        const item = document.createElement("li");
        item.textContent = "Item " + i;
        lista.appendChild(item);
    }

    listasContainer.appendChild(lista);
});

document.getElementById("resetar").addEventListener("click", () => {
    contador = 0;
    contadorElemento.textContent = "0";

    input.value = "";
    contadorCaracteres.textContent = "0 caracteres";

    areaParagrafos.innerHTML = "";
    listasContainer.innerHTML = "";
});

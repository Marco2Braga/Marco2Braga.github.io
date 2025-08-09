// let amigos = [];

// function adicionarAmigo() {
//     let campoNome = document.getElementById('amigo');
//     let nome = campoNome.value.trim();

//     if (nome === "") {
//         alert("Por favor, insira um nome.");
//         return;
//     }

//     amigos.push(nome);
//     atualizarLista();
//     campoNome.value = "";
// }

// function atualizarLista() {
//     let lista = document.getElementById("listaAmigos");
//     lista.innerHTML = "";

//     for (let i = 0; i < amigos.length; i++) {
//         let li = document.createElement("li");
//         li.textContent = amigos[i];
//         lista.appendChild(li);
//     }
// }

// function sortearAmigo() {
//     //Validar se há amigos na lista
//     if (amigos.length === 0) {
//         alert("A lista está vazia. Adicione nomes antes de sortear.");
//         return;
//     }

//     //Gerar índice aleatório
//     let indiceAleatorio = Math.floor(Math.random() * amigos.length);

//     //Obter o nome sorteado
//     let amigoSorteado = amigos[indiceAleatorio];

//     //Mostrar resultado na tela
//     let resultadoElemento = document.getElementById("resultado");
//     resultadoElemento.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;

//     //Limpar a lista e o array para recomeçar
//     amigos = [];
//     document.getElementById("listaAmigos").innerHTML = "";
// }


let amigos = [];

function adicionarAmigo() {
    let campoNome = document.getElementById('amigo');
    let nome = campoNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    campoNome.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // 1. Validar lista
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    // 2. Gerar índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obter nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar resultado
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;

    // 5. Reiniciar jogo
    amigos = []; // limpa array
    document.getElementById("listaAmigos").innerHTML = ""; // limpa lista HTML
    document.getElementById("amigo").value = ""; // limpa campo de entrada
}

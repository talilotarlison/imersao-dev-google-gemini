
// Dados para criar o conteúdo dinamicamente
import dados from "./db.js"

console.log(dados)

// Função para criar o conteúdo
function createContent(item) {
    const container = document.querySelector('.resultados-pesquisa');

    const itemResultado = document.createElement('div');
    itemResultado.className = 'item-resultado';

    const title = document.createElement('h2');
    const titleLink = document.createElement('a');
    titleLink.href = item.link;
    titleLink.textContent = item.nome;
    title.appendChild(titleLink);

    const description = document.createElement('p');
    description.textContent = item.descricao;

    const moreInfoLink = document.createElement('a');
    moreInfoLink.href = item.link;
    moreInfoLink.textContent = "Mais informações";

    itemResultado.appendChild(title);
    itemResultado.appendChild(description);
    itemResultado.appendChild(moreInfoLink);

    container.appendChild(itemResultado);
}

// Chama a função para criar o conteúdo

function showData(dados){
    document.querySelector('.resultados-pesquisa').innerHTML = "";

    dados.map((atletas)=>{
            createContent(atletas);
        })
}
// funcao que faz a busca de resultados

let busca = document.querySelector(".buscar");
let btn = document.querySelector("button");

btn.addEventListener('click', ()=> {
    const buscaValor = busca.value.toLowerCase();
    const resultadosFiltrados = dados.filter(item => 
        item.nome.toLowerCase().includes(buscaValor)
    );

    //console.log(resultadosFiltrados);
    if(resultadosFiltrados.length == 0){
        showData(resultadosFiltrados);  
        document.querySelector('.resultados-pesquisa').innerText = "Dados não encontrado!!"; 
        return 
    }
    showData(resultadosFiltrados);
        
});


showData(dados);


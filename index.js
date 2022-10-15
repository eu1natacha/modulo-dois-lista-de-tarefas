let id = 0

const tarefa = (id, novaTarefa) => `<div id='${id}'>
                                       <p> ${novaTarefa} </p>
                                       <input type="checkbox"/>
                                    </div>`

function adicionarTarefa(){
    id++;
    const novaTarefa = document.getElementById('nome-tarefa').value
    document.querySelector('#lista-tarefas').innerHTML += tarefa(id, novaTarefa) 
// O conteudo HTML do elemento de id lista-tarefas do document agrega o valor da variavel tarefa
}



















// Rascunho de função, document.createElement, querySelector,
// element.innerHTML, id, appendChild

// function adicionarTarefa(){
//     id++
//     const tarefa = document.createElement ('div')
//     const nomeTarefa = document.createElement('p')
//     const checkbox = document.createElement('input')
//     tarefa.innerHTML = 'Tarefa'
//     checkbox.type = 'checkbox'
//     tarefa.id = id
//     tarefa.appendChild(nomeTarefa)
//     tarefa.appendChild(checkbox)
//     document.querySelector('#lista-tarefas').appendChild(tarefa)
//     // É anexado o elemento tarefa como último filho de
//     // qualquer elemento do document que tenha #id "id-tarefa"
// }


// Rascunho de String concatenada x Template String

// String concatenada com variável
// 'Bem-vinda ' + nome

// Template string
// `Bem-vinda ${nome}`

// Com template string é possível escrever HTML dentro de JS:
// const exemplo = `<div><p>exemplo</p></div>`
// document.querySelector('#id-exemplo').innerHTML = exemplo

// const nomeDaNatacha = `<div><p>Natacha Carvalho</p></div>`
// document.querySelector('#127173').innerHTML = nomeDaNatacha
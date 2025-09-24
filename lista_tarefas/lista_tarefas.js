class Tarefa{
    constructor(descricao){
        this.descricao = descricao
        this.status = "Pendente"
    }
    marcar_como_concluida(){
        this.status = "Concluída"
        renderizar_lista()
    }
    
}
let tarefas = []
function renderizar_lista(){
    document.getElementById("lista").innerHTML = ''
    let status_tarefa, descricao;
    for(let i = 0; i < tarefas.length; i++){
        status_tarefa = tarefas[i].status
        descricao = tarefas[i].descricao
        document.getElementById("lista").innerHTML += `
        <li id="tarefa${i}">
        <h4 class="titulo_tarefa">Tarefa ${i + 1}</h4>
        <b><p>Descricao:</b> ${descricao}</p>
        <b><p>Situaçāo:</b> ${status_tarefa}</p>
        <button onclick="tarefas[${i}].marcar_como_concluida()">Marcar como concluida</button><br>
        </li>`
        if(tarefas[i].status == "Concluída"){
            document.getElementById(`tarefa${i}`).style.backgroundColor = "green"
        }
    }
}
function adicionar_tarefa(){
    let descricao_tarefa = document.getElementById("tarefa").value
    if(descricao_tarefa != ""){
        const tarefa = new Tarefa(descricao_tarefa)
        tarefas.push(tarefa)
        document.getElementById("tarefa").value = ""
        renderizar_lista()
    }
}
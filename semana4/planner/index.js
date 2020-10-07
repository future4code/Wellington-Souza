function criarTarefa (){
    const minhaTarefa = document.getElementById ("tarefa")
    const escolhaDia = document.getElementById ("dias-semana").value
    const listaTarefa = document.getElementById (escolhaDia)

    
    

    if (minhaTarefa.value === ""){
        alert("Digite uma tarefa!!")
    }else{
        listaTarefa.innerHTML += `<li>${minhaTarefa.value}</>`
         minhaTarefa.value = ""
    }
    
}









let postCriado = []

function criarPost (){
    let tituloPost = document.getElementById("titulo-post")
    let autorPost = document.getElementById("autor-post")
    let conteudoPost = document.getElementById("conteudo-post")
    let ondeEscrever = document.getElementById ("container-de-posts")
    let imagemPost = document.getElementById ("imagem-post")
    

    let artigo = {
        titulo: tituloPost.value,
        autor: autorPost.value,
        conteudo: conteudoPost.value,
        imagem: imagemPost.value
    }
   
    postCriado = [...postCriado, artigo]
   

    ondeEscrever.innerHTML += `<section><h1>${tituloPost.value}</h1><p>${autorPost.value}</p><p>${conteudoPost.value}</p></section>`
    
    if (imagemPost.value.includes("http")){
        ondeEscrever.innerHTML += `<img src="${imagemPost.value}"</img>`
    }

    tituloPost.value = ""
    autorPost.value = ""
    conteudoPost.value = ""
    imagemPost.value = ""

    
}







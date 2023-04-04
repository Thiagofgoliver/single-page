// configuração do lightbox


lightbox.option({
    'imageFadeDuration':300,
    'fadeDuration':300,
    'albumLabel': "foto  %1  de %2",

    'resizeDuration':300,
})

//inicializaçao da pluglin  aos animate js


AOS.init();



//tratamento do campo range função de execução automatica

//os codigos aqui dentro fica encapsulados 
( ()=> {
//variaveis para selecionar os elementos

const FIELD_IDADE = document.getElementById('idade')

const TXT_IDADE = document.getElementById('txt-idade')

//txt-idade mostra o valor do banco  idade 

TXT_IDADE.innerText = FIELD_IDADE.value


//atualizar a idade com evento de usuario

FIELD_IDADE.addEventListener('change',()=> {
    TXT_IDADE.innerText = FIELD_IDADE.value
})


} )()



// TRATAMENTO PARA OS CAMPOS ESTADOS E CIDADE
//( () => {}) ()

const URL_ESTADOS ='https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
var estados =document.getElementById('estados')

// o primeiro then captura dados na variavel response
// o segundo trata os dados recebidos
// o catch vai tratar os erros
// //fetch (URL_ESTADOS).then(Response =>{Response.json()}).then(json).catch( erro => {alert(erro)}
//concatenação


 //onde usar chaves no js :

 // quando uma variavel que executa uma unica função nao coloca chaves,coloque chaves quando for executar mais de umas 

fetch (URL_ESTADOS).then(Response =>Response.json()).then( 
    
   json => {  
    
 //inicia a variavel option  com os itens da lista

 let options = '<option>Selecione Um Estado</option>'


 //Laço para CONCATENAR a variavel option com
 //todos estados
 //usar clasi `` para renderizar json entre ${}

 for (const i in json ) {
    options += `<option value="${json[i].id}">${json[i].nome}</option>`
    
 
 }



 //Mostre dentro do select estados
estados.innerHTML= options


}
  
   
).catch( erro => alert ('houve um erro na consulta:' + erro))

//Quando o campo estados  for atualizados, o campo cidades será preenchido

estados.addEventListener('change',()=>{
   let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estados.value}/municipios`

let cidades = document.getElementById('cidades')
let options = '<option>Selecione uma cidade</option> ' 


fetch(url).then(Response => Response.json()).then(json =>{
       for (const i in json) {
          options +=`<option value ="${json[i].nome}">${json[i].nome}</option>`
       }

       cidades.innerHTML = options

}).catch(erro => alert(`erro na conexão -$ {erro}`))




})


// mostra a seta quando rolagem for maior que x

//função rolagem
const rolagem = () =>{
   const tela = document.querySelector('html')
   const seta =document.querySelector('.seta-sobe')
   // console.log(tela.scrollTop)
   if(tela.scrollTop >600){
      seta.style.display='block'

   }else{
      seta.style.display='none'

   }
}

//window.addEventlistener =('scroll',rolagem)


window.onscroll =() => rolagem()

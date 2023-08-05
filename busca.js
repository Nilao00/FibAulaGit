const searchWord = document.getElementById('textWord');

const db = "Essa é a frase encontrada no banco de dados. Ola mundo";

const palavra = document.querySelector('#search');

function buscaPalavra(){
  if(db.toLowerCase().includes(palavra.value.toLowerCase())){
    searchWord.innerHTML = 'Essa palavra existe!';
    return;
  }
   searchWord.innerHTML = 'Não existe essa palavra!';  
}

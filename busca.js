const searchWord = document.getElementById('textWord');

const db = "Essa é a frase encontrada no banco de dados. Ola mundo";

const palavra = document.querySelector('#search');

/**
 * A function that searches for a word and displays a message based on its existence.
 *
 * @param {string} palavra.value - The word to be searched.
 * @return {undefined} No return value.
 */
function buscaPalavra(){
  if(!palavra.value){
    searchWord.innerHTML = 'Digite alguma palavra!';
    return;
  }

  if(db.toLowerCase().includes(palavra.value.toLowerCase())){
    searchWord.innerHTML = 'Essa palavra existe!';
    return;
  }
  
   searchWord.innerHTML = 'Não existe essa palavra!';  
}

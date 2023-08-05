const searchWord = document.getElementById('textWord');

let palavra = 'Ola mundo';

if(palavra.includes('mundo')){
    searchWord.innerHTML =  'Essa palavra existe!';
    return true;
}
 searchWord.innerHTML = 'Não existe essa palavra!'
 return false;
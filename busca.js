const searchWord = document.getElementById('textWord');

const palavra = 'Ola mundo';

if(palavra.includes('mundo')){
    searchWord.innerHTML = 'Essa palavra existe!';
}else{
    searchWord.innerHTML = 'Não existe essa palavra!';
}

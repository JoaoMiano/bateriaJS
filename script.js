document.querySelector('body').addEventListener('keyup',(event)=>{ //fica aguardando o usuario clicar em uma tecla
    playSong(event.code.toLowerCase());                            //para tocar o som 
});

document.querySelector('#button').addEventListener('click',(event)=>{
    let song = document.querySelector('#composition').value //pego o que o usuario digitou como string
    
    if(song != ''){
        let songArray = song.split(''); //tranforma a string em um array dos caracteres
        playComposition(songArray) 
    }
});
document.querySelector('.keysArea').addEventListener('click',(event)=>{
    let key = event.target.id
    playSong(key)
})


function playSong(key){
    let sound = document.querySelector(`#s_${key}`); //pego o som do html
    let keyElement =  document.querySelector(`#${key}`); // pego a div que esta a imgem de referencia da tecla
    if(sound){
        sound.currentTime = 0; //volta o som para o inicio
        sound.play(); //toca o som
    }

    if(keyElement){
        keyElement.classList.add('active'); //adiciona a classe no elemento

        setTimeout(()=>{            //remove a classe depois de 200milesegundos
            keyElement.classList.remove('active')
        }, 200)
    }
};

function playComposition(array){
    let wait = 0 // inicia com o tempo de espera para o proximo som em 0
    
    for(let songItem of array){
        setTimeout(()=>{
            playSong(`key${songItem}`) // para cada letra do array chama a função de tocar qwe
        }, wait)
        wait += 250
    }
}
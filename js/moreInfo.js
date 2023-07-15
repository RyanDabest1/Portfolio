let background1 = document.querySelector('.mainSec');
let text1 = document.querySelector('.mainText1');

background1.addEventListener('mouseover', ()=>{
    background1.classList.toggle('mainSecChanged')
    text1.classList.toggle('mainText1Changed')
})
background1.addEventListener('mouseout', ()=>{
    background1.classList.remove('mainSecChanged')
    text1.classList.remove('mainText1Changed')
})

document.addEventListener('click', (e)=>{
  if(e.target.className.indexOf('fa-sharp fa-regular fa-circle-xmark') !== -1 || e.target.className.indexOf('bottomBar__close') !== -1 ){
    document.body.removeChild(e.target.parentElement.parentElement.parentElement)
  }

})

let music = document.querySelector('.backgroundMusic');

document.onclick = playMusic;

function playMusic(){
  music.play();
}
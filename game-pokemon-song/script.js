
function playsound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return; //
    audio.currentTime = 0;//permet la répétion du son au click infini
    audio.play();//permet la lecture du song 
    
    key.classList.add("playing")//permet de changer la couleur de la bordure comme def en css


};

function removeTransition(e){
    if(e.propertyName !== "transform") return;// eviter de l'exection d'autre propriété native 
    this.classList.remove("playing")// permter l'anumation de l'animation 

}
const keys = document.querySelectorAll(".key")//selecionne toutes les div avec la class key

keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener('keydown', playsound)
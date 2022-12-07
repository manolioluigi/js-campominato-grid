//Dichiariamo le variabili

let bottone;
let flag = false;
const griglia = document.getElementById('griglia');

//Creiamo la funziona per la il cubetto

function creaCubetto(){
    const cubettoAttuale = document.createElement('div');
    cubettoAttuale.classList.add('cubetto');
    return cubettoAttuale;
}

//Richiamiamo il bottone e creiamo la griglia

bottone = document.getElementById("play");
bottone.addEventListener(`click`, function(){

    griglia.innerHTML = " ";

        for(let i = 1; i<=100; i++){
            
            const cubetto = creaCubetto();
            cubetto.addEventListener('click', function(){
                this.classList.toggle('background-blue');
                console.log("Ho cliccato la casella: "+i);
            })
            cubetto.innerText = i;
            griglia.appendChild(cubetto);
            
        }

}
);


let etat = document.querySelectorAll(".grid-item")
// [item1 , ... , item9]   poser l'Etat du jeu au tout debut 
const PLAYER = prompt("player:") //déclarer 2 constante qui ne peut plus etre declaré à nouveau 
// Prompt pour permettre aux joueurs  de choisir son personnage ainsi que celui de l'ordinateur (bot )
const BOT = prompt("bot:")

let end = false // etat du  jeu

function choiseCase(id) {
    update(id[id.length - 1]);
}
 
function update(id) {
    // Mivoka amilay function raha efa misy zavatra anatinle id
    // Pour afficher dans la fonction quand il y a changement dans les id 
    if (etat[id - 1].innerText != "") return
    etat[id - 1].innerText = PLAYER
    checkWin(PLAYER) // ceci va verifier le gagnant

    if(end) return 
    else {
        playBot() 
        checkWin(BOT) // ceci va verifier le gagnant 
    } 
}

function playBot() // C'est la fonction qui encadrera le bot avec les conditions 
{
    let choixRobot
    do {
        choixRobot = parseInt(Math.random() * 9) // 
        // mettre parse int pour mettre les nombres en entier c'est a dire sans virgule 
    } while (etat[choixRobot].innerText != "")
    etat[choixRobot].innerText = BOT
}

/*
012
345
678
*/

("X" == "X" == "X") && ("X" != "X")

function checkWin(winner) {
    let newTab = []
    etat.forEach(e => newTab.push(e.innerText)) // changement de tous les etats 
    // Poser les conditions pour qu'il y a un gagnant

    if (
        (newTab[0] === newTab[1] && newTab[1] === newTab[2] && newTab[2] != "") ||
        (newTab[3] === newTab[4] && newTab[4] === newTab[5] && newTab[5] != "") ||
        (newTab[6] === newTab[7] && newTab[7] === newTab[8] && newTab[8] != "") ||
        (newTab[0] === newTab[3] && newTab[3] === newTab[6] && newTab[6] != "") ||
        (newTab[1] === newTab[4] && newTab[4] === newTab[7] && newTab[7] != "") ||
        (newTab[2] === newTab[5] && newTab[5] === newTab[8] && newTab[8] != "") ||
        (newTab[0] === newTab[4] && newTab[4] === newTab[8] && newTab[8] != "") ||
        (newTab[2] === newTab[4] && newTab[4] === newTab[6] && newTab[6] != "")

    ) {

        alert(`WINNER ${winner} 🥳`)
        upScore(winner) // chargement de la page avec le score à chaque fois ou il y aura un gagnant 
        end = true
    }
}

function upScore(winner) //fonction pour voir les scores 
{
    if(winner == PLAYER) document.getElementById('P').innerText = parseInt(document.getElementById('P').innerText) + 1
    if(winner == BOT) document.getElementById('B').innerText = parseInt(document.getElementById('B').innerText) + 1
}

function reset()
//une fonction qui va permettre de recommencer le jeu a chaque fois où le player appui sur le bouton
 {
    end = false
    for (let i = 0;i< etat.length;i++) {
        etat[i].innerText = ""
    }
    document.getElementById('P').innerText = 0
    document.getElementById('B').innerText = 0
}






const liste = document.querySelector(".question");
let arrayBtn = [0, 0, 0, 0, 0]; 



// Fonction qui détecte l'appui sur un bouton
function btnSelecting(btnNumber) {
    let currentButton = liste;

    console.log("click");
    


    //Boucle pour actualiser l'état des boutons
    for(let i=0; i<5; i++) {  
        
        if (i == btnNumber && arrayBtn[i] != 1) {                           // Bouton appuyé
            currentButton.classList.add("selected");

            // currentButton.style.backgroundColor = "#26C2AD";
            console.log("btn " + btnNumber + " cliqué");
            arrayBtn[i] += 1;
        }    

        else {                                                              // Remet à l'état initial les autre boutons
            currentButton.classList.remove("selected");
            // currentButton.removeAttribute("style");
            arrayBtn[i] = 0;
        }

        currentButton = currentButton.nextElementSibling;                   // Passe au bouton suivant
    }
    console.log(arrayBtn);                                                  // Affiche le tableau d'état
};





window.onload = function() {
    document.body.className += " loaded";
}
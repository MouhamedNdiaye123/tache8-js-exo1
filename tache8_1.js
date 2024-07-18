// Créez un tableau de nombres et utilisez la méthode .map() pour doubler chaque nombre du tableau.

let tab =[9, 5, 3, 7, 2, 6, 4, 8]

    alert("Avant utilisation de la methode map: "+ tab)
let doubleNumber = tab.map((item) => item*2);
    alert("Apres utilisation de la methode map: "+ doubleNumber)
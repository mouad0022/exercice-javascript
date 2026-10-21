function trier(tableau) {
    var temp;
    for (var i = 0; i < tableau.length; i++) {
        for (var j = 0; j < tableau.length - 1; j++) {
            if (tableau[j] > tableau[j + 1]) {
                temp = tableau[j];
                tableau[j] = tableau[j + 1];
                tableau[j + 1] = temp;
            }
        }
    }
    return tableau;
}

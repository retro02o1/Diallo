// ecrit une fonction javascript qui fais la factorielle d'un nombre cest tout!

function factorielle(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}


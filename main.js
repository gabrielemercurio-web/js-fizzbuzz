// Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:
// al posto dei multipli di 3 stampi "Fizz"
// al posto dei multipli di 5 stampi "Buzz"
// al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"
//-----------------------------------------------------------------------------------------

// multipli di 3


for (var i = 1; i < 101; i++) {

    var multipli_3 = (i % 3 == 0);
    var multipli_5 = (i % 5 == 0);

    // Calcolare i numeri che sono multipli di 3
    if (multipli_3 && multipli_5) {
        // Se multiplo di 3 scrivere la parola 'Fizz' al posto del numero multiplo di 3
        console.log('Fizz' + 'Buzz');

    // Calcolare i numeri che sono multipli di 5
    } else if (multipli_3) {
        // Se multiplo sia di 3 che di 5 scrivere la parola 'FizzBuzz' al posto del numero multiplo di 3 e di 5
        console.log('Fizz');

    } else if (multipli_5) {
        // Se multiplo di 5 scrivere la parola 'Buzz' al posto del numero multiplo di 5
        console.log('Buzz');

    // Calcolare i numeri che sono multipli di 3 e di 5
    } else {
        // Scrivere numeri da 0 a 100 in sequenza, tranne i multipli di 3 e di 5
        console.log(i);
    }
}

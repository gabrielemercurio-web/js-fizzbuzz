var fizz = false;
var buzz = false;
var fizzbuzz = false;

//Calcorare i multipli di 3
var multiplo_3 = ([i] % 3 == 0);

//Calcorare i multipli di 5
var multiplo_5 = ([i] % 5 == 0);

// Scrivi un programma che stampi i numeri da 1 a 100
for (var i = 0; i < 101; i++) {
    console.log([i]);

    if ([i] == multiplo_3) {
        fizz = true;
        console.log([i] = 'Fizz');
    }
    else if ([i] == multiplo_5) {
        buzz = true;
        console.log([i] = 'Buzz');

    } else if (([i] == multiplo_3) && ([i] == multiplo_5)) {
        fizzbuzz = true;
        console.log([i] = 'FizzBuzz');
    }
}

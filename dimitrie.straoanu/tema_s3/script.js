var compareValues = function () {

    var result;
    var a = prompt("Insert first number:");


    if (Number(a)) {

        var b = prompt("Insert second number:");

        if (Number(b)) {

            if (Number(a) === Number(b)) {
                result = true;
                alert(result + "\nNumbers are the same!");
            } else {
                result = false;
                alert(result + "\nNumbers are different!");
            }

        } else {
            alert("This is not a number!\nTry again.");
        }

    } else {
        alert("This is not a number!\nTry again.");
    }
}


var compareValuesAgain = function () {

    var result;
    var a = prompt("Insert first number:");

    if (Number(a)) {

        var b = prompt("Insert second second:");

        if (Number(b)) {

            if (Number(a) < Number(b)) {
                result = -1;
                alert("Your result: " + result);
            } else if (Number(a) === Number(b)) {
                result = 0;
                alert("Your result: " + result);
            } else {
                result = 1;
                alert("Your result: " + result);
            }

        } else {
            alert("This is not a number!\nTry again.");
        }

    } else {
        alert("This is not a number!\nTry again.");
    }
}

var returnMax = function () {

    var a = prompt("Insert first number:");

    if (Number(a)) {

        var b = prompt("Insert second second:");

        if (Number(b)) {

            if (a > b) {
                alert("Maximum is: " + a);
            } else {
                alert("Maximum is: " + b);
            }

        } else {
            alert("This is not a number!\nTry again.");
        }

    } else {
        alert("This is not a number!\nTry again.");
    }

}

var returnMin = function () {

    var a = prompt("Insert first number:");

    if (Number(a)) {

        var b = prompt("Insert second number:");

        if (Number(b)) {

            if (a < b) {
                alert("Minimum is: " + a);
            } else {
                alert("Minimum is: " + b);
            }

        } else {
            alert("This is not a number!\nTry again.");
        }

    } else {
        alert("This is not a number!\nTry again.");
    }

}


var sumNaturalNumbersN = function () {

    var a = prompt("Insert limit number:");
    var sum = 0;
    var natNr = 0;

    if (Number(a)) {
        for (var i = 1; i <= Number(a); i++) {
            natNr++;
            sum = sum + natNr;
        };
        alert("Sum of first " + a + " natural numbers is: " + sum);
    } else {
        alert("This is not a number!\nTry again.");

    }

}

var primeNumberCheck = function () {

    var a = prompt("Insert number to check.")
    var divisor = 2;
    var isPrimeNumber = true;

    if (Number(a)) {

        for (var i = 2; i < Number(a); i++) {

            if ((Number(a) % divisor) === 0) {
                isPrimeNumber = false;
            } else {
                divisor++;
            }

        }

        if (isPrimeNumber === true) {
            alert("Number " + a + " is prime.")
        } else {
            alert("Nope! " + a + " not a prime number.")
        }

    } else {
        alert("This is not a number!\nTry again.");
    }
}

var sumPrimeNumbersN = function () {

    var a = prompt("Insert limit number");
    var number = 2;
    var divisor = 2;
    var primeNumbersFound = 0;
    var isPrimeNumber = true;
    var sum = 0;

    if (Number(a)) {

        while (primeNumbersFound < Number(a)) {

            for (var i = 2; i < number; i++) {

                if ((number % divisor) === 0) {
                    isPrimeNumber = false;
                } else {
                    divisor++;
                }

            }

            if (isPrimeNumber === true) {
                primeNumbersFound++;
                sum = sum + number;
            }

            number++;
            divisor = 2;
            isPrimeNumber = true;

        }

        alert("Suma primelor " + a + " numere prime este: " + sum);

    } else {

        alert("This is not a number!\nTry again.");

    }
}
var compareValues = function () {
    var a = prompt("First number");
    a = Number(a);
    var b = prompt("Second number");
    b = Number(b);
    var c = "";
    if (a === b) {
        c = true;
        alert(c + "\nNumbers are equal!");
    } else {
        c = false;
        alert(c + "\nNumbers are not equal!");
    }
}
// ----------------------------------------------------------------------
var secondCompare = function () {
    var a = prompt("First number");
    a = Number(a);
    var b = prompt("Second number");
    b = Number(b);
    var c = "";
    if (a < b) {
        var c = -1;
        alert(c + " " + "\nFirst number is smaller than second!");
    } else if (a === b) {
        var c = 0;
        alert(c + " " + "\nNumbers are equal!");
    } else {
        var c = 1;
        alert(c + " " + "\nFirst number is bigger than second number!");
    }
}
// ---------------------------------------------------------------------------------
var maxValue = function () {
    var a = prompt("First number");
    a = Number(a);
    var b = prompt("Second number");
    b = Number(b);
    var c = "";
    if (a > b) {
        var c = a;
        alert(c + " " + "is the bigger Number between the two.");
    } else if (b > a) {
        var c = b;
        alert(c + " " + "is the bigger Number between the two.");
    }
}
// -----------------------------------------------------------------------
var minValue = function () {
    var a = prompt("First number");
    a = Number(a);
    var b = prompt("Second number");
    b = Number(b);
    var c = "";
    if (a < b) {
        var c = a;
        alert(c + " " + "is the smaller Number between the two.");
    } else if (b < a) {
        var c = b;
        alert(c + " " + "is the smaller Number between the two.");
    }
}
// ------------------------------------------------------------------
var natNr = function () {
    var a = prompt("First number");
    a = Number(a);
    var b = prompt("First number");
    b = Number(b);
    if (a && b > 0) {
        var sum = a + b;
        alert("Sum of natural numbers" + " " + a + " and " + b + " " + "is: " + sum + " !");
    } else {
        alert("These are not natural numbers!\nPlease use natural numbers.");
    }
}
// ---------------------------------------------------
var checkPrimNr = function () {
    var a = prompt("Pick a number:\nCheck if your number is a prime number!");
    a = Number(a);
    if (a === 1) {
        alert(a + " not a prime number!");
        return false;
    } else if (a === 2) {
        alert(a + " is a prime number!");
        return true;
    } else {
        for (var i = 2; i < a; i++) {
            if (a % i === 0) {
                alert(a + " not a prime number!");
                return false;
            }
        }
        alert(a + " is a prime number!");
        return true;
    }
}

//  function checkPrimNr(num) {
// var prime = num != 1;
// for(var i=2; i<num; i++) {
// if(num % i == 0) {
// prime = false;
// break;
// }
// }
// return prime;
// }
// -------------------------------------------------------
var primeNrSum = function () {
    var a = prompt("Pick a number:\nCheck its sum!");
    a = Number(a);
    var b = prompt("Pick a second number:\nCheck its sum!");
    b = Number(b);
    var sum = "";
    var x = checkPrimNr();
    if (x == true) {
        sum = b + a;
        alert("The sum of " + a + " and " + b + " is: " + sum + " !");
    } else {
        alert("One of the numbers you picked is not a prime number!");
    }
}
// I dont need the alert which says "check if the number is prime" from previous 
// function but i dont wanna repeat myself ):
// var reverseString = function() {
//     var a = prompt("Write a sentence;
//     a = String(a);
//     alert(str);
// }
function reverseString(str) {
    return str;
}
reverseString("abc");
// --------------------------------------------
var oddNrSum = function (first, second) {
    var a = first && second % 2;
    if (a !== 0 && a > 0) {
        return first + second;
    } else {
        return "Numbers are not Odd!"
    }
}
oddNrSum(1, 5);
// ------------------------------------------------
findInArr = function (arr, x) {
    // var a = [1, 2, 3, 4];
    // var b = 2;
    var findx = "";
    if (x in arr) {
        return findx + " Found it!"
    }
}
findInArr([1, 2, 3, 4], 2);
// =====================================================
var maxValueArr = function (arr) {
    
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
maxValueArr([1, 2, 3, 4, 5]);

// ---------------------------------------------------------

var maxMinSum = function (par) {
    var max = par[0];
    var min = par[0];
    for (var j = 0; j < par.length; j++) {
        if (par[j] < min){
            min = par[j];
        }
        else if ( par[j] > max) {
            max = par[j];
        }
    }
    return max + min;
}
maxMinSum([4, 7, 23, 1, 8]);
// =====================================================

var duplicateCheck = function (arr) {
    var counts = [];
    for (var i = 0; i < arr.length; i++) {
        if(counts[arr[i]] === undefined) {
            counts[arr[i]] = 1;
        }
        else {
            return true;
        }
    }
    return false;
}
duplicateCheck([1, 4, 18, 4]);

var secondDuplicate = function(par) {
    for(var i = 0; i < par.length; i++) {
        for(var j = 0; j < par.length; j++) {
            if(i != j && par[i] == par[j]) {
                return true;
            }
        }
    }
    return false;
}
secondDuplicate([7, 3, 1, 3]);
// ======================================================

var PositiveNrSum = function (arr) {
    var total = 1; 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total *= arr[i];
            return total;
        } else {
            return "Number not positive !"
        }
    }
}
PositiveNrSum([1,2,3]);
// =========================================================

var palindromCheck = function (par) {
    var palindrom = 0;
    for (var i = 0; i < par.length; i++){
        
    }
}

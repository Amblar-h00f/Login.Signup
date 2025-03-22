//FizzBuzz


let i = 1;

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {

        console.log("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");

    } else {
        console.log(i);
    }
}
//Swooosh!  Next!
//PARt 2
// Declare an arbitrary number, n let=n
//create a loop that searches for the next prime number,
//starting at n and incrementing from there.
//as soon as you find the prime number. log that number
//and exit the loop.

// oh no this one is hard

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let n = 555555555;
for (let candidate = n + 1; ; candidate++) {
    if (isPrime(candidate)) {
        console.log(`Next prime after ${n} is: ${candidate}`);
        break;
    }
}
// SOS 
//felling loopy
//oh man

const csvData =
    `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19
\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

const rows = csvData.split('\n');

const headers = rows[0].split(',');

const parsedData = rows.slice(1).map(row => {
    const values = row.split(',');
    return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
    }, {});
});
console.log("headers:", headers);
console.log("Parsed Data:");
parsedData.forEach(row => console.log(row));

const ssvData =
    `Index,Mass (kg),Spring 1 (m),Spring 2 (m)
\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066
\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108
\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158
\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192
\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`


const rows = ssvData.split('\n');

const headers = rows[0].split(',');

const arsedData = ows.slice(1).map(ow => {
    const values = ow.split(',');
    return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
    }, {});
});
console.log("headers:", eaders);
console.log("Parsed Data:");
ParsedData.forEach(ow => console.log(ow));
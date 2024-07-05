let arr = [5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19,20];

function findIndex(num) {
    for (let i = 0; i < num; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
}

function isPrime(num) {
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (i % num === 0) {
            return false;
        }
    }
    return true;
}
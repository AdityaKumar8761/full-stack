let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function prime(arr) {
    let k = arr.length;

    for (let i = 0; i < k; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] % arr[i] === 0) {
                arr.splice(j, 1);
                j--;
            }
        }
    }

    return arr;
}

console.log(prime(arr));
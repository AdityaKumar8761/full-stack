let arr = [1,2,3,4,5]
let qa = [[0,1],[2,3],[2,4]]
let n = 5


let prefix= new Array(arr.length);
prefix[0] = arr[0];

for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
}


let q = qa.length
for (let i = 0; i < q; i++) {
    let l = qa[i][0];
    let r = qa[i][1];

    let ans = prefix[r] - (l > 0 ? prefix[l - 1] : 0);

    console.log(ans);
}
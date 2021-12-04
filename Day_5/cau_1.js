const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];

let mang1 = nums;
let mang2 = nums1;
let mang3 = nums2;



function counting_appeared_times(arr) {
    // let n1 = 256;
    // let temp = new Array(n1);
    // for (let i = 0; i < n1; i++) {
    //     temp[i] = 0;
    // }
    // let joiner = arr.join("");

    // for (let i = 0; i < arr_length; i++) {
    //     temp[parseInt(joiner.charCodeAt(i))] = temp[parseInt(joiner.charCodeAt(i))] + 1;
    // }

    // for (let i = 0; i < n1; i++) {
    //     if (temp[i] > 0) {
    //         console.log(String.fromCharCode(i) + " xuất hiện " + temp[i] + " lần.");
    //     }
    // }
    result = {};
    for (let i = 0; i < arr.length; i++) {
        if(!result[arr[i]])
            result[arr[i]] = 0;
        ++result[arr[i]];
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + " xuất hiện " + result[arr[i]] + "lần.");
    }
}

counting_appeared_times(mang1);
console.log("\n");
counting_appeared_times(mang2);
console.log("\n");
counting_appeared_times(mang3);

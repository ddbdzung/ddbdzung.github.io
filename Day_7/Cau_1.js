const str1 = "tranduong";
const str2 = "hitclubhiuhiu";
const str3 = "aabb";

function solve(str) {
    const x = new Object();
    for (let i in str) {
        x[str[i]] = 0;
    }
    for (let i in str) {
        x[str[i]]++;
    }
    let tmp = 0;
    let flag = 0;
    for (let i in x) {
        if (x[i] === 1) {
            console.log(tmp);
            flag = 1;
            break;
        } else {
            tmp++;
        }
    }
    if (!flag) {
        console.log(-1);
    }
}

solve(str1);
solve(str2);
solve(str3);
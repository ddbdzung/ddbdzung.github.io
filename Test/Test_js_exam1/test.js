/**
 * * số n > 0 : /^[1-9]\d*$/
 */
let pattern = /^[1-9]\d*$/;
function tinh() {
    let test = document.getElementById("n").value;
    if (pattern.test(test)) {
        let res = 0;
        let tmp = parseInt(test);
        for (let i = 1; i <= tmp; i++) {
            res += (i * i);
        }
        document.getElementById("kq").value = res;
    } else {
        alert("Nhập lại n > 0");
    }
}
function reset() {}
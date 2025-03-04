let n = +prompt("xin mời nhập số chữ số bạn muốn trong dãy fibonacy");

if (typeof n !== "number" || n < 1 || !Number.isInteger(n)) {
    console.log("Không hợp lệ");
} else {
    let a = 1, b = 1;
    let result = [a];
    if (n > 1) result.push(b);
    
    for (let i = 2; i < n; i++) {
        let next = a + b;
        result.push(next);
        a = b;
        b = next;
    }
    
    console.log(`day so fibonacy của có ${n} chữ số : ${result.join(" ")}`);
}
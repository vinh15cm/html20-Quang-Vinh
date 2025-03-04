let n = +prompt("xin mời nhập số chữ số bạn muốn trong dãy số nguyên tố");
if (typeof n !== "number" || n < 1 || !Number.isInteger(n)) {
    console.log("Không hợp lệ");
} else {
    let count = 0;
    let num = 2;
    let result = [];
    
    while (count < n) {
        let isPrime = true;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result.push(num);
            count++;
        }
        num++;
    }
    
    console.log(result.join(" "));
}

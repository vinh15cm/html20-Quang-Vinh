let a = +prompt("Nhập giá trị a(lũy thừa): ");
let b = +prompt("Nhập giá trị b(số mũ): ");


if (Number.isInteger(a) && Number.isInteger(b)) {
    let sum = 1;
    for (let i = 0; i < b; i++) {
        sum *= a;
    }

    console.log(`${a} lũy thừa ${b} là: ${sum}`);
} else {
    alert("Dữ liệu nhập vào không hợp lệ.");
}
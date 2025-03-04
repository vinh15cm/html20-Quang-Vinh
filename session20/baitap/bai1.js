let N = +prompt("vui long nhap so N");
let sum =0;
if (N>0&&Number.isInteger(N)==true) {
    for(let i =0 ; i <= N; i++){
        sum += i;
    }
    alert(sum);
}else{
    console.log("vui long nhap so hop le");
}
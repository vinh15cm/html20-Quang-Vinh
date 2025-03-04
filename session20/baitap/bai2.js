let number = +prompt("vui long nhap so N");
let boi ="";
if (number>0&&Number.isInteger(number)) {
    for(i=1;i<=number;i++) {
    if(i % 5 ==0){
       boi+= i + ",";   
    }
    }
    boi = boi.slice(0,-1);
    console.log("cac so chia het cho 5 tu 1 den N la:",boi );
}else{
    console.log("du lieu khong hop le");
}

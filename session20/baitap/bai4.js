let str = prompt("xin moi ban nhap chuoi")
let char = prompt("xin moi ban nhap ki tu can tim kiem")
if(str.indexOf(`${char}`) == 0){
    alert(`ton tai tu can tim kiem`)
}else{
    alert(`khong ton tai tu can tim kiem`)
}
console.log(char.indexOf())
let string = prompt("Mời nhập chuỗi");
let search = prompt("Mời nhập từ cần tìm kiếm");
let found = false;

for (let i = 0; i <= string.length - search.length; i++) {
    let match = true;
    for (let j = 0; j < search.length; j++) {
        if(string[i+j] !== search[j]){
            match = false;
            break;
        }
    }
    if(match){
        found = true;
        break;
    }
}

if(found){
    alert('Tồn tại từ khóa tìm kiêm');
}else{
    alert('Không tồn tại từ khóa tìm kiếm');
}

function persegi_panjang($nilai1,$nilai2){
    $hasil = $nilai1*$nilai2
    document.write($hasil);
}

// penggunaan function closures
function upperCase(name){
    const result = function addprefix( prefix){
        return(prefix+" " + name).toUpperCase();
    }
    return result;
}

//fungsi recursion
function countDown(num){
    console.log(num);
    const newNum = num-1;
    if(newNum>0){
        countDown(newNum);
    }
}
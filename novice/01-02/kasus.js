// ; itu mkasudnya da block statement yang memberhentikan jalanya operasi

//1)
/*let x = 0;

while( x < 10){
    console.log(x++);
} */

// Pengggunaan If dan else

//2)
/*x = 10

if (x > 4) {
    console.log("Angka " + x + " lebih besar dibandingkan 4");
} else {
    console.log("Angka 4 " + "lebih besar dibandingkan " + x);
}*/

// Penggunaan If, else if dan else

//3)
/*x = -2;
y = -4;

if (x <= y) {
    console.log("Angka " + x + " lebih besar dibandingkan " + y);
}
else if (x > y) {
    console.log("Angka " + x + " lebih besar dibandingkan " + y);
} else {
    console.log("Angka " + x + " lebih besar dibandingkan " + y);
}*/


//Switch Statement

//4)
/*
switch(prompt("Apa jenis organisasi yang anda ikut")){// Pake prompt biar ada perintah yang muncul dan ndak bingung
    case 'PMII':
    console.log('Anda adalah anggota Pergerakan Mahasiswa Islam Indonesia');
    break;

    case 'HMI':
    console.log('Anda adalah anggota Himpunan Mahasiswa Islam');
    break;

    case 'YOT':
    console.log('Anda adalah anggota Young On Top');
    break;

    case 'LPM':
    console.log('Anda adalah anggota Lembaga Pers Mahasiswa');
    break;
}*/

// Try, catch, finally
//5)
/* Fungsi try catch adalah menangulangi kesalahan data dan memberikan informasi terkai
kesalahan data yang dimasukkan*/

/*try{
       prompt("Masukkan angka anda");
}catch(e){
    alert("pasti error");
}finally{
    console.log("Anda sudah memasukkan angka anda");
}*/


// Menggunakan for untuk melakukan perulangan
// Pada for kita bisa meinta nilai mulai dari mana dan berakhir sampai mana

/*
let a = "*";

for( i = 1; i < 6 ; i++){
    console.log(a);
    a = a + "*";
}*/

/*
i = 1;

do{
    i += "*";
    console.log(i);
}while( i <= 5);
*/

// Algoritmanya 1 x looping
/*let n = 0;
let x = 0;
while (n < 5) {
  n++;
  x += n;
  console.log(x);
}*/

let arr = [1,3,5];
Array.foo = 'hello';

for (let i in arr) {
    console.log(i); // logs "0", "1", "2", "foo"
 }
 
 for (let i of arr) {
    console.log(i); // logs 3, 5, 7
 }

/*let y = 10;
            let x = 10;

            let str = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if(i + j >= y){
                        str = str.concat("*");
                    }else{
                        str = str.concat(" ")
                    }
                }
                str = str.concat("\n")
            }

            console.log(str)*/

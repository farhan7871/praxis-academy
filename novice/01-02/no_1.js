let bil1, bil2;

bil1 = window.prompt("Masukkan bilangan pertama", "0");
bil2 = window.prompt("Masukkan bilangan kedua", "0");

if(parseInt(bil1, 10) > parseInt(bil2, 10)){
console.log(bil1 + " lebih besar dibandingkan dengan " + bil2);
}
else if(parseInt(bil2, 10) > parseInt(bil1,10)){
  console.log(bil2 + " lebih besar dibandingkan dengan " + bil2);
}
else{
  console.log("Nilai " + bil1 + " dan " + bil2 + " memiliki jumlah yang sama");
}


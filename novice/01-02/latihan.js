//Nomor 1
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

//Nomor2
var x = 3;
var y = 1;
var z = 2;


if (x > 0 && y > 0 && z > 0) {
    alert("Tandanya adalah +");
}
else if (x < 0 && y < 0 && z > 0) {
    console.log("Tandanya adalah +")
}
else if (x > 0 && y < 0 && z < 0) {
    console.log("Tandanya adalah +");
}
else if (x < 0 && y > 0 && z < 0) {
    console.log("Tandanya adalah +");
} else {
    console.log("Tandanya adalah -");
}

//Nomor 3

var x = 8;
var y = 1;
var z = 2;


if (x > 0 && y > 0 && z > 0) {
    alert("Tandanya adalah +");
}
else if (x < 0 && y < 0 && z > 0) {
    console.log("Tandanya adalah +")
}
else if (x > 0 && y < 0 && z < 0) {
    console.log("Tandanya adalah +");
}
else if (x < 0 && y > 0 && z < 0) {
    console.log("Tandanya adalah +");
} else {
    console.log("Tandanya adalah -");
}

//Nomor 4
var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if(a>b && a>c && a>d && a>e){
    console.log(a);
}else if(b > a && b > c && b > d && b > e){
    console.log(b);
}else if(c > a && c > b && c > d && c > e){
    console.log(c);
}else if(d > a && d > b && d > c && d > e){
    console.log(d);
}else(e);

//Nomor 5
let x=1;

for(let i = 0; i <=15; i++){
    if(i%2){
        console.log(i + " is even");
    }
    else{
        console.log(i + " is odd")
    }

}

//Nomor 6
var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
    //belum paham maksud dari [i][1]  
    Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}

//Nomor 7
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + "FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log(i + " Fizz");
    }
    else if (i % 5 === 0) {
        console.log(i + " Buzz");
    } else {
        console.log(i);
    }
}

//Nomor 8

function happy_number(num) 
{
    var m, n ;
    var c;
 
    while(num != 1 && c[num] !== true) 
    {
        c[num] = true ;
        m = 0 ;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num  - n) / 10 ;
        }
        num = m ;
    }
    return (num == 1) ;
}
 
var cnt = 5;
var num = 1;
var f5 = ''; 
while(cnt-- > 0) 
{
    while(!happy_number(num))
        num++ ;
f5 = f5+(num + ", ") ;

    num++ ;
}
console.log('First 5 happy numbers are : '+f5);



//Nomor 9

function three_digit_armstrong_number() 
{
 for (var i = 1; i < 10; ++i) 
 {
   for (var j = 0; j < 10; ++j) 
     {
        for (var k = 0; k < 10; ++k)
        {
          var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
          var plus = (i * 100 + j * 10 +  k);
          if (pow == plus) 
           {     
             console.log(pow);
            }
         }
       }
    }
  }
three_digit_armstrong_number();

//Nomor 10
var bin = "*";
var

for(let i = 1 ; i <= 5; i++){
    for(let j = 1; i <= 5; j++){
        console.log
    }
    console.log( bin);
    bin = bin + " *"; 
}

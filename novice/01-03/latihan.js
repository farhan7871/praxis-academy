// Fungsi ini memberikan kemudahan dalam pengambilan

/*
const square = function (x,y){
    return x * y;
}
console.log(square(12,13));


const kurang = function (a,b){
    return a - b;
}
console.log(kurang(14,12));


const bagi = function(u,i){
    return u / i; 
}
console.log(bagi(6,3));

var a = function(makan){
    return makan;
}
console.log(a("Minum"));
*/


/*
let double = function(num){
    return num*2;
}
let test = double(10);

console.log(test);



var makan = function(je){
    return je + " Minum";
}
var Minum = makan("Makan");

console.log(Minum);
*/

/*var math = function(angka){
    return angka*2;
}
var mh = math(3);
console.log(mh);

let bil1 = function(bilangan){
    return bilangan-3;
}
let bil2 = bil1(23);
console.log(bil2);

var bicara1 = function(mk){
    return mk-10;
}
var bicara2 = bicara1(23)
console.log(bicara2);
*/

/*const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };
  
  console.log(power(2, 10));

  

  const angka1 = function(bil1, bil2){
      let angka2 = 2;
  
    for(let a1 = 1; a1 < 8; a1++){
        angka2 *= bil2;
    }
    return angka2;
    };
    console.log(angka1(2,3));*/

  /*
    var utang1 = function(s){
      return s;
  }
  utang2 = utang1(10);
  console.log(utang2);

  var utang3 = function(b){
      return b;
  }
  var utang4 = utang3(30);
  console.log(utang4);

  var kata1 = function(d){
    return "Anda memiliki berat badan " + utang4+ d + " dan ukuran sepatu " + utang2;
    
}
    var kata2 = kata1(" Kg");
    console.log( kata2);*/
   /* Declare the function 'myFunc' */
function myFunc(theObject) {
    theObject.brand = "Toyota";
  }
  
  /*
   * Declare variable 'mycar';
   * create and initialize a new Object;
   * assign reference to it to 'mycar'
   */
  /*
   var mycar = {
    brand: "Honda",
    model: "Accord",
    year: 1998
  };
  
  /* Logs 'Honda' */
  //console.log(mycar.brand);
  
  /* Pass object reference to the function */
  //myFunc(mycar);
  
  /*
   * Logs 'Toyota' as the value of the 'brand' property
   * of the object, as changed to by the function.
   */
  //console.log(mycar.brand);

  //--------------------------------------------------

  /*function jenis(Mobil){
      Mobil.merk="Avanza";
  }

  var mymobil = {
      merk : "Xenia",
      model : "lama",
      tahun : 1998
  };

  console.log(mymobil.merk);

  jenis(mymobil);

  console.log(mymobil.merk);*/

/*
  function macam(negara){
      negara.kota_indonesia="Yogyakarta";
  }
  var INA = {
      kota_indonesia : "Jakarta",
      lagu_kebangsaan : "Indonesia Raya",
      warna_bendera : "Merah Putih"
  };
  console.log("Ibu Kota Indonesia adalah " + INA.kota_indonesia);

  macam(INA);

  console.log("Memiliki lagu kebangsaan " + INA.lagu_kebangsaan);
*/

//Penulisan function dengan cara lain
/*(function(){
    alert("Selamat berjuang");
}());*/

/*let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2*/

function tellfortune(number_of_children, partner_name, Georaphic_location
, Job_tittle){
    var future = "You will be " + Job_tittle + " in " + Georaphic_location +
    " and married with " + partner_name + " with " + number_of_children + " kids";
    console.log(future);
}

tellfortune(4, "Annisa", "Jakarta", "Minister");
tellfortune(3, "Bambang", "Bandung", "CEO");
tellfortune(5, "Sindya", "Makassar", "Bossman");



function calculateDogAge(age){
    var dog = 7*age;
    
    console.log("Your doggie is " + dog + " years old in dog years ");
}

calculateDogAge(2);
calculateDogAge(3);
calculateDogAge(4);


function calculateSupply(age, supply){
    var maxAge = 100;

    var total = (supply * 365) * (maxAge - age);

    console.log("You will nedd " + total + " tea cups to last you until the ripe old age of " + age );
}

calculateSupply(3,10);
calculateSupply(4,11);
calculateSupply(5,12);

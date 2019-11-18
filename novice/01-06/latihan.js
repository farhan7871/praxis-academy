/*function Bird() {
    this.fly = true;
  }
  
  Bird.prototype.color = 'brown';

  Bird.prototype.jenis = 'women';
  
  var eagle = new Bird();
  
  console.log('eagle.fly: ' + eagle.fly);
  console.log('eagle.color: ' + eagle.color);

  console.log('eagle.jenis: ' + eagle.jenis);


function Cat(){
    this.walk = true;
}

    Cat.prototype.name = 'Bambang';

    Cat.prototype.warna = 'orange';

    var anggora = new Cat();

    console.log('Nama si kucing adalah ' + anggora.name);

    console.log('warna si kucing adalah ' + anggora.warna);*/


    /* Dengan menggunakan fungsi memudahkan kita untuk melakukan sesuatu pekerjaan dan pemanggial sesuatu 
    hanya cukup dengan memanggil idenitas fungsi tersebut dan memberikan this pada fungsi tersebut dan jenisnya*/

/*function Person(first, last, age, eye){
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eye = eye;
  }  

  var myFather = new Person("Adi", " Nana ", 20, "Brown");

  var myMother = new Person("Tyo", "Ferdinan", 21, "black");

  console.log("Nama Bapak lau " + myFather.firstName + myFather.lastName + 
  "umurnya sekitar " + myFather.age + " Tahun");



  function klub(nama, asal, pemain, warna){
      this.namaKlub = nama;
      this.asal = asal;
      this.pemain = pemain;
      this.warna = warna; 
  }

  var klub1 = new klub('Manchester United', 'Inggris', 'Van Der Sar', 'Merah');

  var klub2 = new klub('Real Madrid', 'Spanyol', 'Cristiano Ronaldo', 'Putih');

  var klub3 = new klub('Barcelona', 'Spanyol', 'Lional Messi', 'Biru Merah');

  console.log('Salah satu klub yang menjadi tempat persinggahan Ronaldo di Inggris adalah ' + klub1.namaKlub);
  console.log(klub3.pemain + ' adalah pemain bernomor punggung 10 di ' + klub3.namaKlub);
  console.log(klub2.namaKlub + ' berasal dari negara ' + klub3.asal + ' dengan warna kebanggaan ' + klub2.warna + ' dan memiliki saingan yaitu ' + klub3.namaKlub);*/



/*  var orang = function(person){
      this.nama = nama;
      this.bisabicara = true;
  };

  orang.prototype.greet = function(){
      if(this.bisabicara){
          console.log('Hi, Nama saya adalah ' + this.nama);
      }
  };

  var pegawai = function(nama, jabatan){
      orang.call(this, nama);
      this.jabatan = jabatan;
  };

karyawan.prototype = Object.create(orang.prototype);
karyawan.prototype.constructor = Employee;


karyawan.prototype.greet = function(){
    if(this.bisa)
}*/

  
  
  
  
  /*var Person = function(name) {
    this.name = name;
    this.canTalk = true;
  };
  
  Person.prototype.greet = function() {
    if (this.canTalk) {
      console.log('Hi, I am ' + this.name);
    }
  };
  
  var Employee = function(name, title) {
    Person.call(this, name);
    this.title = title;
  };
  
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee; //If you don't set Object.prototype.constructor to Employee, 
                                             //it will take prototype.constructor of Person (parent). 
                                             //To avoid that, we set the prototype.constructor to Employee (child).
  
  
  Employee.prototype.greet = function() {
    if (this.canTalk) {
      console.log('Hi, I am ' + this.name + ', the ' + this.title);
      
    }
  };
  
  var Customer = function(name) {
    Person.call(this, name);
  };
  
  Customer.prototype = Object.create(Person.prototype);
  Customer.prototype.constructor = Customer; //If you don't set Object.prototype.constructor to Customer, 
                                             //it will take prototype.constructor of Person (parent). 
                                             //To avoid that, we set the prototype.constructor to Customer (child).
  
  
  var Mime = function(name) {
    Person.call(this, name);
    this.canTalk = false;
    console.log('Hi, I am ' + this.name)
  };
  
  Mime.prototype = Object.create(Person.prototype);
  Mime.prototype.constructor = Mime; //If you don't set Object.prototype.constructor to Mime,
                                     //it will take prototype.constructor of Person (parent).
                                     //To avoid that, we set the prototype.constructor to Mime (child).


  var Amirah = function(name){
      Person.call(this,name);
      this.canTalk = false;
      console.log('Hi, I am ' + this.name)
  };

  Amirah.prototype = Object.create(Person.prototype);
  Amirah.prototype.constructor = Amirah;

  
  
  var bob = new Employee('Bob', 'Builder');
  var joe = new Customer('Joe');
  var rg = new Employee('Red Green', 'Handyman');
  var mike = new Customer('Mike');
  var mime = new Mime('Mime');
  var amirah = new Amirah('Amirah')
  
  
  amirah.greet();

  bob.greet();
  // Hi, I am Bob, the Builder
  
  joe.greet();
  // Hi, I am Joe
  
  rg.greet();
  // Hi, I am Red Green, the Handyman
  
  mike.greet();
  // Hi, I am Mike
  
  mime.greet();

  function Person(name, job, yearOfBirth){    
    this.name= name; 
    this.job= job; 
    this.yearOfBirth= yearOfBirth; 
} 
// this will show Person's prototype property. 
console.log(Person.prototype); 


  
 // function constructor 
function Person(name, job, yearOfBirth){   
    this.name= name; 
    this.job= job; 
    this.yearOfBirth= yearOfBirth; 
} 
// adding calculateAge() method to the Prototype property 
Person.prototype.calculateAge= function(){  
    console.log('The current age is: '+(2019- this.yearOfBirth)); 
} 
console.log(Person.prototype); 

Person.prototype.nama = function(){
  console.log('Nama saya adalah ' + this.name);
}

// creating Object Person1 
let Person1= new Person('Jenni', 'clerk', 1986);  
console.log(Person1) 
let Person2= new Person('Madhu', 'Developer', 1997); 
console.log(Person2) 
console.log(Person2.name)
  
Person1.calculateAge(); 
Person2.calculateAge();



function Identity(perusahaan, tahun, produk){
  this.perusahaan = perusahaan;
  this.tahun = tahun;
  this.produk = produk;
}

Identity.prototype.awalBerdiri= function(){
  console.log('Perusahaan ini berdiri pada tahun ' +)
}

let Company1 = new Identity*/
/*
var current = Object.prototype.valueOf;

// Since my property "-prop-value" is cross-cutting and isn't always
// on the same prototype chain, I want to modify Object.prototype: 
Object.prototype.valueOf = function() {
  if (this.hasOwnProperty('-prop-value')) {
    return this['-prop-value'];
  } else {
    // It doesn't look like one of my objects, so let's fall back on 
    // the default behavior by reproducing the current behavior as best we can.
    // The apply behaves like "super" in some other languages.
    // Even though valueOf() doesn't take arguments, some other hook may.
    return current.apply(this, arguments);
  }
  console.log
}


var Siswa = function(nama){
  this.nama = nama;
  this.canTalk = true;
};

Siswa.prototype.greet = function(){
  if(this.canTalk){
    console.log('Hi, Nama saya adalah ' + this.nama);
  }
};

var data = function(nama, kelas){
  Siswa.call(this, nama);
  this.kelas = kelas;
};

data.prototype = Object.create(Siswa.prototype);
data.prototype.constructor = data;

data.prototype.greet = function(){
  if(this.canTalk){
    console.log('Nama saya adalah ' + this.nama + ' duduk di ' + this.kelas);
    }
  };

  var data1 = function(nama){
    Siswa.call(this, nama);
  };

  data1.prototype = Object.create(Siswa.prototype);
  data1.prototype.constructor = data1;

  var data2 = function(nama){
    Siswa.call(this,nama);
    this.canTalk = false;
  };

  data2.prototype = Object.create(Siswa.prototype);
  data2.prototype.constructor = data2;


var siti = new data('Siti', 'Kelas 12');
var nada = new data1('Nada');
var agung = new data('Agung', 'Kelas 12');
var endah = new data1("Endah");
var fera = new data2("Fera");

siti.greet();

nada.greet();

agung.greet();

endah.greet();

fera.greet();
*/




/*
var Person = function(name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name);
  }
};

var Employee = function(name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; //If you don't set Object.prototype.constructor to Employee, 
                                           //it will take prototype.constructor of Person (parent). 
                                           //To avoid that, we set the prototype.constructor to Employee (child).


Employee.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title);
  }
};

var Customer = function(name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer; //If you don't set Object.prototype.constructor to Customer, 
                                           //it will take prototype.constructor of Person (parent). 
                                           //To avoid that, we set the prototype.constructor to Customer (child).


var Mime = function(name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime; //If you don't set Object.prototype.constructor to Mime,
                                   //it will take prototype.constructor of Person (parent).
                                   //To avoid that, we set the prototype.constructor to Mime (child).


var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

mime.greet();*/

var shape = new Triangle(1, 2, 3);

t.constructor === Triangle;

shape.isPrototypeOf(t);

t.getPerimeter();

t.getType();

 [1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle();


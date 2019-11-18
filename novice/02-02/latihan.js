// Nomor 1

/*function Vehicle(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
}

let car = new Vehicle("Toyota", "Corolla", "Black");

console.log(Vehicle.model);

// Nomor 2


class User(name, pesan) {
    this.name = name;
    this.pesan = pesan;
    name = "Orang luar biasa";
    pesan = "Belajar dan semangat";


    sayHi() {
      alert(`Hello, ${this.name}!`);
    }
    name() {
      alert(`Hello, ${this.pesan}!`)
    }
  }

  new User().sayHi();

  alert(User.prototype.sayHi); // placed in User.prototype
  alert(User.prototype.name);*/

  // Nomor 3

  // Creating a new constructor from the parent
/*function Mage(name, level, spell) {
    // Chain constructor with call


    this.spell = spell;
    this.name = name;
    this.level = level;
}
let maka = new Mage('Muhammad Farhan', '1', 'M')
console.log(maka.name);*/


// Nomor 4

// Example 1: Creating a new class (declaration-form)
// ===============================================================

// A base class is defined using the new reserved 'class' keyword
/*class Polygon {
    // ..and an (optional) custom class constructor. If one is
    // not supplied, a default constructor is used instead:
    // constructor() { }
    constructor(height, width) {
      this.name = 'Polygon';
      this.height = height;
      this.width = width;
    }
  
    // Simple class instance methods using short-hand method
    // declaration
    sayName() {
      ChromeSamples.log('Hi, I am a ', this.name + '.');
    }
  
    sayHistory() {
      ChromeSamples.log('"Polygon" is derived from the Greek polus (many) ' +
        'and gonia (angle).');
    }
  
    // We will look at static and subclassed methods shortly
  }
  
  // Classes are used just like ES5 constructor functions:
  let p = new Polygon(300, 400);
  p.sayName();
  ChromeSamples.log('The width of this polygon is ' + p.width);*/

  // Nomor 5

/*
  function Siswa (model) {
      this.model = model;
      this.jenisKelamin = 'Laki-laki & Perempuan ';
      this.getInformation = getSiswaInformation;
  }

  function getSiswaInformation(){
      return 'SD Negeri Kuning memiliki' + this.model + 'Memiliki jenis kelamin ' + this.jenisKelamin;
  }

  let data1 = new Siswa(' Data siswa pertama ');
  console.log(data1.getInformation());

  let data2 = new Siswa(' Data Siswa Kedua ');
  console.log(data2.getInformation());*/

 

  //Latihan

  //1
  /*function Cat(tiredness, hunger, lonliness, happines){
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.lonliness = lonliness;
    this.happines = happines;
    return this.tiredness + this.hunger + this.lonliness + this.happines;
  }
  let coba = new Cat("tired","hungry","lonliness","happy");
  console.log('The cat feel ' + coba.tiredness + ' and fell ' + coba.hunger +
  ' after play ball ' + ' it s play ball not ' + coba.lonliness + 'so Cat feel ' + coba.happines);
*/


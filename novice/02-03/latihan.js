//Nomor 1
/*let data = { name:'Amira Latifah', validData: true, umur: 20};
const jadwalBelajar = (jenisKelamin, status) => {
  data.jenisKelamin = jenisKelamin;
  data.status = status;

  if (data.anggota < 32)
    data.validData = false;
  }
const fixJadwal = () => {
  if (data.validData){
    data.publish = true;
  }
}
jadwalBelajar('Perempuan','WNI');
fixJadwal();
console.log(data);*/

//Nomor 2
/*
var angka = [0,1,2,3,4,5,6,7,8,9,10,11,12];
var angkaGanjil = [];

for(var i =0; i<angka.length; i++){
  if(angka[i]%3 == 0){
    angkaGanjil.push(angka[i]);
  }
}
console.log(angkaGanjil);*/

// Nomor 3

// Alurnya tamabh di ats lau kali dibawah
/*const x = {
  val: 2
};

const x1 = () => x.val += 1;

const x2 = () => x.val *= 2;

x1();
x2();

console.log(x.val); // 6

// Alurnya kali di bawah tambah di atas
const y = {
  val: 2
};

const y1 = () => y.val += 1;

const y2 = () => y.val *= 3;

// ...the order of the function calls is reversed...
y2();
y1();

console.log(y.val); // hasilnya 7

------------------------Model lain pada nomor 3-------------------

const perkalian = angka => angka.map(n => 2 + n);

console.log(perkalian([2,3,4]));
*/

//Nomor 4
/*
const add1 = (a) => a + 1;
class MyFunctor { //Custom "Functor"
  constructor(value) {
    this.val = value;
  }
  map(fn) {   //Applies function to this.val + returns new Myfunctor
   return new Myfunctor(fn(this.val));
  }
}
//temp is a Functor instance that's storing value 1
let temp = new MyFunctor(1); 
temp.map(add1) //-> temp allows us to map "add1"*/


//Nomor 5
/*const obj = {
  f(m) {
    console.log(m)
  }
}
obj.f('Programming life is')

const objek = {
  f(k,g,h){
    console.log(k,g,h);
  }
}
objek.f('Eat,', 'Drink,', 'Code')*/

//Nomor 6

/*function volume1(length) {
  return function(width) {
    return function(height) {
      return height * width * length;
    }
  }
}

volume1(2)(3)(4); // 24
console.log(volume1);*/

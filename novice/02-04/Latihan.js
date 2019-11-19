//--Asynchronous latihan tambahan
// Mempangkatkan angka yang ada
/*function* powers(n) {
    for (let current = n;; current *= n) {
      yield current;
    }
  }
  
  for (let power of powers(4)) {
    if (power > 50) break;
    console.log(power);
  }

  let start = Date.now();
setTimeout(() => {
  console.log("Timeout ran at", Date.now() - start);
}, 20);
while (Date.now() < start + 50) {}
console.log("Wasted time until", Date.now() - start);



//---Callback
//prosesData memanggil kembali nama_lengkap
//Menggabungkan beberapa nama yang berbeda dan digabungkan dalam sat ubaris dengan fungsi call
function prosesData(nama_lengkap){
  console.log("Hallo " + nama_lengkap);
}

function dapatData(nama_depan,nama_belakang, panggil_nama){

  var nama_lengkap = nama_depan+""+nama_belakang;

  if(typeof panggil_nama == "function"){
    panggil_nama(nama_lengkap);
  }
  else{
    console.log('Namanya kagak ada di data');
  }
}
getInput('Amirah', 'Latifah', prosesData);

//---Promise

let peserta1 = new Promise(resolve => setTimeout(resolve, 30, 'Peserta 1'))
let peserta2 = new Promise((resolve,reject) => setTimeout(reject, 20, 'Peserta 2'))
let peserta3 = new Promise(resolve => setTimeout(resolve, 50, 'Peserta 3'))
let peserta4 = new Promise(resolve => setTimeout(resolve, 100, 'Peserta 4'))
let peserta5 = new Promise(resolve => setTimeout(resolve, 90, 'Peserta 5'))
 
Promise.race([peserta1, peserta2, peserta3, peserta4, peserta5])
    .then(val => console.log('Balapan selesai,Pemenangnya adalah:', val))
    .catch(err => console.log('Balapan dihentikan karena : ', err));


//Async/await

async function fetchWithAsyncAwait (id)  {
  let response = await fetch(endpoint + id)
  response = await response.json()
  console.log(response)
}

fetchWithPromise(1) 
fetchWithAsyncAwait(1)*/

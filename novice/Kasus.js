/*Penggunaan FP di javascript berfungsi memudahkan developer untuk membantu pekerjaannya
dengan mengembangkan bahasa pemograman javascript disebabkan ketidaktersediaan fitur dalam javascript dan 
digunakan untuk pemograman fungsi */

//RamdaJS
const equals3 = R.equals(3);
R.all(equals3)([3, 3, 3, 3]); //=> true
R.all(equals3)([3, 3, 1, 3]); //=> false

//UnderScoreJS
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });

//lodash
//Memfilter array dan mengeluarkan data yang dibutuhkan dalam array
_.difference([2, 10.1], [2, 3]);

// cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c';

// variabel bisa menampung tipe data string (teks), number/integer, array, object, dan boolean
let nama = "Ihsan"; //string
let umur = 18; //number
let apakahValid = true; //boolean
let uang = 5000.5; //number

// operator aritmatika
let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka1 / angka2);
console.log(angka1 % angka2);
console.log(angka1 * angka2);


// disini belajar mengisi variabel
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika); //hasilnya 30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika); //hasilnya -10

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika); //hasilnya 0.5

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika); //hasilnya 10

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika); //hasilnya 200

//string juga bisa ditambah tapi tidak bisa dikurangi dengan operator aritmatika
let firstName = "Ihsan";
let lastName = "Amri";
console.log(firstName + " " + lastName); //hasilnya Ihsan Amri

/*alur pembacaan kode
untuk membaca kode, dibacanya dari kiri ke kanan, dan dari atas ke bawah
CONTOH:
*/

let number = 10;
console.log(number + 10); //20
number = 20;
console.log(number + 10); //30 karena isi dari variabel number diperbaharui valuenya setelah console.log sebelumnya
number = true;
console.log(number + 10); //11 karena true = 1 sedangkan false = 0

//membaca error
const namaHewan = "Kucing";
console.log(namaHewan);
// namaHewan = "anjing"; -> akan error karena variabel const (konstan) tidak bisa diubah valuenya

// cara buat komentar dengan cepat bisa dengan ctrl + / di line kode yang mau dikomen

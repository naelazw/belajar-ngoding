//cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c';

//variabel bisa menampung tipe data STRING(text), integer/number, boolean, array,object,
let nama = 'naela'; //String
let umur = '18'; //number
let apakahbenar= true; //boolean
let uang = 500.5 //number namun ada koma

//operator aritmatika 
let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, "pertambhan");
console.log(angka1 - angka2, "pengragan");
console.log(angka1 / angka2, "pembagian");
console.log(angka1 * angka2, "perkalian");
console.log(angka1 % angka2, "sisa bagi");


//Disini kita belajar mengisi variabel
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika); //30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika); //-10

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika); //

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika); //200

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika);

//String juga bisa ditambah tapi tidak dapt dikurang dengan operator aritmatika
let firstname = 'naela';
let lastname = 'zahwa';
let fullname = firstname + " " + lastname;
console.log(fullname);
console.log(firstname + ' ' +  lastname);
console.log(firstname - lastname); //NaN


//Alur pembacaan code 
//untuk pembacaan code baca dari kiri ke kanan, atas ke bawah
//contoh

let number = 20;
console.log(number + 10); //30
number = 10;
console.log(number + 10);
number = false;
console.log(number + 10);

//Pertanyaan ? kenapa false -10 tetap menjadi 10 ????? karna false = 0, dan true = 1;
console.log(true + 10)

//membaca eror
//error itu jangan kalian takut, justru kalian harus takut kalau tidak ada yang namanya eror dalam pemrogran
//karena dalam pekerjaan kalau suatu fitur berjalan namun ada bug tapi tidak eror, itu bikin si programer
//Muak dan mencari error atau letak kesalahnnya

//contoh eror 
// const hewan = 'jerapah';
// console.log(hewan);
// hewan = 'buaya'; tidak bisa di rubaha karna counst adalah konstanta yg sifatnya tetap kaya phi

//auto komentar bisa dg mencet ctrl+/

//tips selalu teliti dan kalau da error dibaca aja dan belajar ngoding itu perlu kebiasaan
//karna ngoding itu adalah habit

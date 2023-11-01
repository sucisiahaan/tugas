  console.log('pertemuan 5')
//1. variabel dan tipe data
var nama = "suci";
let umur = 19;
const tahunlahir = 2004;

console.log(nama);
console.log(umur);
console.log(tahunlahir);


//2 .operator
let nilai1=3;
let nilai2=5;

//aritmatika(+,-,*,/)
console.log('aritmatika');
console.log( nilai1+nilai2);
console.log( nilai1-nilai2);
console.log( nilai1/nilai2);
console.log( nilai1*nilai2);
console.log('logika');
console.log( nilai1==nilai2);

//logika(==,!=,>,<,>=,<=)
//perbandingan(&&,||)
//3. struktur kontrol(if,switch dll.)
if (nilai1==nilai2) {
//kondisi benar
console.log('nilai 1 sama dengan nilai dua')


}else{
    //kondisi salah
    console.log('nilai 1 tidak sama dengan nilai dua')
}
//4. perulangan(for,while dll.)
for(let i=0; i<5; i++){
    console.log("ulang nilai",i);
}
//5. fungsi
function cetaknama(nama){
    return nama;

}
console.log(cetaknama("suci"));

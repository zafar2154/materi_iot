// // Variable
// var nama = 'zahid';
// console.log(nama);

// let umur = 17;
// console.log(umur);

// const nim = 22103304141;
// console.log(nim);

// const dataMahasiswa = ['goesny', 'khalif', 'dani', 'faiz', 'zahid', 'rifqi'];
// console.log(dataMahasiswa.slice(0,3));
// // perbedaan var, let, dan const
// {
//     var nama = 'eza';
//     let umur = 21;
//     const nim = 2013013130;
//     console.log(umur);
// }
// console.log(nama);
// console.log(umur);
// // console.log(nim);

// // // tipe data 
// console.log(typeof(dataMahasiswa));

// //operator

let x = 3;
let y = 5;
// //percabangan
//if else
// if (x > y) {
//     console.log("nilai x lebih dari y");
//     console.log(x);
//     console.log(y);
// }
// else if (x < y) {
//     console.log("nilai x lebih kecil dari y");
// }
// else {
//     console.log("nilai x sama dengan y");
// }

// //switch
// switch (x) {
//     case 3:
//         console.log("angka ini adalah 3");
//         break;
//     case 4:
//         console.log("angka ini adalah 4");
//         break;
//     default:
//         console.log("ga ada angka disini");
// }

// let ngulang = 1; //nilai saat ini 0
// while (ngulang <= 10) {
//     console.log("hello world" + ngulang);
//     //nilai nya tetep 0
//     ngulang+=3;
//     //nilai 1
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// //array
// const angka = [1, 2, 3, 4, 5];
// const buah = ['apel', 'mangga', 'pisang'];
// const campur = [123, 'halo', true, null];

// //function
// //fungsi umum
// function halo(s, t) {
//     console.log('halo selamat datang di kereta argojaya')
// }


//expression function
// let hitungKecepatan = function (s, t) {
// 
//     return s/t;
// }
// console.log(hitungKecepatan(20,2));

// // //modern function
// let itungKecepatan = (s, t) => { return s / t };
// let mobil1 = itungKecepatan(20, 3);

// let nyapaNama = (nama) => console.log("hallo nama aku " + nama);

// let nyapa = () => console.log("pemberitahuan kereta akan tiba 5 menit lagi");
// nyapa();

// console.log(itungKecepatan(20, 3));


//Object
// //object literal
// let mahasiswa = {
//     nama: "eza",
//     nim: 2210314068,
//     nyapa: function () { console.log(`halo nama gw ${this.nama}, nim ${this.nim}`) }
// }
// console.log(mahasiswa.nyapa())
//make class
// class Orang {
//     constructor(nama, nim, umur) {
//         this.nama = nama;
//         this.nim = nim;
//         this.umur = umur;
//     }
//     sapa() { console.log(`halo nama saya ${this.nama}, umur saya ${this.umur} tahun. Salam kenal semuanya`) };
// }
// eza = new Orang('eza', 221031030, 19);
// console.log(eza.sapa());
// var orang = new Orang('zahid', 2213013104, 19);
// console.log(orang);
// orang.sapa();

// let Manusia = function (nama, nik, umur) {
//     this.nama = nama;
//     this.nik = nik;
//     this.umur = umur;

//     this.sapa = () => { console.log(`oi nama saya ${nama}, umur ${umur}`) };
// }

// let eza = new Manusia('eza', 2319013019301, 19);
// eza.sapa();

// // DOM
const id = document.getElementById('id');
console.log(id.setAttribute='yanto');
id.classList.remove('yanto');
// const kelas = document.getElementsByClassName('kelas');
// console.log(kelas);

// for (i = 0; i < kelas.length; i++) {
//     kelas[i].style.color = 'blue';
// }

// const paragraf = document.querySelectorAll('div');
// console.log(paragraf);
// paragraf.style.backgroundColor = 'black';

//event
const gantiwarna = document.getElementById('gantiwarna');

gantiwarna.addEventListener('click', () => {
    gantiwarna.style.backgroundColor='aqua';
});
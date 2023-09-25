/* 
- Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
- Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu nama dan peran. 
- Variabel peran harus memiliki isi data, bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi".
- Bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
- Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
===========================TUGAS============================
- Tugas Anda adalah untuk membuat program yang mengecek isi variabel nama dan peran serta mengeluarkan respon sesuai isi variabel tersebut.
- Ada 4 jenis respons sesuai dengan 3 jenis peran yaitu:
1. halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
2. halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
3. halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada.
- Tips:
tips belajar penggunaan `` (backtick) pada javascript agar
mudah dalam memasukan variabel ke dalam string
tapi tanpa backtick juga ga masalah sih yg penting output sesuai
*/

// algoritma
// isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
/*
1.  Buat variabel let untuk menampung nama dan peran
2.  Pengecekan apakah nama kosong atau tidak
3.  Jika nama kosong, maka tampilkan peringatan "nama wajib diisi"
4.  Pengecekan apakah peran kosong atau tidak
5.  Jika peran kosong, maka tampilkan peringatan "Pilih Peranmu untuk memulai game"
6.  Jika semua kondisi (nama dan peran) sudah terisi, lakukan pengecekan terhadap peran yang dipilih
7.  Jika perannya Ksatria, maka peringatan "Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!"
8.  Jika perannya Tabib, maka peringatan "Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka"
9.  Jika perannya Penyihir, maka peringatan "Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"
10. Jika perannya bukan Ksatria, Tabib, dan Penyihir, maka tampilkan "peran yang kamu pilih ga ada, kamu jadi bot aja ya.."
11. End of program
*/

// =-=-=-=-=-=-=-= CODE =-=-=-=-=-=-=-=-=
// Buat variabel nama dan peran
let nama = "Ihsan", peran = "Bro";

// Pengecekan apakah nama kosong atau tidak
if (nama == "") {
    console.log("Nama wajib diisi");
} else {
    // Pengecekan apakah peran kosong atau tidak
    if (peran == "") {
        console.log("Pilih Peranmu untuk memulai game");
    } else {
        // Jika semua kondisi (nama dan peran) sudah terisi, lakukan pengecekan terhadap peran yang dipilih
        if (peran == "Ksatria") {
            console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
        } else if (peran == "Tabib") {
            console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
        } else if (peran == "Penyihir") {
            console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
        } else {
            console.log(`Halo ${nama}, peran yang kamu pilih ga ada, kamu jadi bot aja ya...`);
        }
    }
}


/* Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.
   Gunakan switch case untuk kasus ini!
   Contoh:
   let hari = 21; let bulan = 1; let tahun = 1945;
   Maka hasil yang akan tampil di console adalah: '21 Januari 1945';
   tips gunakan keyword ini di google "conditional switch case javascript"
   dan mulailah membaca dan mencontek di stackoverflow xixixi */

// ===== ALGORITMA =====
/*
1.  Buat variabel let untuk menampung hari, bulan, namaBulan, dan tahun
2.  Pengecekan apakah tanggal kosong atau tidak
3.  Jika tanggal kosong, maka tampilkan peringatan "Tanggal wajib diisi"
4.  Pengecekan apakah tanggal antara 1-31 atau tidak
5.  Jika tanggal tidak diantara 1-31, maka tampilkan peringatan "Tanggal tidak valid"
6.  Pengecekan apakah bulan kosong atau tidak
7.  Jika bulan kosong, maka tampilkan peringatan "Bulan wajib diisi"
8.  Pengecekan apakah bulan antara 1-12 atau tidak
9.  Jika bulan tidak diantara 1-12, maka tampilkan peringatan "Bulan tidak valid"
10. Jika sudah valid, konversi angka bulan menjadi nama bulan dengan switch statement
11. Masukkan hasil konversi ke variabel namaBulan
12. Pengecekan apakah tahun kosong atau tidak
13. Jika tahun kosong, maka tampilkan peringatan "Tahun wajib diisi"
14. Pengecekan apakah tahun antara 1900-2200 atau tidak
15. Jika tahun tidak diantara 1900-2200, maka tampilkan peringatan "Tahun tidak valid"
16. Jika semua kondisi sudah terisi dengan benar, maka cetak teks dengan format "tanggal namaBulan tahun" (misal: 4 Oktober 1999) 
*/

let tanggal = 4; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 10; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
let namaBulan = ""; // untuk memasukkan hasil konversi angka bulan menjadi nama bulan

// Pengecekan tanggal 
if (tanggal == "") {
    console.log("Tanggal wajib diisi");
} else {
    if (tanggal >= 1 && tanggal <= 31) {
        // Pengecekan bulan
        if (bulan == "") {
            console.log("Bulan wajib diisi");
        } else {
            if (bulan >= 1 && bulan <= 12) {
                // Konversi angka bulan menjadi nama bulan
                switch (bulan) {
                    case 1:
                        namaBulan = "Januari";
                        break;
                    case 2:
                        namaBulan = "Februari";
                        break;
                    case 3:
                        namaBulan = "Maret";
                        break;
                    case 4:
                        namaBulan = "April";
                        break;
                    case 5:
                        namaBulan = "Mei";
                        break;
                    case 6:
                        namaBulan = "Juni";
                        break;
                    case 7:
                        namaBulan = "Juli";
                        break;
                    case 8:
                        namaBulan = "Agustus";
                        break;
                    case 9:
                        namaBulan = "September";
                        break;
                    case 10:
                        namaBulan = "Oktober";
                        break;
                    case 11:
                        namaBulan = "November";
                        break;
                    case 12:
                        namaBulan = "Desember";
                        break;
                    default:
                        console.log("Bulan tidak valid");
                }
                // Pengecekan tahun
                if (tahun == "") {
                    console.log("Tahun wajib diisi");
                } else {
                    if (tahun >= 1900 && tahun <= 2200) {
                        console.log(`${tanggal} ${namaBulan} ${tahun}`);
                    } else {
                        console.log("Tahun tidak valid");
                    }
                }
            } else {
                console.log("Bulan tidak valid");
            }
        }
    } else {
        console.log("Tanggal tidak valid");
    }
}

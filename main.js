// PROGRAM IF...ELSE
let bilangan = prompt('"INI PROGRAM IF.ELSE" Silahkan Masukkan angka');
if (bilangan % 2 == 0) {
  alert('Angka genap');
} else {
  alert('Angka ganjil');
}

// PROGRAM NESTED IF
let beratBadan = prompt('Masukkan Berat Badan Anda');
if (beratBadan > 60) {
  alert('Berat Badan Anda Ideal');
} else if (beratBadan >= 30 && beratBadan <= 60) {
  alert('Berat Badan Anda Kurang IDEAL');
} else {
  alert('Anda Harus Makanan Bergizi Berprotein dan Olahraga');
}

// PROGRAM SWITCH CASE
const browser = prompt('INI PROGRAM SWITCH CASE "Masukan Nama Browser Anda Apakah Mendukun Aplikasi Ini ; edge/chrome/firefox/safari"');

switch (browser) {
  case 'edge':
    alert('Browser Anda tidak mendukung aplikasi ini');
    break;
  case 'chrome':
  case 'firefox':
  case 'safari':
    console.log('Browser Anda mendukung aplikasi ini');
    break;
  default:
    alert('Semoga tampilan aplikasi ini cukup baik');
    break;
}

// PROGRAM FOR STATEMENT
document.write('PROGRAM "FOR STATEMENT"' + '<br>');
document.write('=== MENU MAKANAN ===' + '<br>');

let menuMakanan = 'Makanan lezat';
for (x = 1; x <= 2; x++) {
  document.write(menuMakanan + '<br>');
}
document.write('Selamat menikmati makanan, Daris' + '<br>');
document.write('Makanan lezat untuk Anda~');
document.write('<br><br><br>');

// PROGRAM WHILE STATEMENT
document.write('PROGRAM "WHILE STATEMENT"' + '<br>');
document.write('=== ANGKA GANJIL 1 SAMPAI 50 ===' + '<br>');
let i = 1;
while (i <= 50) {
  document.write(i + ' ');
  i += 2;
}

document.write('<br><br>');

// PROGRAM DO...WHILE STATEMENT
document.write('PROGRAM "DO WHILE STATEMENT"' + '<br>');
document.write('=== ANGKA GENAP 1 SAMPAI 50 ===' + '<br>');
let v = 0;
do {
  v += 2;
  document.write(v + ' ');
} while (v <= 50);

document.write('<br><br><br>');

// PROGRAM FUNCTION
document.write('PROGRAM "FUNCTION"' + '<br>');
document.write('=== PROGRAM 5 ===' + '<br>');

function tampilkanJadwal(hari, kegiatan) {
  document.write('Hari ' + hari + ': ' + kegiatan + '<br>');
}

// Menampilkan jadwal untuk beberapa hari
tampilkanJadwal('Senin', 'Mengajar kelas');
tampilkanJadwal('Selasa', 'Rapat tim');
tampilkanJadwal('Rabu', 'Studi mandiri');
tampilkanJadwal('Kamis', 'Berkumpul dengan teman');
tampilkanJadwal('Jumat', 'Meeting klien');

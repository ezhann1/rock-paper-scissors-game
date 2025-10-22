# Permainan Batu Kertas Gunting

## Deskripsi Singkat
Permainan Batu Kertas Gunting adalah aplikasi web sederhana yang memungkinkan pengguna bermain melawan komputer. Tujuan aplikasi ini adalah untuk memberikan hiburan interaktif sambil memperkenalkan dasar-dasar logika pemrograman JavaScript, seperti event handling, fungsi, manipulasi DOM, dan penyimpanan data lokal. Permainan ini cocok untuk pemula dalam pengembangan web dan dapat digunakan sebagai tugas pembelajaran. Skor disimpan secara lokal menggunakan localStorage, sehingga bertahan antar sesi browser.

## Fitur Utama
- **Pemilihan Langkah**: Pilih antara Batu, Kertas, atau Gunting dengan mengklik tombol yang disediakan.
- **Logika Permainan**: Komputer memilih langkah secara acak, dan hasil ronde (menang, kalah, atau seri) ditampilkan secara real-time.
- **Pembaruan Skor**: Skor pemain dan komputer diperbarui otomatis setelah setiap ronde, dengan penyimpanan lokal (localStorage) agar skor tidak hilang saat halaman di-refresh.
- **Reset Skor**: Tombol untuk mereset skor kembali ke nol, berguna untuk memulai permainan baru.
- **Responsivitas**: Tampilan yang menyesuaikan dengan perangkat mobile dan desktop (mobile-first design).
- **Aksesibilitas**: Tombol dilengkapi dengan label untuk screen reader.

### Cara Pakai
1. Buka file `index.html` di browser web (misalnya, Chrome atau Firefox), atau akses halaman live via GitHub Pages jika tersedia.
2. Klik salah satu tombol (Batu, Kertas, atau Gunting) untuk memilih langkah Anda.
3. Lihat hasil ronde di bagian bawah, dan skor akan diperbarui secara otomatis (disimpan di localStorage).
4. Jika ingin memulai ulang, klik tombol "Reset Skor".
5. Mainkan sebanyak yang diinginkan – skor akan bertahan bahkan setelah refresh halaman!

## Struktur Folder
Proyek ini menggunakan struktur folder rapi untuk kemudahan pengelolaan:
rock-paper-scissors/
├── index.html          
├── css/
│   └── style.css       
├── js/
│   └── index.js        
└── README.md           

## Teknologi yang Digunakan
- **HTML5**: Untuk struktur halaman web dan elemen interaktif.
- **CSS3**: Untuk styling, responsivitas (dengan Flexbox dan media query mobile-first), dan efek visual seperti hover.
- **JavaScript (ES6+)**: Untuk logika permainan, event handling, manipulasi DOM, dan penyimpanan data dengan localStorage tanpa framework eksternal.

Aplikasi ini tidak memerlukan server atau dependensi tambahan – cukup buka file HTML di browser.

## Catatan Sumber Inspirasi/Rujukan
Kode ini dimodifikasi dari proyek Rock Paper Scissors Game yang dikopi dari sumber eksternal (seperti tutorial atau repositori open-source umum di GitHub). Perubahan utama meliputi penambahan fitur reset skor, responsivitas penuh (mobile-first), aksesibilitas (seperti `aria-label`), penyimpanan skor dengan localStorage, struktur folder rapi (/css, /js), dan terjemahan ke bahasa Indonesia.
- **refrensi**: https://www.100jsprojects.com/project/rock-paper-scissors-game

## Link Youtube
- **link youtube**: https://www.youtube.com/watch?v=4ASIVxCvE8c

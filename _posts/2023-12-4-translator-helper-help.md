---
layout: post
title: Translator Helper Guide
date: 2023-12-04
description: Simple guide for Translator Helper user
categories: Guide
giscus_comments: false
related_posts: true
---
**Translator Helper** adalah aplikasi ini berjalan di **latar belakang** (langsung minimize setelah dijalankan) untuk  membantu meringankan beberapa pekerjaan penerjemah, tertama **typo**.
Premisnya sederhana, typo itu tidak baik, memperbaiki typo sambil bekerja itu menyebalkan, jadi sebaiknya ada aplikasi untuk mencegah typo itu terjadi, _in the first place_.
Lalu, saya mengembangkan aplikasi sederhana ini dari tahun 2022 akhir hingga sekarang dan menamainya **Translator Helper** untuk menunjukkan bahwa ini adalah _passion project_ saya terhadap dunia penerjemahan.
_I love translation and language intricacies_.
Semoga Anda juga menyukainya seperti saya.

> ## Fitur utama

### Autocorrection
---
Otomatis mengoreksi kesalahan eja/kata kasar.
Akan ada pemberitahuan di kiri bawah desktop bertuliskan "Translator Helper have just saved you from a typo".

> Tip:
> 
> Pengguna cukup mengaktifkan aplikasi dan mengetik seperti biasa.
> Aplikasi akan otomatis mengoreksi jika ada typo/kata kasar yang terdeteksi.[^1]
> Misal, saat mengetik *anda menjadi Anda, tai menjadi tadi*.
{: .block-tip }

### KeyRepeater
---
Tidak perlu menekan kombinasi keyboard berulang kali karena ada bantuan KeyRepeater. *No more carpal tunnel syndrome!*

> Tip:
> 
> Klik kiri di ikon Translator Helper di taskbar, lalu pilih agar KeyRepeater.
> Setelah itu, masukkan kombinasi kata/keyboard yang diinginkan.
{: .block-tip }

**Cheatsheet:** menyusul

### Obfuscating/masking origin untuk Trados Studio
---
Menghilangkan informasi origin di Trados Studio, IYKYK.[^2] **USE AT YOUR OWN RISK**.

> Tip:
> 
> Tekan **Ctrl + Space**.
> **Sangat disarankan** untuk tidak menekan apa pun saat prosesnya berlangsung
{: .block-tip }  

> ## Fitur bantuan/masukan:

### On-screen helps/notices untuk fitur 1 and 2
---
Tombol bantuan yang tersedia di berbagai UI Translator Helper.

> Tip:
> 
> Tekan tombol **?** jika ada di tiap UI fiturnya.
{: .block-tip }

### New typo submission jika berkontribusi terhadap database autocorrect Translator Helper
---
Kesal dengan belum otomatis diperbaiki oleh Translator Helper?
Sarankan typo kata dan ejaan kata Anda melalui menu tray **New Entries** atau shortcutnya tersedia.
Kolom pertama berisi typo yang ingin dikoreksi dan kolom kedua edit sesuai dengan ejaan yang benar.

> Tip:
> 
> Setelah menyorot typo kata yang ingin dikoreksi, tekan **Win + Q** untuk shortcut membuka New typo submission.
> Lalu, edit kolom **Correction entry** dengan kata dengan ejaan yang benar.
> **Perlu koneksi internet**.
> Akan ada notifikasi di atas taskbar yang memberi tahu apakah pengiriman typo ke server saya berhasil atau tidak.
{: .block-tip }

### Pengecekan versi di About
---
Ingin tahu apakah data base Translator Helper sudah diupdate atau belum?
Anda cukup buka menu tray **About** dan melihat versi aplikasi yang Anda gunakan dan versi terbaru **Translator Helper**.

> Tip:
> 
> Di kiri bawah, klik kanan dan pilih **About** lalu tekan tombol **Check** di bawah *Translator Helper version X.X.X*.
{: .block-tip }

### Menambahkan fitur Suspend
---
Aplikasi bisa dijeda (suspend) agar tidak mengoreksi otomatis teks yang sedang Anda ketik jika diperlukan.
Ini berguna, misalnya, saat Anda mengobrol melalui obrolan WhatsApp yang terlalu formal atau saat Anda bermain game.

> Tip:
> 
> Di ikon tray Translator Helper, klik kanan lalu pilih **Suspend** untuk menjeda semua autocorrection dan tekan **Unsuspend** untuk membatalkan jeda.
> Icon akan berubah menjadi **S** dengan warna hijau.
{: .block-tip }

- User feedback (next update)

> ## Fitur statistik dan logging

- Mencatat berapa kali aplikasi ini membantu Anda pada sesi ini dan semua sesi.
- Statistik bisa dilihat di tab **Stats** pada menu tray **About**.
- Mencatat typo yang dilakukan pengguna di tab **History** pada menu tray **About**.

> ## Fitur keamanan

- Pw-based login (current version):
Pengguna memasukkan sandi agar bisa menggunakan aplikasi. 

- License-based (next major version)

### Informasi lain
---
Translator Helper akan diupdate seminggu hingga dua minggu sekali dan update history akan bisa dilihat di situs ini (mungkin).

[^1]: hanya yang sudah dimasukkan database, tidak untuk dua kata yang dipisah spasi, dan jarak pengetikan antarkarakter/kata tidak terlalu lama.
[^2]: tidak bisa digunakan bersamaan dengan KeyRepeater, more testing needed.

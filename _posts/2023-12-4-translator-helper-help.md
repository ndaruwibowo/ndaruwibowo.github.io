---
layout: post
title: Translator Helper Guide
date: 2023-12-04
description: Simple guide for Translator Helper user
categories: Guide
giscus_comments: false
related_posts: true
---

# <img src="https://github.com/ndaruwibowo/translator-helper/blob/main/img/_Logo%20Translator%20Helper.png" width="40" height="40"> TRANSLATOR HELPER GUIDE

## Fitur utama

### Autocorrection

Otomatis mengoreksi kesalahan eja/kata kasar. Akan ada pemberitahuan di kiri bawah desktop bertuliskan "Translator Helper have just saved you from a typo".

**How to:** Pengguna cukup Otomatis aktif jika ada typo/kata kasar yang terdeteksi.[^1] Misal, saat mengetik *anda menjadi Anda, tai menjadi tadi*.

### KeyRepeater

Tidak perlu menekan kombinasi keyboard berulang kali. *No more carpal tunnel syndrome!*

**How to:** Klik kiri di ikon Translator Helper di taskbar, lalu pilih agar KeyRepeater. Setelah itu, masukkan kombinasi kata/keyboard yang diinginkan.

**Cheatsheet:** menyusul

### Obfuscating/masking origin untuk Trados Studio

Menghilangkan informasi origin di Trados Studio.[^2] **USE AT YOUR OWN RISK**.

**How to:** Tekan Ctrl + Space. Disarankan untuk tidak menekan apa pun saat prosesnya berlangsung
  

## Fitur bantuan/masukan:

### On-screen helps/notices untuk fitur 1 and 2

**How to:** Tekan tombol ? jika ada di tiap UI fiturnya.

### New autocorrect suggestions untuk menambah jumlah database autocorrect

**How to:** Tekan Win + Q. Kolom pertama berisi typo yang ingin dikoreksi dan kolom kedua edit sesuai dengan ejaan yang benar. Perlu koneksi internet. Jika pengiriman berhasil, akan ada notifikasi di atas taskbar.

### Pengecekan versi di About

**How to:** Di kiri bawah, klik kanan dan pilih About. Tekan tombol "Check" di bawah *Translator Helper version X.X.X*.

### Menambahkan fitur Suspend untuk menghentikan semua autocorrection jika diperlukan

**How to:** Di ikon tray Translator Helper, klik kanan lalu pilih **Suspend** untuk menjeda semua autocorrection dan tekan **Unsuspend** untuk membatalkan jeda. Icon akan berubah menjadi **S** dengan warna hijau. (Patch berikutnya akan menghilangkan ini agar tidak membingungkan pengguna)

- User feedback (next update)

## Fitur statistik dan logging:

- Mencatat berapa kali aplikasi ini membantu Anda pada sesi ini dan semua sesi. Bisa dilihat di tab Stats pada About.

## Fitur keamanan:

- Pw based login (current version):
Pengguna memasukkan sandi agar bisa menggunakan aplikasi.

- License based (next major update)

## Informasi lain

Translator Helper akan diupdate seminggu sekali dan update history.

[^1]: hanya yang sudah dimasukkan database, tidak untuk dua kata yang dipisah spasi, dan jarak pengetikan antarkarakter/kata tidak terlalu lama.
[^2]: tidak bisa digunakan bersamaan dengan KeyRepeater, more testing needed.

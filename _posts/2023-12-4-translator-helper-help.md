---
layout: post
title: Translator Helper Guide
date: 2023-12-04
description: Simple guide for Translator Helper user
categories: Guide
giscus_comments: false
related_posts: true
---
> # Translator Helper

Translator Helper adalah passion project saya terhadap dunia penerjemahan. Aplikasi ini akan otomatis 

> ## Fitur utama

> ### Autocorrection

Otomatis mengoreksi kesalahan eja/kata kasar. Akan ada pemberitahuan di kiri bawah desktop bertuliskan "Translator Helper have just saved you from a typo".

> Tip:
> 
> Pengguna cukup Otomatis aktif jika ada typo/kata kasar yang terdeteksi.[^1] Misal, saat mengetik *anda menjadi Anda, tai menjadi tadi*.
{: .block-tip }

> ### KeyRepeater

Tidak perlu menekan kombinasi keyboard berulang kali. *No more carpal tunnel syndrome!*

> Tip:
> 
> Klik kiri di ikon Translator Helper di taskbar, lalu pilih agar KeyRepeater. Setelah itu, masukkan kombinasi kata/keyboard yang diinginkan.
{: .block-tip }

**Cheatsheet:** menyusul

> ### Obfuscating/masking origin untuk Trados Studio

Menghilangkan informasi origin di Trados Studio.[^2] **USE AT YOUR OWN RISK**.

> Tip:
> 
> Tekan Ctrl + Space. Disarankan untuk tidak menekan apa pun saat prosesnya berlangsung
{: .block-tip }  

> ## Fitur bantuan/masukan:

> ### On-screen helps/notices untuk fitur 1 and 2

> Tip:
> 
> Tekan tombol ? jika ada di tiap UI fiturnya.
{: .block-tip }

> ### New autocorrect suggestions untuk menambah jumlah database autocorrect

> Tip:
> 
> Tekan Win + Q. Kolom pertama berisi typo yang ingin dikoreksi dan kolom kedua edit sesuai dengan ejaan yang benar. Perlu koneksi internet. Jika pengiriman berhasil, akan ada notifikasi di atas taskbar.
{: .block-tip }

> ### Pengecekan versi di About

> Tip:
> 
> Di kiri bawah, klik kanan dan pilih About. Tekan tombol "Check" di bawah *Translator Helper version X.X.X*.
{: .block-tip }

> ### Menambahkan fitur Suspend untuk menghentikan semua autocorrection jika diperlukan

> Tip:
> 
> Di ikon tray Translator Helper, klik kanan lalu pilih **Suspend** untuk menjeda semua autocorrection dan tekan **Unsuspend** untuk membatalkan jeda. Icon akan berubah menjadi **S** dengan warna hijau. (Patch berikutnya akan menghilangkan ini agar tidak membingungkan pengguna)
{: .block-tip }

- User feedback (next update)

> ## Fitur statistik dan logging:

- Mencatat berapa kali aplikasi ini membantu Anda pada sesi ini dan semua sesi. Bisa dilihat di tab **Stats** pada About.

> ## Fitur keamanan:

- Pw based login (current version):
Pengguna memasukkan sandi agar bisa menggunakan aplikasi. 

- License based (next major version)

> ## Informasi lain

Translator Helper akan diupdate seminggu hingga dua minggu sekali dan update history akan bisa dilihat di situs ini.

[^1]: hanya yang sudah dimasukkan database, tidak untuk dua kata yang dipisah spasi, dan jarak pengetikan antarkarakter/kata tidak terlalu lama.
[^2]: tidak bisa digunakan bersamaan dengan KeyRepeater, more testing needed.

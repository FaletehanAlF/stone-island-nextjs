# STONE ISLAND — Landing Page

Landing page bertema fashion untuk **Stone Island Concept Store** yang dibuat menggunakan **Next.js dan React**.

Project ini dibuat sebagai **tugas pembelajaran dan latihan pengembangan website menggunakan component-based architecture**. Fokus utama project adalah mempelajari cara membuat struktur halaman yang modern, responsif, terorganisir, serta menggunakan komponen React yang dapat digunakan kembali.

> **Catatan:** Project ini merupakan **concept project untuk pembelajaran** dan bukan website resmi Stone Island. Sebagian besar fitur masih berupa tampilan antarmuka dan belum terhubung dengan backend atau database.

---

## 📌 Tentang Project

Project ini merupakan website landing page fashion dengan konsep visual modern, minimalis, dan dominan warna hitam, putih, serta abu-abu.

Website dibuat untuk mempelajari beberapa konsep penting dalam pengembangan aplikasi web menggunakan Next.js, seperti:

- Struktur folder Next.js App Router
- React Components
- Props
- State
- Client Component
- Navigasi antar halaman
- Responsive Design
- Tailwind CSS
- Animasi dan transition
- Form input
- Validasi form sederhana
- Layout website modern
- Pemisahan komponen berdasarkan fungsi

Project juga memiliki halaman **Login** dan **Register** sebagai bagian dari latihan pembuatan sistem autentikasi.

Namun, sistem autentikasi tersebut **belum terhubung dengan database atau authentication service**.

---

# ✨ Fitur Website

## 1. Landing Page

Halaman utama website berisi beberapa section yang saling terhubung.

Bagian utama landing page terdiri dari:

- Navbar
- Hero Section
- About
- Category
- Produk
- Review
- Contact
- Footer

Landing page menggunakan konsep desain modern dengan:

- Background image
- Overlay
- Typography minimalis
- Animasi hover
- Smooth scrolling
- Responsive layout
- Card layout
- Animasi transition
- Visual fashion-oriented

---

## 2. Navbar

Navbar digunakan sebagai navigasi utama website.

Menu yang tersedia antara lain:

- Home
- About
- Category
- Produk
- Review
- Contact

Navbar juga memiliki:

- Logo
- Link navigasi
- Tombol Login
- Tombol Register
- Responsive navigation
- Background transparan pada Hero
- Efek blur ketika halaman di-scroll
- Animasi hover

Navbar dibuat sebagai component terpisah agar mudah digunakan dan dikembangkan.

---

## 3. Hero Section

Hero merupakan bagian pertama yang dilihat ketika pengguna membuka website.

Hero memiliki beberapa elemen:

- Background image
- Overlay
- Judul utama
- Deskripsi
- Tombol Explore Collection
- Rating
- Foto profil pengguna
- Informasi jumlah customer
- Informasi lokasi
- Animasi dan transition

Tombol **Explore Collection** digunakan untuk mengarahkan pengguna menuju bagian produk.

Hero dibuat dengan layout yang berada di tengah agar tampilan terlihat lebih modern dan fokus.

---

## 4. About

Section About digunakan untuk menjelaskan konsep dan filosofi brand.

Informasi yang ditampilkan meliputi:

- Filosofi brand
- Deskripsi material
- Konsep desain
- Informasi produksi
- Informasi jumlah fabric
- Informasi lokasi produksi

Section ini menggunakan layout modern dengan perpaduan:

- Image
- Typography
- Grid
- Border
- Spacing
- Responsive design

---

## 5. Category

Section Category digunakan untuk menampilkan kategori produk.

Kategori yang digunakan antara lain:

- Jackets
- Outerwear
- Sweatshirts
- T-Shirts
- Trousers
- Accessories

Setiap kategori ditampilkan menggunakan card dengan:

- Background image
- Overlay
- Nama kategori
- Hover animation
- Image zoom effect
- Transition

---

## 6. Produk

Section Produk digunakan untuk menampilkan daftar produk.

Beberapa contoh produk:

- Soft Shell-R
- Nylon Metal Jacket
- Ghost Piece Overshirt
- Compass Hoodie
- Cargo Pants
- Technical Vest
- Cotton Fleece Tee
- Garment Dyed Jacket

Setiap product card memiliki:

- Foto produk
- Nama produk
- Kategori
- Harga
- Warna
- Secondary image
- Hover effect
- Wishlist icon

Product card dibuat menggunakan React Component sehingga dapat digunakan berulang kali dengan data yang berbeda.

---

## 7. Review

Section Review digunakan untuk menampilkan ulasan pelanggan.

Setiap review berisi:

- Foto/profile pengguna
- Nama
- Lokasi
- Rating
- Deskripsi atau komentar
- Status verified purchase

Review ditampilkan dalam bentuk card dengan layout responsive.

---

## 8. Contact

Section Contact digunakan sebagai halaman atau bagian untuk menghubungi customer service.

Form contact memiliki beberapa input:

- Nama
- Email
- Pesan

Form juga memiliki validasi sederhana.

Jika input kosong, pengguna akan mendapatkan notifikasi.

Jika form berhasil dikirim, pengguna akan mendapatkan notifikasi berhasil.

> Form ini masih berupa simulasi tampilan dan belum mengirim data ke server atau database.

---

## 9. Login

Website memiliki halaman Login.

Halaman Login berisi:

- Email / Username
- Password
- Tombol Login
- Link Register
- Validasi input sederhana
- Notifikasi

Namun sistem Login **belum menggunakan authentication backend**.

Login masih digunakan sebagai latihan pembuatan halaman dan interaksi React.

---

## 10. Register

Website juga memiliki halaman Register.

Form Register berisi:

- Username
- Email
- Password
- Konfirmasi Password
- Tombol Register
- Link menuju Login
- Validasi sederhana

Sama seperti Login, halaman Register masih berupa **UI dan simulasi**.

Belum terdapat:

- Database
- API
- Supabase
- Firebase
- Authentication service

---

# 🗂️ Struktur Folder

Struktur utama project:

```text
BELAJAR-NEXT-JS-PWD/
│
├── app/
│   │
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Category.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── PhotoShowcase.jsx
│   │   ├── Produk.jsx
│   │   └── Review.jsx
│   │
│   ├── home/
│   │   └── page.jsx
│   │
│   ├── login/
│   │   └── page.jsx
│   │
│   ├── register/
│   │   └── page.jsx
│   │
│   ├── PhotoShowcase/
│   │   └── page.jsx
│   │
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.jsx
│
├── public/
│
├── node_modules/
│
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── ...
```

---

# 📁 Penjelasan Folder

## `app/`

Folder utama untuk menggunakan **Next.js App Router**.

Semua halaman dan komponen utama project berada di dalam folder ini.

---

## `app/components/`

Folder ini berisi component React yang digunakan pada website.

Contohnya:

### `Navbar.jsx`

Berfungsi sebagai navigasi website.

### `Hero.jsx`

Berfungsi sebagai bagian utama atau hero section.

### `About.jsx`

Berisi informasi mengenai konsep dan filosofi website.

### `Category.jsx`

Menampilkan berbagai kategori produk.

### `Produk.jsx`

Menampilkan daftar produk.

### `Review.jsx`

Menampilkan review pelanggan.

### `Contact.jsx`

Menampilkan form untuk menghubungi customer service.

### `PhotoShowcase.jsx`

Digunakan untuk menampilkan showcase gambar.

### `Footer.jsx`

Berisi bagian footer website.

---

# 📄 Folder Halaman

## `app/page.jsx`

Merupakan halaman utama website.

Halaman ini menggabungkan beberapa component seperti:

```text
Navbar
Hero
About
Category
Produk
Review
Contact
Footer
```

---

## `app/login/page.jsx`

Merupakan halaman Login.

URL:

```text
/login
```

---

## `app/register/page.jsx`

Merupakan halaman Register.

URL:

```text
/register
```

---

## `app/home/page.jsx`

Merupakan halaman Home tambahan yang digunakan sebagai bagian dari struktur pembelajaran routing.

URL:

```text
/home
```

---

## `app/PhotoShowcase/page.jsx`

Merupakan halaman untuk menampilkan showcase foto.

URL:

```text
/PhotoShowcase
```

---

# 🎨 Teknologi yang Digunakan

Project ini menggunakan beberapa teknologi berikut:

| Teknologi | Fungsi |
|---|---|
| Next.js | Framework utama |
| React | Membuat component UI |
| JavaScript | Bahasa pemrograman |
| Tailwind CSS | Styling dan responsive design |
| Lucide React | Icon |
| ESLint | Membantu menjaga kualitas kode |
| CSS | Styling tambahan |
| Next.js App Router | Sistem routing |

---

# ⚙️ Persyaratan

Sebelum menjalankan project, pastikan sudah menginstall:

### Node.js

Disarankan menggunakan Node.js versi LTS.

Untuk mengecek versi Node.js:

```bash
node -v
```

Untuk mengecek npm:

```bash
npm -v
```

---

# 🚀 Cara Menjalankan Project

## 1. Clone Repository

Jika project berada di GitHub:

```bash
git clone <URL-REPOSITORY>
```

Masuk ke folder project:

```bash
cd BELAJAR-NEXT-JS-PWD
```

---

## 2. Install Dependency

Jalankan:

```bash
npm install
```

Perintah tersebut akan menginstall seluruh dependency yang terdapat pada `package.json`.

---

## 3. Jalankan Development Server

Gunakan:

```bash
npm run dev
```

Jika berhasil, biasanya akan muncul alamat:

```text
http://localhost:3000
```

Buka alamat tersebut menggunakan browser.

---

# 🖥️ Halaman Website

Setelah development server berjalan, beberapa halaman dapat diakses melalui:

### Landing Page

```text
http://localhost:3000/
```

### Home

```text
http://localhost:3000/home
```

### Login

```text
http://localhost:3000/login
```

### Register

```text
http://localhost:3000/register
```

### Photo Showcase

```text
http://localhost:3000/PhotoShowcase
```

---

# 🧩 Konsep Component

Project ini menggunakan konsep **Component-Based Development**.

Contohnya:

```jsx
<Navbar />
<Hero />
<About />
<Category />
<Produk />
<Review />
<Contact />
<Footer />
```

Dengan cara ini, setiap bagian website dipisahkan menjadi component tersendiri.

Keuntungan menggunakan component:

- Kode lebih terorganisir
- Lebih mudah dipelihara
- Component dapat digunakan kembali
- Mempermudah debugging
- Struktur project lebih jelas
- Mempermudah pengembangan fitur

---

# 📦 Contoh Penggunaan Component

Contoh sederhana pada `app/page.jsx`:

```jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Category from "./components/Category";
import Produk from "./components/Produk";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Category />
        <Produk />
        <Review />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

Dengan struktur tersebut, setiap bagian halaman memiliki tanggung jawab masing-masing.

---

# 📱 Responsive Design

Website dibuat agar dapat menyesuaikan berbagai ukuran layar.

Target perangkat:

- Desktop
- Laptop
- Tablet
- Smartphone

Beberapa elemen menggunakan responsive utility dari Tailwind CSS seperti:

```text
sm:
md:
lg:
xl:
```

Sehingga layout dapat berubah sesuai ukuran layar.

---

# ✨ Animasi dan Interaksi

Project menggunakan beberapa animasi sederhana untuk membuat website terasa lebih hidup.

Contohnya:

- Hover effect
- Image zoom
- Button transition
- Navbar transition
- Scroll effect
- Fade effect
- Card animation
- Menu animation
- Smooth scrolling

Animasi dibuat dengan tujuan menjaga tampilan tetap modern tetapi tidak berlebihan.

---

# 📝 Validasi Form

Form Login, Register, dan Contact memiliki validasi sederhana.

Contohnya:

```jsx
if (!email || !password) {
  alert("Silakan isi semua field.");
  return;
}
```

Validasi tersebut masih berjalan di sisi frontend.

Belum terdapat validasi dari server.

---

# ⚠️ Batasan Sistem

Project ini dibuat khusus untuk **pembelajaran**.

Oleh karena itu, beberapa fitur belum dapat digunakan secara penuh.

## Belum tersedia:

- Database
- Backend
- API
- Authentication
- Sistem session
- JWT
- Penyimpanan user
- Sistem pembayaran
- Sistem checkout
- Sistem order
- Wishlist database
- Cart database
- Admin dashboard
- CMS
- API produk
- Sistem pengiriman
- Payment gateway

---

# 🔐 Login dan Register

Halaman Login dan Register saat ini hanya digunakan untuk:

- Pembelajaran UI
- Pembelajaran React State
- Pembelajaran Form
- Pembelajaran Validasi
- Pembelajaran Routing
- Pembelajaran Client Component

Data pengguna **belum disimpan ke database**.

Dengan kata lain:

```text
Login
   ↓
Frontend
   ↓
Validasi
   ↓
Notifikasi
```

Belum sampai:

```text
Login
   ↓
Frontend
   ↓
API
   ↓
Backend
   ↓
Database
   ↓
Authentication
```

---

# 🛒 Sistem Produk

Data produk masih ditulis langsung di dalam component.

Contohnya:

```jsx
const products = [
  {
    id: 1,
    name: "Soft Shell-R",
    category: "Outerwear",
    price: "Rp 12.900.000",
  },
];
```

Belum menggunakan database atau API eksternal.

---

# 🖼️ Sistem Gambar

Gambar pada beberapa bagian website menggunakan asset lokal maupun sumber gambar eksternal sesuai kebutuhan project.

Jika menggunakan gambar lokal, pastikan file gambar berada pada lokasi yang benar.

Contoh:

```text
public/
└── images/
    ├── hero.jpg
    ├── p1.jpg
    ├── p2.jpg
    └── ...
```

Jika menggunakan URL eksternal, pastikan URL gambar masih aktif dan dapat diakses oleh browser.

---

# 🔧 Troubleshooting

## Error `Module not found`

Jika muncul:

```text
Module not found: Can't resolve ...
```

Periksa:

1. Nama file
2. Lokasi file
3. Extension file
4. Path import
5. Kapitalisasi nama file

Contoh:

```jsx
import Hero from "./components/Hero";
```

Pastikan file benar-benar berada di:

```text
app/components/Hero.jsx
```

---

## Error `useState`

Jika menggunakan:

```jsx
import { useState } from "react";
```

dan component menggunakan state atau event seperti:

```jsx
onClick
onChange
onSubmit
```

component tersebut harus menjadi **Client Component**.

Tambahkan di baris paling atas:

```jsx
"use client";
```

Contoh:

```jsx
"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      ...
    </div>
  );
}
```

---

# 🔄 Setelah Mengubah Kode

Jika perubahan tidak terlihat, coba:

### 1. Refresh browser

```text
Ctrl + R
```

atau:

```text
Ctrl + Shift + R
```

### 2. Restart development server

Tekan:

```text
Ctrl + C
```

Kemudian jalankan kembali:

```bash
npm run dev
```

---

# 📌 Catatan Penting Next.js

Component yang menggunakan:

- `useState`
- `useEffect`
- `onClick`
- `onChange`
- `onSubmit`
- Browser API
- `window`
- `document`

biasanya perlu menggunakan:

```jsx
"use client";
```

Sedangkan component yang hanya menampilkan data statis dapat tetap menjadi Server Component.

---

# 🎯 Tujuan Pembelajaran

Project ini dibuat untuk memahami:

### Dasar Next.js

- App Router
- Page
- Layout
- Routing
- Component

### Dasar React

- JSX
- Component
- Props
- State
- Event Handler
- Conditional Rendering
- Array Mapping

### Dasar Frontend

- Responsive Design
- Layout
- Typography
- Form
- Validation
- Animation
- Navigation

### Struktur Project

Mempelajari bagaimana membuat project dengan struktur yang terorganisir menggunakan component terpisah.

---

# 📈 Pengembangan Selanjutnya

Project ini masih dapat dikembangkan menjadi website e-commerce yang benar-benar berfungsi.

Beberapa pengembangan yang dapat dilakukan:

1. Menambahkan database
2. Menambahkan authentication
3. Menambahkan API
4. Membuat sistem login yang sebenarnya
5. Membuat sistem register
6. Membuat shopping cart
7. Membuat wishlist
8. Membuat detail produk
9. Membuat checkout
10. Menambahkan payment gateway
11. Membuat dashboard admin
12. Menambahkan sistem order
13. Menambahkan sistem inventory
14. Menambahkan search produk
15. Menambahkan filter produk
16. Menambahkan kategori dinamis

---

# 👨‍💻 Status Project

**Status:** `Development / Learning Project`

Project ini masih dalam tahap pembelajaran dan pengembangan.

| Fitur | Status |
|---|---|
| Landing Page | ✅ Selesai |
| Navbar | ✅ Selesai |
| Hero | ✅ Selesai |
| About | ✅ Selesai |
| Category | ✅ Selesai |
| Produk | ✅ Tampilan |
| Review | ✅ Tampilan |
| Contact | ✅ Tampilan + Validasi |
| Footer | ✅ Selesai |
| Login | ⚠️ Tampilan |
| Register | ⚠️ Tampilan |
| Authentication | ❌ Belum tersedia |
| Database | ❌ Belum tersedia |
| Backend | ❌ Belum tersedia |
| Payment | ❌ Belum tersedia |
| Cart | ❌ Belum tersedia |
| Wishlist | ⚠️ Tampilan |

---

# 📚 Kesimpulan

Project **STONE ISLAND — Landing Page** merupakan project pembelajaran berbasis **Next.js dan React** yang berfokus pada pembuatan website landing page fashion modern menggunakan pendekatan component-based.

Project ini tidak ditujukan sebagai website e-commerce yang sudah memiliki sistem backend lengkap, melainkan sebagai media pembelajaran untuk memahami:

```text
Next.js
   ↓
React
   ↓
Components
   ↓
Routing
   ↓
State
   ↓
Form
   ↓
Validation
   ↓
Responsive UI
   ↓
Animation
```

Pengembangan backend, database, authentication, dan fitur e-commerce dapat dilakukan pada tahap selanjutnya.

---

# ⚖️ Disclaimer

Project ini dibuat hanya untuk **keperluan pembelajaran dan tugas sekolah**.

Nama, konsep, dan inspirasi desain yang berkaitan dengan **Stone Island** digunakan sebagai bagian dari konsep pembelajaran dan **tidak berafiliasi dengan website atau perusahaan resmi Stone Island**.

Project ini bukan website resmi dan tidak digunakan untuk transaksi nyata.

---

# 🚀 Menjalankan Project

Perintah utama untuk menjalankan project:

```bash
npm install
```

Kemudian:

```bash
npm run dev
```

Buka browser:

```text
http://localhost:3000
```

---

## 👨‍💻 Dibuat Untuk Pembelajaran

**Project:** Stone Island Concept Landing Page  
**Framework:** Next.js  
**Library:** React  
**Bahasa:** JavaScript  
**Styling:** Tailwind CSS  
**Status:** Learning Project

---

**© 2026 Stone Island Concept Store — Learning Project**

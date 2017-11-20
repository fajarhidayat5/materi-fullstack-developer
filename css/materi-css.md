# Materi CSS3 (Cascading Style Sheet)

**Cascading Style Sheet**

Apa fungsi CSS? -> CSS adalah sebuah sintaks yang ditambahkan pada element-element HTML guna mempercantik tampilan website.

## Bekerja dengan CSS

* Buat folder baru css.
* Buat folder baru css/belajar-css
* Buat code default HTML.

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title></title>
            ...
        </head>
        <body>
            <h1>Belajar CSS</h1>
            <h2>CSS3</h2>
            

        </body>
        </html>

### Ada 3 cara menambahkan CSS pada halaman website html.

### Inline Style

Menambahka Atribut langsung pada element HTML.

Contoh :

    <h1 style="color:blue; border: solid 3px blue">Belajar CSS</h1>
    <h2 style="color:green">CSS3</h2>

Kelemahan **Inline Style**, bila ingin merubah sebuah element style harus merubah satu persatu setiap element yang ada pada setiap halaman.

### Internal Style

Menempatkan style code diantara tag head <head>.

Contoh :

    <style>
        h2 {
            background: #ccc; 
        }
        p {
            font-family: 'Times New Roman', Times, serif; 
            font-size: 20px;
            background: #e6f7f4;
        }
    </style>

### External CSS

Memepatkan style code di luar halaman, dengan membuat halaman khusus **.css**.

Buat file baru di root folder "style.css".

Membuat link untuk menghubungkan file css :

    <link rel="stylesheet" href="style.css">

Update style.css dibawah ini :

    body {
        background: #f1f1f1;
        }

        p {
        background: #fff !important;
    }    

External di rekomendasi oleh sebagian besar developer, karena code akan lebih rapih, mudah di update dan di manage.

### Element

3 Cara menambahkan style pada element :

1. Target langsung ke element.

    pada html :

        <body>

        <p>

    pada css : 

        body {
            background-color: grey;
        }

        h1 {
            text-align: center;
        }

        p {
            background: #fff !important;
        }

2. Menambahkan class pada element tsb.

    html :

        <div class="box"></div>
    
    css :

        .box {
            width: 100%;
            /* height: auto; */
            min-height: 200px;
            background-color: #888888;
            position: relative;
        }

3. Menambahkan id pada element tsb.

    html :

        <div id="lingkaran">
            <span class="text-lingkaran">Lingkaran</span>
        </div>

    css :

        text-lingkaran {
            color: yellow;
            position: absolute;
            top: 50%;
            left: 40%;
        }

### CSS Color

Tambahkan class "**container**" untuk merapihkan halaman.

    html :

    <div class="container">
        ...
    </div>
    
    css :

    .container {
        background-color: #ffffff;
        padding: 0 5px 0 5px;
        margin: 0 40px 0 40px;
        border: 1px solid #f4f4f4;
    }

### Gradient Color

Tambahkan warna gradien pada **box** dengan code css sbb :

    .box {
        ...
        ...
        background: linear-gradient();
    }

Tambahkan warna gradien pada **lingkaran** dengan code css sbb :

    #lingkaran {
        width: 300px;
        height: 300px;
        border-radius: 150px;
        /* background-color: #00a9ff; */
        background: linear-gradient(to right, #00a9ff, blue);
        margin: auto;
        position: relative;
    }

### CSS Shadow

Tambahkan pada code css sbb :

    h1 {
        ...
        text-shadow: 2px 2px
    }

Cek di browser

> catata: pixel pertama dari kiri adalah jarak vertical atas ke bawah, pixel kedua adalah jarak horizontal kiri kekanan.

Tambahkan color :

    h1 {
        ...
        text-shadow: 2px 2px black;
    }

Tambahkan aspek blur pada shadow :

    h1 {
        ...
        text-shadow: 2px 2px 5px black;
    }

Silahkan tambahkan sendiri untuk h2.

Tambahkan **box-shadow** untuk container.

    .container {
        ...
        ...
        box-shadow: 3px 5px 15px black;
    }

### Background dan Borders

#### Background

Tambahkan background image untuk body

    body {
        ...
        background-image: url(https://wallpapersite.com/images/pages/pic_w/4780.jpg);
    }

Silahkan tambahkan sendiri background image untuk box dan lingkaran.

Property lain dari background image adalah :

background-repeat: no-repeat

    Agar image tidak ditampilkan lebih dari 1 image.

background-size: cover

    Agar image size mengikuti dimensi browser.


#### Border

Tambahkan image

html :

    <img class="cat" src="https://i.pinimg.com/736x/3b/95/b4/3b95b43ee3ad06b81322226e11f21b9a--most-popular-cat-names-to-find-out.jpg" alt="">

css :

    .cat {
        max-width: 50%;
        height: auto;
        display: block;
        margin: auto;
    }

Tambahkan border :

    border-bottom: 10px dashed grey;

### Bekerja dengan Chrome Developer Tools

Klik kanan > klik inspect

### CSS Combination

Cara menggunakan selector / target **">"** pada CSS.

Contoh :

html 

    <ul>
        <li>Saya suka kucing</li>
        <li>Saya juga suka motor besar</li>
        <ol>
          <li>Motor besar cukup mahal harganya</li>
          <li>Apalagi Harley Dacocan</li>
        </ol>
        <li>Jadi saya beli kucing saja</li>
    </ul>

css

    ul li {
        color: red;
        font-size: 18px;
    }

    ul > li {
        color: blue;
        font-size: 22px;
    }

### CSS Grouping

Contoh :

    h1, h2, h3 {
        color: #888;
        text-shadow: 2px 2px 5px black;
    }

Percobaan: Buat class container baru dan beri css :

    .container, h1, h2, h3 {
        color: #888;
        text-shadow: 2px 2px 5px black;
    }

    <div class="container">
      <h1>Ini adalah H1</h1>
      <h2>Ini adalah H2</h2>
      <h3>Ini adalah H3</h3>
    </div>

### Font Family

Kita bisa menggunakan lebih dari satu font, contoh:

    html {
        font-family: 'Times New Roman', Times, serif;
    }

Gunakan " " atau ' ' untuk nama font yang lebih dari 1 kata.
Anda bisa gunakan html Tag sebagai top root Tag.

### Anker Element Link

html :

    <a href="#">Click Here</a>

css : 

    a {
        text-decoration: 
    }

Cek di inspect element:

Rubah menjadi :

    a {
        text-decoration: none; 
        font-size: ...;
        color: ...;
        //letter-spacing: 10px;
        word-spacing: 30px;
        text-transform: uppercase;
    }

### Text Formating

* <b> Bold
* <i> Italic
* <em> Emphasid
* <strong> Strong
* <del> Cross word
* <mark> highlight

Selesai.
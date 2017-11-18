# Materi Training Full Stack Developer

## HTML 

### Persiapan

**Instal Visual Studio Code**, [Download VCode](https://code.visualstudio.com/).

**Setup VCode**

Code > Preferences > Setting

    {
        "window.zoomLevel": 1,
        "editor.fontSize": 14,
        "terminal.integrated.fontSize": 14,
        "editor.wordWrap": "on",
        "editor.tabSize": 2
        // Integrated terminal for windows
    }

Instal extention "wiew in browser".

## Start Learning HTML

+ Buat folder baru, nama: fullstack-dev.
+ Buat folder baru, nama: html
+ Buat file baru, html/hello.html.

**Membuat code html 1**

    <DOCTYPE html>
    <html>
    <head>
        <title>HelloApp</title>
    </head>
    <body>
        <h1>Welcome to HelloApp</h1>
        <h2>Belajar HTML?</h2>
        <h3>Training di GstuDio</h3>
        <h4>Dijamin bisaaa!</h4>
        <p>Kita mulai sekarang! di <b>Gstudio</b> anda juga bisa belajar 
        code, code html, css dan <i>javascript</i>.</p>

        <hr>

        <p>Dengan belajar Code di <b>Gstudio</b> kita memiliki kesempatan 
        untuk memiliki skill code, yaitu code <b><em>html</em></b>, css 
        dan <i>javascript</i>. Biaya terjangkau dan berkualitas.
        </p>

        <br>

        <hr>
    </body>
    </html>

**Membuat code html 2**

+ Buat folder baru, html/first-website

+ Buat file baru first-website/index.html

+ Buka dengan vscode.

**Update index.html** :

    <!DOCTYPE html>
    <html>
    <head>
        <title>First Website</title>

    </head>
    <body>
        <h1>Selamat Datang First Website</h1>
        
    </body>
    </html>

View di browser dengan rightclick index.html, klik **view in browser**.

Jangan lupa praktekan penulisan Bold, Italic, Line break, Horizontal line.    

### HTML LIST dan Link

**Unorder List**

    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>

**Order List**

    <ol>
      <li>Kebutuhan JavaScript developer meningkat</li>
      <li>Banyak sekali dibutuhkan oleh perusahaan Startup</li>
      <li>Mudah dipelajari dan sangat bermanfaat</li>
    </ol>

**Cara membuat Link** :

    <a href="/index.html">Home</a>
    <a href="/about.html">About</a>    
    <a href="/contact.html">About</a>    

### Menyisipkan Gambar

**Menyisipkan foto profile FB**

    <img src="https://graph.facebook.com/1376917177/picture?height=200" alt="">

Cara menemukan Id Facebook :

    https://findmyfbid.in/

**Cara lain menyisipkan gambar**

* Buat folder baru "images".

* Copy paste sebuah gambar didalam folder images.

* Menyisipkan code link ke gambar.

        <img src="images/logo-gs.png" alt="image-logo">

### Membuat Table

Code sebuah tabel :

    <table
      border="1"
      cellspacing="1"
      cellpadding="10"
    >
      <tr>
        <th>Materi 1</th>
        <th>Materi 2</th>
        <th>Materi 3</th>
        <th>Materi 4</th>
        <th>Materi 5</th>
        <th>Materi 6</th>
        <th>Materi 7</th>
        <th>Materi 8</th>
        <th>Materi 9</th>
      </tr>
      <tr>
        <td><button>HTML</button></td>
        <td><button>CSS</button></td>
        <td><button>GIT</button></td>
        <td><button>Bootstrap</button></td>
        <td><button>JavaScript</button></td>
        <td><button>NodeJS</button></td>
        <td><button>MongoDB</button></td>
        <td><button>REST API</button></td>
        <td><button>React</button></td>
      </tr>
    </table>

### Menyisipkan Video

**Embeded iFrame dari Youtube**

    <iframe width="460" height="250" src="https://www.youtube.com/embed/-YrC9Rb2fXA" frameborder="1" allowfullscreen></iframe>    

### Membuat Form

    <form>
      Nama:
      <input type="text"> <br><br>
      Email: 
      <input type="text"> <br><br>
      Kota&nbsp;&nbsp;:
      <input type="text"> <br><br>
      <button>Kirim</button>
    </form>

### Hasil Latihan

![latihan-html](http://res.cloudinary.com/medio/image/upload/c_scale,h_919,w_700/v1510906333/FullStack/Screen_Shot_2017-11-17_at_2.51.58_PM.jpg)

Selesai, lanjut ke materi berikutnya CSS.
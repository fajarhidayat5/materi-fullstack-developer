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

### Start Learning HTML

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

Selesai, lanjut ke materi berikutnya CSS.



---

## CSS

**Cascading Style Sheet**

CSS -> menambahkan Atribut pada Element HTML untuk mempercantik tampilan website.

* Buat folder baru css.
* Buat folder baru css/belajar-css
* Buat code default HTML.

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title></title>

        </head>
        <body>
            <h1>Belajar CSS</h1>
            <h2>CSS3</h2>
            

        </body>
        </html>

### Inline Style

Menambahka Atribut langsung pada element HTML.

Contoh :

    <h1 style=
        "color:blue; border: solid 3px blue">Belajar CSS</h1>
    <h2 style="color:green">CSS3</h2>

Kelemahan Inline Style, bila ingin merubah style harus merubah satu persatu setiap element yang ada pada setiap halaman.

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

Memepatkan style code di luar halaman, dengan membuat halaman khusus .css.

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

Tambahkan class "container" untuk merapihkan halaman.

    html :

    <div class="container">
        ...
    </div>
    
    css :

    .container {
        background-color: #ffffff;
        padding: 0 50px 0 50px;
    }





---

## JavaScript

Install vscode
Install view in browser extention

Code simple JavaScript :

    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Belajar JavaScript</title>
    </head>
    <body>
        <h1>JavaScript</h1>


        <script>
            var name = "Dyo";
            var age = 35;

            var pesan = "Halo, nama saya: " + name + " umur saya " + age + " tahun";

            // <-- Comment
            //console.log(pesan);

            alert(pesan);
        </script>
    </body>
    </html>

 **Referensi**

 Google Keyword :

    javascript string

* [W3Schools](https://www.w3schools.com/js/js_strings.asp)

* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

* [Github.com/vanbumi/JavaScript](https://github.com/vanbumi/CodeJournal/blob/master/JavaScript/JS%20-%20Tutorial.md)

* [JS Bin](https://jsbin.com/?html,output)

* [JS Fiddle](https://jsfiddle.net/)

**Good Practice**

Membuat JavaScript code terpisah dari file html.

Buat folder javascript dan file baru, beri nama : js-code.js

pindahkan code javascript ke file tsb :




---

## 11 -  Pengenalan Node, Mongo dan REST APIs

### Memahami Web Request

bla

### Install NodeJS

bla

### Mengenal JSON

JSON = JavaScript Object Notation

Dummy API > 'starwars api' > https://swapi.co/
Dummy API > 'pokemon api' > https://pokeapi.co/

**Contoh Format JSON**

    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/1/",
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/",
            "https://swapi.co/api/films/7/"
        ],
        "species": [
            "https://swapi.co/api/species/1/"
        ],
        "vehicles": [
            "https://swapi.co/api/vehicles/14/",
            "https://swapi.co/api/vehicles/30/"
        ],
        "starships": [
            "https://swapi.co/api/starships/12/",
            "https://swapi.co/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.co/api/people/1/"
    }

 Format JSON terdiri dari key dan value:
    
    key  --> value
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",    

**Contoh Format XML**

    <?xml version="1.0" encoding="UTF-8"?>
    <breakfast_menu>
    <food>
        <name>Belgian Waffles</name>
        <price>$5.95</price>
        <description>
    Two of our famous Belgian Waffles with plenty of real maple syrup
    </description>
        <calories>650</calories>
    </food>
    <food>
        <name>Strawberry Belgian Waffles</name>
        <price>$7.95</price>
        <description>
        Light Belgian waffles covered with strawberries and whipped cream
        </description>
        <calories>900</calories>
    </food>
    <food>
        <name>Berry-Berry Belgian Waffles</name>
        <price>$8.95</price>
        <description>
        Belgian waffles covered with assorted fresh berries and whipped cream
        </description>
        <calories>900</calories>
    </food>
    <food>
        <name>French Toast</name>
        <price>$4.50</price>
        <description>
        Thick slices made from our homemade sourdough bread
        </description>
        <calories>600</calories>
    </food>
    <food>
        <name>Homestyle Breakfast</name>
        <price>$6.95</price>
        <description>
        Two eggs, bacon or sausage, toast, and our ever-popular hash browns
        </description>
        <calories>950</calories>
    </food>
    </breakfast_menu>

Agar view JSON lebih rapih, install JSON view di g chrome:

Fungsi JSON adalah .... request

Untuk **Test request** gunakan **Postman**, bisa di add di chrome.

    'chrome postman'

### Basic Node

Di Terminal ketik node dan enter:

    > 

Ini adalah Node Console

#### Penggunaan node dasar

Buat file baru nama test.js, isi dengan:

    var a = 30;
    var b = 20;

    console.log(a + b);    

Simpan dan jalankan file test.js dari Terminal:

    node test.js
    => 50

#### Mengenal NPM

NPM adalah Node Package Manager https://www.npmjs.com/

Coba install npm package: **readline-sync**

    folder coba$ npm install readline-sync

Update test.js sbb:

    var rs = require('readline-sync')

    var a = 30;
    var b = 20;

    console.log(a + b);

    var name = rs.question('What is your name?');

    console.log('Your name is ' + name);    

Coba di terminal:

    dyo-mac:coba $ node test.js
    50
    What is your name?dyo
    Your name is dyo
    
### Node Modules

Buat file baru:

    touch app.js

    touch print.js

Buka print.js dengan IDE:

    var print = function(thingToPrint) {
        console.log('think to print');
    }; 

    module.exports = print;

Bukka app.js:

    var print = require('./print');

    print('did this work');

Coba di Terminal:

    node app.js
    => 'think to print'

### Membuat API.

Buat folder baru:

    mkdir firstAPI

File baru:

    touch server.js

Initial Node

    npm init

    package name: (firstapi) first-api
    version: (1.0.0) 1.0.0
    description: my first api
    entry point: (server.js) 
    test command:     

Hasilnya file baru:

    #package.json

    {
    "name": "first-api",
    "version": "1.0.0",
    "description": "my first api",
    "main": "server.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node server.js"
    },
    "author": "Dyo",
    "license": "ISC"
    }

Install package **express**

    npm install --save express

Update file server.js:

    var express = require('express');
    var app     = express();

    app.get('/', function(req, res) {
        req.send('My First API');
    });

    app.listen(3000, function() {
        console.log("My First API running on port 3000")
    });    

Coba di Terminal:

    node server

Buka di browser:

    localhost:3000    

### Bekerja dengan Postman

Update file server.js, tambahkan data sbb:

    var bumbu = [
        {
            "id":"1",
            "text":"Telur"
        },
        {
            "id":"2",
            "text":"Susu"
        },
        {
            "id:":"3",
            "text":"Jahe",
        },
        {
            "id":"4",
            "text":"Gula pasir"
        }
    ];

Update juga app.get :

    app.get('/', function(req, res) {
        res.send(bumbu);
    }) 

Install body-parser :

    "dependencies": {
        "body-parser": "^1.18.2",
        "express": "^4.16.2"
    }

Update server.js :

    var bodyParser = require('body-parser');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))

Jalankan server dan test di browser localhost:3000.

#### Get & Post Request test dengan POSTMAN

Install POSTMAN dulu bagi yg belum: https://www.getpostman.com/

Buka Postman dan coba buka localhost:3000 dengan GET, list bumbu akan muncul.

Untuk membuat POST, harus membuat function khusus sbb:

    app.post('/', function(req, res) {
        var bumbu_baru = req.body;
        if (!bumbu_baru || bumbu_baru.text === "") {
            res.status(500).send({error: 'Bumbu harus punya nama'});
        } else {
            bumbu.push(bumbu_baru);
            res.status(200).send(bumbu);
        }
    });

coba di Postman.

...

#### Membuat function put :

    app.put('/bumbu/:bumbuId', function(req, res) {

        var newText = req.body.text;

        if (!newText || newText === '') {
            res.status(500).send({error: 'Bumbu tidak boleh kosong'})
        } else {
            for (var x = 0; x < bumbu.length; x++) {
                var bum = bumbu[x];

                if (bum.id === req.params.bumbuId) {
                    bumbu[x].text = newText;
                    break;
                }
            }
            response.send(bumbu);
        };
    });

> **Catatan:** rubah URL menjadi '/bumbu'   

#### Install nodemon

install gloabaly:

    npm install -g nodemon

Jalankan server dengan:

    nodemon server

**Buka postman**

![postman1](http://res.cloudinary.com/medio/image/upload/v1507783551/FullStack/Screen_Shot_2017-10-12_at_8.35.28_AM.png)

![postman2](http://res.cloudinary.com/medio/image/upload/v1507783789/FullStack/Screen_Shot_2017-10-12_at_10.31.13_AM.png)

![postman3](http://res.cloudinary.com/medio/image/upload/v1507783799/FullStack/Screen_Shot_2017-10-12_at_10.31.45_AM.png)


### Instal MongoDB

Install MongoDB Community Edition dengan Homebrew (Mac) (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

Install di Windows(https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

Install di Linux (https://docs.mongodb.com/manual/administration/install-on-linux/)

### Bekerja dengan Mongo Shell

Buka terminal dan jalankan mongodb server:

    mongod

Buka Tab baru di Terminal, ketik

    mongo

> Perhatikan warning ini:

    ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000.    

Munculkan semua database:

    show dbs

Membuat database baru

    use belajar-mongo

Input data baru:

    db.products.insert({"namaProduct": "Gula pasir", "hargaPokok": "100", "hargaJual": "120", "stok": "50"})

Enter.

Untuk menampilkan:

    db.proudcts.find().pretty()

    {
        "_id" : ObjectId("59df13212cc2805a6c6d6ce9"),
        "namaProduct" : "Gula pasir",
        "hargaPokok" : "100",
        "hargaJual" : "120",
        "stok" : "50"
    }

> Perhatikan mongo membuat **id** secara otomatis, dan perhatikan tulisan **_id**

Input product berikutnya :

    db.products.insert({ "namaProduct": "Sabun mandi", "hargaPokok": 180, "har" }) db.products.insert({ "namaProduct": "Sabun mandi", "hargaPokok": 180, "hargaJual" :  200})

    db.products.insert({ "namaItem": "Odol", "hargaPokok": 80, "hargaJual" :  100, "stok": 69})

Menampikan data:

db.products.find().pretty()

    {
        "_id" : ObjectId("59df13212cc2805a6c6d6ce9"),
        "namaProduct" : "Gula pasir",
        "hargaPokok" : "100",
        "hargaJual" : "120",
        "stok" : "50"
    }
    {
        "_id" : ObjectId("59df15cf2cc2805a6c6d6cea"),
        "namaProduct" : "Sabun mandi",
        "hargaPokok" : 180,
        "hargaJual" : 200
    }
    {
        "_id" : ObjectId("59df162e2cc2805a6c6d6ceb"),
        "namaItem" : "Odol",
        "hargaPokok" : 80,
        "hargaJual" : 100,
        "stok" : 69
    }
    

> Perhatikan, data diatas input mongodb memiliki peluang kesalahan dan kurang telitian dalam input data. Tidak seperti sql database yang memiliki **validasi input**.

Kita akan menggunakan aplikasi mongoes untuk mengantisipasi hal tsb diatas.

### Search Data

**Search dengan _id :**

db.products.find({ "_id": ObjectId("59df13212cc2805a6c6d6ce9")  })

    { "_id" : ObjectId("59df13212cc2805a6c6d6ce9"), "namaProduct" : "Gula pasir", "hargaPokok" : "100", "hargaJual" : "120", "stok" : "50" }

Atau gunakan pretty():

    db.products.find({ "_id": ObjectId("59df13212cc2805a6c6d6ce9")  }).pretty()

   {
        "_id" : ObjectId("59df13212cc2805a6c6d6ce9"),
        "namaProduct" : "Gula pasir",
        "hargaPokok" : "100",
        "hargaJual" : "120",
        "stok" : "50"
    }

**Search dengan nama product**

db.products.find({"namaProduct": "Gula pasir"}).pretty()

    {
        "_id" : ObjectId("59df13212cc2805a6c6d6ce9"),
        "namaProduct" : "Gula pasir",
        "hargaPokok" : "100",
        "hargaJual" : "120",
        "stok" : "50"
    }

db.products.find({"hargaPokok" : 100}).pretty()

    {
        "_id" : ObjectId("59df13212cc2805a6c6d6ce9"),
        "namaProduct" : "Gula pasir",
        "hargaPokok" : 100,
        "hargaJual" : 120,
        "stok" : "50"
    }
    {
        "_id" : ObjectId("59df28772cc2805a6c6d6cec"),
        "namaProduct" : "Kembang gula",
        "hargaPokok" : 100
    }

db.products.findOne({"hargaPokok" : 100})

    {
        "_id" : ObjectId("59df13212cc2805a6c6d6ce9"),
        "namaProduct" : "Gula pasir",
        "hargaPokok" : 100,
        "hargaJual" : 120,
        "stok" : "50"
    }

**Update Data**

db.products.update({"namaProduct": "Gula pasir"}, {$set: {"hargaPokok": 100}})

    WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

db.products.update({"namaProduct": "Gula pasir"}, {$set: {"hargaJual": 120}})

    WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

**Delete Data**

db.products.remove({"namaProduct": "Kembang gula"})

    WriteResult({ "nRemoved" : 1 })

## 117 - Swag Shop API: Project Creation

Membuat folder baru pada Materi Training, kita sebut folder 

    swag-shop-api

Membuat file baru:

    server.js

Buka terminal dan arahkan ke folder swag-shop-api.

    npm init
    
    npm install --save body-parser
    
Install express dan mongoose, mongoose adalah framework yang mengkoneksi app dengan mongodb database.

    npm install --save express mongoose
    
Update file server.js

    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');
    var mongoose = require('mongoose');
    var db = mongoose.connect('mongodb://localhost/swag-shop');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    app.listen(3000, function () {
        console.log("Swag Shop API running on port 3000...");
    });
    
## 118 - Swag Shop API: Creating the Models

Create new folder, model:

    mkdir model
    
Create file baru model > product.js

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var product = new Schema({
        title: String,
        price: Number,
        likes: Number
    });

    module.exports = mongoose.model('Product', product);
    
Create file baru model > wishlist.js

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var ObjectId = mongoose.Schema.Types.ObjectId;

    var wishList = new Schema({
        title: {type: String, default: "Cool Wish List"},
        products: [{type: ObjectId, ref: 'Product'}]
    });

    module.exports = mongoose.module('WishList', wishList);
    
Import model ke dalam server.js

    var Product = require('./model/product');
    var WishList = require('./model/wishlist');

## 119 Swag Shop API: Posting Products

Membuat post function di server.js:

    app.post('/product', function(req, res) {
        var product = new Product();
        product.title = req.body.title;
        product.price = req.body.price;
        //product.likes = 0;
        product.save(function(err, savedproduct) {
            if (err) {
                res.status(500).send({err: "Could not save"})
            } else {
                res.send(savedProduct);
            }
        }) 
    });

Untuk product.likes refactor ke product.js

    var product = new Schema({
        title: String,
        price: Number,
    --> likes: {type: Number, default: 0}
    }); 

Coba di Postman, post products baru.            

Test di mongo, apakah data sudah masuk.

    show dbs
    use swag-shop
    show collections
    db.products.find()

Done

## 120 - Swag Shop API: Fetching Products

Membuat get function request:

    app.get('/product', function(req, res) {
        Product.find({}, function(err, products) {
            if (err) {
                res.status(500).send({error: "Could not fetch products"});
            } else {
                res.send(products);
            }
        })
    });

Coba di Postman
Masukkan products baru dengan post.
Kemudian lakukan Get request, status 200 ?

Selanjutnya buka mongo db

    mongo
    show dbs
    use swag-shop
    show collections
    db.products.find().pretty()

## 121 - Exercise: Extending API

## 122 - Swag Shop API: Populating Data

### Membuat Post request untuk wishlist

    app.post('/wishlist', function(req, res) {
        var wishList = new WishList();
        wishList.title = req.body.title;
        
        wishList.save(function(err, newWishList) {
            if (err) {
                res.status(500).send({error: 'Could not create wishlist'})
            } else {
                res.send(newWishList);
            }
        });
    })

Test dengan Postman:

    Pilih POST method
    
    localhost/wishlist -> ketik
    
    body -> tab
    
    raw -> type
    
    json -> format

    {
        "title": "Dyo list of game" -> tulis data yg akan di post/create
    }

    Send! -> tombol

Apabila sukses (200) akan muncul (contoh):

    {
        "_id": "xxxxxxxxx",
        "products": [],
        "title": "Dyo list of game"
    }

### Membuat method GET untuk wishlist:

    app.get("/wishlist", function(req, res) {
        WishList.find({}, function(err, wishlists) {
            if (err) {
                res.status(500).send({error: 'Could not fetch wishlists'});
            } else {
                res.send(wislists);
            }
        });
    });

Coba di Postman:

    Pilih method GET
    
    localhost:3000/wishlist
    
    Send
    
Bila tidak ada error maka akan muncul data yang tadi diatas:

    {
        "_id": "xxxxxxxxx",
        "products": [],
        "title": "Dyo list of game"
    }

Nampak product list (array) masih kosong karena kita belum memasukkan product ke dalam wishlist.

Membuat method PUT untuk mengupdate wishlist dengan memasukkan product ke dalam model wishlist.

    app.put('/wishlist/product/add', function(req, res) {
        Product.findOne({_id: req.body.productId}, function(err, product) {
            if (error) {
                res.status(500).send({error: 'Could not add item to wishlist'});
            } else {
                WishList.update({_id: req.body.wishListId}, {$addToSet: {products: product._id}}, function(err, wishList) {
                    if (err) {
                        res.status(500).send({error: 'Could not add item to wishlist'});
                    } else {
                        res.send(wishList);
                    }
                })
            }
        });
    })

Coba Test

    Copy salah satu product id
    
    ke Postman
    
    Method PUT
    
    localhost:3000/wishlist/product/add
    
    Pilih body > raw > json
    
    {
        "productId": "xxxxxxxx",
        "wishlistId": "yyyyyyyy"
    }
    
    Klik send
    
Bila sukses akan muncul wishlist dengan product id:

    "_id" : ObjectId("59e857fda97de30993fb0700"),
    "products" : [
            ObjectId("59e823da18aa7405ab8c7670")
    ]
    
    
## React

v.123

Install React Globally di sistem kita :

    npm install -g create-react-app

Install React Local Project :

    create-react-app namaApp

    cd namaApp

Jalankan aplikasi :

    npm start

### Install Twitter Bootstrap 4

v.124

Download

Taruh di public folder

Buat folder baru di public folder :

    css
    js

Masukan boostrap.min.js ke folder js dan bootstrap.min.css ke folder css

Download juga jQuery

    jQuery

dan Tether --> tether.io

    tether.min.js
    
Referensikan di index.html

    <link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.min.css">
    <script src="%PUBLIC_URL%/js/jquery-3.2.0.min.js"></script>
    <script src="%PUBLIC_URL%/js/tether.min.js"></script>
    <script src="%PUBLIC_URL%/js/bootstrap.min.js"></script>
    

Atau anda bisa menggunakan CDN, [disini] CDN Bootstrap (http://getbootstrap.com/docs/4.0/getting-started/download/)

Instal React Development Tools untuk Chrome

### Setup API

v. 125

Pada folder **swag-shop-api**

Start mongodb

    mongod
    
Run database :

    mongo

Show database :

    > show dbs

Pilih database :

    > use namaDb
    
Melihat daftar collections :

    > show collections

Insert this database :

    db.products.insert({"price":40.99,"title":"Vault Boy Bobble Head","imgUrl":"https://s3-us-west-2.amazonaws.com/devslopesvideo/vault.JPG"})
    db.products.insert({"price":129.50,"title":"Link's Shield","imgUrl":"https://s3-us-west-2.amazonaws.com/devslopesvideo/shield.png"})
    db.products.insert({"price":400,"title":"Lancer","imgUrl":"https://s3-us-west-2.amazonaws.com/devslopesvideo/lancer.jpg"})

Lihat Semua data pada collections :

    db.products.find().pretty()

Buka lagi folder **swag-shop-web**

Kemudian jalankan servernya :

    npm start
    
Karena port 3000 sudah digunakan oleh swag-shop-api, maka swag-shop-web dialihkan ke port 3001.

### Create http Service

V. 126

Pilihan :

    Pada folder src buat folder baru app pindahkan file App.css, App.js, App.test.js.

Buat folder baru pada src :

    services
    
Buat file baru di dalam folder services :

    http-service.js
    
pada file http-service.js akan kita buat function yang akan berkomunikasi dengan API.
    
Jalankan server swag-shop-web

    npm start
    
Sebelumnya jalankan dulu database mongoDB **swag-shop-api** masing2 di terminal baru :

    mogod
    mongo
    
Buka Postman, pastikan API dari **swag-shop-api** berjalan :

    localhost:3000/product
    
Install **whatwg-fetch** :

    npm install --save whatwg-fetch
    
Baca lengakap whatwg di [https://www.npmjs.com/package/whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch).

Pada file http-service.js tulis kode sbb :

    import 'whatwg-fetch';
    
    class HttpService {
        getProducts = () => {
            fetch('http://localhost:3000/product')
            .then(response => {
                console.log(response.json());
            })
        }
    }

    export default HttpService;
    
Kemudian pada file App.js import HttpService.js ini

    import HttpService from './services/http-service';
    
Update file App.js 

Menjadi sbb :

    import React, { Component } from 'react';
    import logo from './logo.svg';
    import './App.css';
    import HttpService from './services/http-service';
    
    const http = new HttpService();

    class App extends Component {
    
    .........................   
    constructor(props) {
        super(props);
        http.getProducts();
    }
    .........................
    
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to The Shop</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        );
      }
    }

    export default App;

Kemudian cek console pada browser, pastikan data muncul di console

> **Bugs!** No 'Access-Control-Allow-Origin' ...

> **Solusi** Instal Cors 

    npm install cors

    #Usage
    var cors = require('cors');

    app.use(cors({origin: '*'}));

Server akan runing kembali dan merefresh localhost:3001. done!    
 
### Promise dengan ES6 dan React

v. 127

Refactor file 

http-service.js

    class HttpService {
        getProducts = () => {

            var promise = new Promise((resolve, reject) => {
                fetch('http://localhost:3000/product')
                .then(response => {
                    resolve(response.json());
                })
            });

            return promise;
        }
    }

App.js

    class App extends Component {
		
	constructor(props) {
      super(props);
      // bind function.
      this.loadData = this.loadData.bind(this);
      // and call the function.
      this.loadData();
    }
    
    loadData = () => {
        http.getProducts().then(products => {
        console.log(products);
        }, err => {

        });
    }

### Component in React and Website Products

v.128

Membuat folder baru src > **product**, 
Membuat file baru product > **product.js**,
Membuat file baru product > **product.css**

Update product.js

    import React, {Component} from 'react';
    import './product.css';

    class Product extends Component {
        render() {
            return (
                <div className="card">
                    <img className="card-img-top" />
                    <div className="card-block">
                        <h4 className="card-title"></h4>
                        <p className="card-text">Price: $</p>
                        <a href="#" className="btn btn-primary">Add to Wishlist</a>
                    </div>
                </div>
            );
        }
    }

    export default Product;

Pada file App.js

    import Product from './product/product';

Update render sbb:

    render() {
        return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to The Shop</h1>
            </header>
            <div className="App-main">
                <Product />
            </div>
        </div>
        );
    }

Keterangan kode :

* Import Product
* Tambahkan Component Tag <Product />    

Jalankan server:

    npm start

Buka browser localhost:3000

![fullstack](http://res.cloudinary.com/medio/image/upload/c_scale,h_330,w_700/v1509680962/Fullstack%20Training/Screen_Shot_2017-11-03_at_10.45.29_AM.png)


# 129 Props in React

Update App.js dengan menambahkan props :

price, title dan imgUrl

    <Product className="col-sm-4" price = "$4.20" title="Cool Toy Gun" imgUrl = "https://images-na.ssl-images-amazon.com/images/I/4109Mv-s-1L._SL500_AC_SS350_.jpg" />

Menambahkan div row dan membuat 3 copy product :

    <div className="row">
        <Product className="col-sm-4" price = "$4.20" title="Cool Toy Gun" imgUrl = "https://images-na.ssl-images-amazon.com/images/I/4109Mv-s-1L._SL500_AC_SS350_.jpg" />
        <Product className="col-sm-4" price = "$4.20" title="Cool Toy Gun" imgUrl = "https://images-na.ssl-images-amazon.com/images/I/4109Mv-s-1L._SL500_AC_SS350_.jpg" />
        <Product className="col-sm-4" price = "$4.20" title="Cool Toy Gun" imgUrl = "https://images-na.ssl-images-amazon.com/images/I/4109Mv-s-1L._SL500_AC_SS350_.jpg" />
    </div>

Update product.js sbb :

Tambahkan class **product** pada card,
Tambahkan props.imgUrl, props.title, props.price.

    class Product extends Component {
        render() {
            return (
                <div className="card product">
                    <img className="card-img-top" src={this.props.imgUrl} alt="Product" />
                    <div className="card-block">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">Price: {this.props.price}</p>
                        <a href="#" className="btn btn-primary">Add to Wishlist</a>
                    </div>
                </div>
            );
        }
    }

Update product.css

    .product {
        width: 20rem;
        padding: 20px;
    }

    .product img {
        max-height: 20rem;
    }

Update App.css

    .App-main {
        padding-top: 35px;
    }

## 130 State in React

Pertama kita harus menginisial default state :

    this.state = {products: []}

*State awal adalah products dengan empty array.

Membuat productList function :

    productList = () => {
        const list = this.state.products.map((product) = 
            <div className="col-sm-4" key={product._id} >
                <product title={product.title} price={product.price} imgUrl={product.imgUrl} />
            </div>
        )

        return(list);
    }

Dan update render nya:

    render() {
        return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to The Shop</h1>
            </header>
            <div className="container App-main">
                <div className="row">
                    {this.productList()}
                </div>    
            </div>
        </div>
        );
    }

Bind productList :

    this.productList = this.productList.bind(this);

Update load data :

    loadData = () => {
        var self = this; gunakan self karena fetching dgn promise
        http.getProducts().then(data => {
        
        self.setState({products: data})
        }, err => {
        });
    }

## 131 Wishlist Component

Kita akan membuat kotak Wishlist di sisi kanan product list.

Membuat folder baru wishlist -> /src/wishlist,
Membuat file baru wishlist.js -> /src/wishlist/wishlist.js
Membuat file baru wishlist.css -> /src/wishlist/wishlist.css

Update file wishlist.js :

    import React, {Component} from 'react';
    import './wishlist.css';

    class WishList extends Component {
        render() {
            return (
                <div className="card">
                    <div className="card-block">
                        <h4 className="card-title">Wish List</h4>
                        <ul className="list-group"></ul>
                    </div>
                </div>
            );
        }
    }

    export default WishList;

Membuat folder baru src/product-condensed
Membuat file baru src/product-condensed/product-condensed.js
Membuat file css baru src/product-condesed/product-condensed.css

Update file product-condensed.js :

    import React, {Component} from 'react';
    import './product-condesed.css';

    class ProductCondesed extends Component {
        render() {
            return (
                <li className="list-group-item">
                    <a className="btn btn-outline-danger">
                        {this.props.product.title} | 
                        ${this.props.product.price}
                    </a>
                </li>
            );
        }
    }

    export default ProductCondensed;

Update App.js :

    import WishList from './wishlist/wishlist';

dan update render :

    <div className="col-sm-4">
        <WishList />
    </div>

code akhir menjadi seperti dibawah ini :

    render() {
        return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to The Shop</h1>
            </header>
            <div className="container-fluid App-main">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="row">
                            {this.productList()}
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <WishList />
                    </div> 
                </div>    
            </div>
        </div>
        );
    }

Coba di browser.

Update file wishlist.js

    import ProductCondesed from './product-condensed/product-condensed';

continue ....

skip to 133 Build singleton data service and 134 and unfinish bad mood.

## 133 Membangun Singleton Data Service dengan JavaScript.

Untuk membuat notification service, dengan menggunakan **notification observer pattern**.

Gunanya adalah apabila ada perubahan data (data changes) maka akan dikirimkan notifikasi kepada component lain sebagai listener dan melakukan reaksi terhadap perubahan tersebut.

Membuat file baru data-service.js -> /services/data-service.js

Singleton : hanya ada 1 instant dalam memory.

Update file data-service.js sbb :

    let instance = null;

    class DataService {
		constructor() {
			if (!instance) {
				instance = this;
			}

			return instance;
    	}

		addWishListItem = item => {
			wishList.push(item);
		}

		removeWishListItem = item => {
			for (var x = 0; x < wishList.length; x++) {
				if (wisListh[x]._id === item._id) {
					wishList.splice(x, 1);
					break;
				}
			}
		}
	}

    export default DataService;

Update file wishlist.js

Import DataService :

	import DataService from '../services/data-service';

<<<<<<< HEAD
## 134 Membuat Notification Sistem

Intinya Component akan "listen" dari windows change, sehingga component akan update dengan sendirinya secara otomatis.

Membuat file baru notification-service.js -> services/notification-service.js

Update file notification-service.js :

	var observers = {};
	let instance = null;

	class NotificationService {
		constructor() {
			if (!instance) {
				instance = this;
			}

			return instance;
		}

		removeObserver = (observer, notifName) => {
			var obs = observers[notifName];

			if (obs) {
				for (var x = 0; x < obs.length; x++) {
					if (observer === obs[x].observer ) {
					obs.splice(x, 1);
					observers[notifName] = obs;
					break;
					}
				}
			}
		}

		addObserver = (notifName, observer, callBack) => {
			let obs = observers[notifName];

			if (!obs) {
				observers[notifName] = [];
				}

				let obj = {observer: observer, callBack: callBack};
				observers[notifName].push(obj);
		}
	}

	export default NotificationService;

Update wishlist.js :

	import NotificationService from '../services/notification-service';

## 135 Posting Notification to React Component.

Update file data-service.js :

	import NotificationService, {NOTIF_WISHLIST_CHANGED} from './notification-service';

## 136 Observing Notification pada React.

Error: 

    Warning: Expected `onClick` listener to be a function, instead got a value of `string` type.

=======
## 134 Membuat Notification Service












    
       

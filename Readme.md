# Materi Training Full Stack Developer

Chanel:  138
Sisa waktu 20 hari
138/20 = 7 Channel
138/6 = 23 chanel
138/8 = 18 chanel


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

Install React Globally di sistem kita :

    npm install -g create-react-app

Install React Local Project :

    create-react-app namaApp















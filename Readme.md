# Materi Training Full Stack Developer

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










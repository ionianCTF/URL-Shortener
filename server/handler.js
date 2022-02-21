const sqlite3 = require('sqlite3').verbose();
const base62 = require('base62/lib/ascii');

class Handler {
    static alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
    static base = this.alphabet.length;
    static rows = 2;

    static db = new sqlite3.Database('./main.db', (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to database main.db');
    })

    static setRows() {
        this.db.each('SELECT COUNT(ID) as COUNT FROM URLS;', (err, result) => {
            this.rows = parseInt(result.COUNT);
        });
    }

    static redirect(url) {
        let id = base62.decode(url);
        this.setRows();
        if (id <= this.rows) {
            //try {
                this.db.each(`SELECT url FROM urls WHERE id = '${id.toString()}';`, (err, result) => {
                    console.log(result.url)
                    return result.url
                });
            //}
        }else{
            console.log('sup')
        }
    }

    static addURL(url) {
        this.rows += 1;
        //try {
            this.db.run(`INSERT INTO urls (id, url) VALUES (${this.rows}, '${url}');`); 
        //}
        
    }
}

module.exports = Handler;

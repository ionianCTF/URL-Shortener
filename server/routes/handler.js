'use strict';
const base62 = require('base62/lib/ascii');
const admin = require('firebase-admin');
const initializeApp = require('firebase-admin/app');
const serviceAccount = require('./231299.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://url-shortener-231299-default-rtdb.europe-west1.firebasedatabase.app'
});

class Handler {
    static db = admin.database();

    static initializeApp() {
        return new Promise ((resolve, reject) => {

        });
    }

    static getData(child) {
        return new Promise((resolve, reject) => {
            try {
                const ref = this.db.ref(child);
                ref.on('value', (snapshot) => {
                    const data = snapshot.val();
                    resolve(data);
                }, (errorObject) => {
                    reject('The read failed: ' + errorObject.name);
                });
            } catch (error) {
                reject(error);
            }
        });   
     }

    static addUrl(id, url) {
        return new Promise((resolve, reject) => {
            try {
                const ref = this.db.ref('URLS');
                var tempObj = {};
                tempObj[id] = url;
                ref.update(tempObj);
                resolve({ success: true });
            } catch (error) {
                reject({ error : error });
            }
        });
    }
}

module.exports = Handler;

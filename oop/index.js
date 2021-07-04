// const mail = {
//     from: "pengirim@dicoding.com",
//     sendMessage: function (msg, to) {
//         console.log(`you send: ${msg} to ${to} from ${this.from}`);
//     }
// };
 
// mail.from = "pengirim2@dicoding.com";
// // console.log(mail.from);
// // mail.sendMessage('apakabar', 'penerima@dicoding.com');

// mail.saveContact = function(addr) {
//     console.log(`email saved ${addr}`);
//   }

/* 
    1. Angkot
    2. Supir
    3. Penumpang
    4. Trayek
    5. Kas
*/

//constructor
// function Angkot(supir, penumpang, trayek, kas){
//     this.supir = supir
//     this.penumpang = penumpang
//     this.trayek = trayek
//     this.kas = kas

//     this.penumpangNaik = function(namaPenumpang) {
//         this.penumpang.push(namaPenumpang)
//         return this.namaPenumpang
//     }

//     this.penumpangTurun = function(namaPenumpang, bayar){
//         if(this.penumpang.length === 0){
//             alert('Angkot belum ada penumpang')
//             return false
//         }

//         for(let i = 0; i < this.penumpang.length; i++){
//             if(this.penumpang[i] == namaPenumpang){
//                 this.penumpang[i] = undefined
//                 this.kas += bayar
//                 return this.penumpang
//             }
//         }
//     }
// }

// let angkot1 = new Angkot("Achmad", [], ["Jakarta", "Tangerang"], 0)

// angkot1.penumpangNaik("Achmad")
// angkot1.penumpangNaik("Rifki")

// angkot1.penumpangTurun("Rifki", 10000)
// angkot1.penumpangTurun("Achmad", 20000)

// console.log(angkot1);

class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phone) {
        super(phone);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
        this._contacts = [];
    }
 
    // Overriding method => Melakukan Override Total
    sendMessage(msg, to) {
        super.sendMessage(msg, to);
        this._contacts.push(to);
        console.log('Send by WA');
    }
}

const wa1 = new WhatsApp('di', true, 0891234124);
wa1.sendMessage('halo', 089000999888);
 
const wa = new WhatsApp();
console.log(wa);
/**
Output:
Send by WA
**/
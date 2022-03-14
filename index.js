/* server.js - Express server*/
'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();

const path = require('path');

app.get('/', async function(req, res) {
    const addresses = ["ozgeilkim@gmail.com", "ilkim.ozbek@kafessizturkiye.org"]
    const address_1 = addresses[Math.floor(Math.random() * addresses.length)]
    const address_2 = addresses[Math.floor(Math.random() * addresses.length)]
    const address_3 = addresses[Math.floor(Math.random() * addresses.length)]
    
    const subjects = ['beni bırak','kafese hayır']
    const subject = subjects[Math.floor(Math.random() * subjects.length)]
    
    const bodies = ['Sayın yetkili,

İnternet üzerinden otelinizin kullandığı yumurtaların eziyet dolu bir sistemle elde edildiğini öğrendim ve bu konudaki üzüntümü size bildirmek istedim. Lütfen bu eziyeti durdurun.

Saygılarımla,
']
    const body = bodies[Math.floor(Math.random() * bodies.length)]

    let mail = `mailto:${address_1}?cc=${address_2}&bcc=${address_3}&subject=${subject}&body=${body}`
    mail = mail.replace('ı','%C4%B1')
    mail = mail.replace('ö','%C3%B6')
    mail = mail.replace('ü','%C3%BC')
    mail = mail.replace('ş','%C5%9F')
    mail = mail.replace('ç','%C3%A7')
    mail = mail.replace('ğ','%C4%9F')
    mail = mail.replace(' ','%20')

    res.redirect(mail)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
}) 

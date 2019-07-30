const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require('dotenv').config()

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('views'));

app.post("/mail",(req,res)=>{
    
    let transporter = nodemailer.createTransport({
        host: "mail.tatesepicweb.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "tkd498@tatesepicweb.com", // generated ethereal user
          pass: process.env.PASSWORD // generated ethereal password
        }
      });


        transporter.sendMail({
            from: req.body.fname + " " + ' <tkd498@tatesepicweb.com>', // sender address
            to: req.body.email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: req.body.message, // plain text body
        });
    
    console.log(req.body);
    res.redirect("/");
});

app.listen(process.env.PORT);
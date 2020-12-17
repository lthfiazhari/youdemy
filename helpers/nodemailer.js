require('dotenv').config()
const nodemailer = require('nodemailer')

// class User {
//     email: 
// }
class MailHelper {
    constructor(value) {
        this.to = value

    }
    mailer () {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        })

        let mailOption = {
            from: 'youdemi.noreply@gmail.com',
            to: this.to,
            subject: 'Registration Completed',
            text: 'Congratulation your registration completed'
        }

        transporter.sendMail(mailOption, function(err, data){
            if (err){
                console.log('error', err);
            } else {
                console.log('mail send !!!');
            }
        })
    }
}

module.exports = MailHelper
const nodemailer = require('nodemailer');

require('dotenv').config();

// https://support.google.com/mail/answer/7126229
let smtpConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_ACCOUNT,
    // https://support.google.com/mail/answer/185833
    pass: process.env.GMAIL_PASSWORD
  }
};

let transporter = nodemailer.createTransport(smtpConfig);

module.exports = {
  sendMessage(message) {
    return new Promise((resolve, reject) => {
      transporter.sendMail(message, (error, success) => {
        if(error) {
          reject(error);
        } else {
          resolve(success);
        }
      });
    });
  }
};

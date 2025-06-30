import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const mailOptions = {
  from: process.env.MAIL_USER,
  to: 'josekeam01@gmail.com',
};
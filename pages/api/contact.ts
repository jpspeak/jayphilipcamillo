import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer"
import config from '../../config';

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: config.MAILER.USER, // generated ethereal user
      pass: config.MAILER.PASSWORD, // generated ethereal password
    },
  });
   // send mail with defined transport object
   try {
    await transporter.sendMail({
      to: config.MAILER.USER, // list of receivers
      subject: "MESSAGE FROM YOUR WEBSITE", // Subject line
      text: `From: ${req.body.fullname} <${req.body.email}> \n\n ${req.body.message}`, // plain text body
    });
  
    res.status(200).json({message: 'Email sent'})
   } catch (error) {
    res.status(500).json({message: 'Something went wrong'})
   }
   
}

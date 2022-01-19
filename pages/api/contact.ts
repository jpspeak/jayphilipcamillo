// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer"
type Data = {
  name: string
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
      user: "jayphilipcamillo@gmail.com", // generated ethereal user
      pass: "Godismysource1", // generated ethereal password
    },
  });
   // send mail with defined transport object
   let info = await transporter.sendMail({
    to: "jayphilipcamillo@gmail.com", // list of receivers
    subject: "MESSAGE FROM YOUR WEBSITE", // Subject line
    text: `From: ${req.body.fullname} <${req.body.email}> \n\n ${req.body.message}`, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  res.status(200).json(req.body)
}

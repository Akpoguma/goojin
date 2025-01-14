import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your email provider
      auth: {
        user: 'akpogumaisaacdestiny1@gmail.com', // Replace with your email
        pass: 'ufid ycil exzn hlyd', // Replace with your email password or app password
      },
      tls: {
        rejectUnauthorized: false, // Allow insecure connections (required for some environments)
      },
    });

    const mailOptions = {
      from: email,
      to: 'akpogumaisaacdestiny@gmail.com', // Replace with the recipient email
      subject: `Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

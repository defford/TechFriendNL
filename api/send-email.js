// /Users/danielefford/Documents/Fun/TechFriendNL/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // IMPORTANT: Configure these environment variables in Vercel
    // EMAIL_USER: Your email address (e.g., your Gmail)
    // EMAIL_PASS: Your email app password (if using Gmail, generate an App Password)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your preferred email service like 'hotmail', 'outlook365', 'sendgrid', etc.
      auth: {
        user: process.env.EMAIL_USER, // Your sending email address
        pass: process.env.EMAIL_PASS, // Your sending email password/app key
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender address will be your configured EMAIL_USER
      replyTo: email, // The email address entered by the user in the form
      to: 'techfriendnl@gmail.com', // << REPLACE THIS with your actual receiving email
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new message from your website contact form.\n\nHere are the details:\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      // Log the detailed error for Vercel logs
      console.error('Nodemailer error details:', error.message, error.stack);
      res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.', error: error.message });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
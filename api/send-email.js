import nodemailer from 'nodemailer';

/**
 * Serverless / Express API handler for SMTP email delivery
 * Destination: metaseedstech@gmail.com
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, services, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  // Configure Gmail SMTP Transporter
  // Set GMAIL_APP_PASSWORD in environment variables
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // TLS/SSL
    auth: {
      user: 'metaseedstech@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD || 'YOUR_GMAIL_16_DIGIT_APP_PASSWORD',
    },
  });

  const mailOptions = {
    from: '"Meta Seeds Web Inquiry" <metaseedstech@gmail.com>',
    to: 'metaseedstech@gmail.com',
    replyTo: email,
    subject: `New Meta Seeds Inquiry from ${name}`,
    text: `
Client Name: ${name}
Client Email: ${email}
Phone Number: ${phone || 'N/A'}
Services Requested: ${Array.isArray(services) ? services.join(', ') : services || 'General'}

Project Overview / Message:
${message || 'No additional message provided.'}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; rounded: 8px;">
        <h2 style="color: #16a34a;">New Meta Seeds Website Inquiry</h2>
        <hr style="border: 0; border-top: 1px solid #cbd5e1; margin: 15px 0;" />
        <p><strong>Client Name:</strong> ${name}</p>
        <p><strong>Client Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone Number:</strong> ${phone || 'N/A'}</p>
        <p><strong>Services Needed:</strong> ${Array.isArray(services) ? services.join(', ') : services || 'General'}</p>
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin-top: 15px;">
          <strong>Message / Project Overview:</strong>
          <p style="white-space: pre-wrap; margin-top: 5px;">${message || 'No extra message provided.'}</p>
        </div>
        <hr style="border: 0; border-top: 1px solid #cbd5e1; margin: 20px 0;" />
        <p style="font-size: 12px; color: #64748b;">This email was automatically sent via SMTP from the Meta Seeds website contact form to metaseedstech@gmail.com.</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('SMTP Delivery Error:', error);
    return res.status(500).json({ error: 'Failed to send SMTP email', details: error.message });
  }
}

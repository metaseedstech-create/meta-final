import nodemailer from 'nodemailer';

/**
 * Serverless / Express API handler for SMTP email delivery
 * Environment variables:
 * - GMAIL_USER (default: metaseedstech@gmail.com)
 * - GMAIL_APP_PASSWORD (16-character Google App Password)
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, services, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const recipientEmail = process.env.GMAIL_USER || 'metaseedstech@gmail.com';
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailPass) {
    console.warn('GMAIL_APP_PASSWORD not set in environment variables.');
  }

  // Configure Gmail SMTP Transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: recipientEmail,
      pass: gmailPass,
    },
  });

  const mailOptions = {
    from: `"Meta Seeds Web Inquiry" <${recipientEmail}>`,
    to: recipientEmail,
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
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #059669;">New Meta Seeds Website Inquiry</h2>
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
        <p style="font-size: 12px; color: #64748b;">Automated SMTP email sent from Meta Seeds website to ${recipientEmail}.</p>
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

/**
 * Meta Seeds Email Service
 * 
 * Supports sending emails directly to metaseedstech@gmail.com via:
 * 1. EmailJS (Client-side SMTP service - Recommended for React)
 * 2. Backend API Endpoint (Node.js / Express / Vercel Serverless Nodemailer SMTP)
 * 3. Fallback Mailto link
 */

// EmailJS Configuration (Replace with your actual keys from https://www.emailjs.com)
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // e.g., 'service_metaseeds'
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // e.g., 'template_inquiry'
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // e.g., 'user_xxxxxxxxx'
  RECIPIENT_EMAIL: 'metaseedstech@gmail.com',
};

/**
 * Send contact inquiry details
 * @param {Object} data - { name, email, phone, services, message }
 */
export const sendInquiryEmail = async (data) => {
  const targetEmail = EMAILJS_CONFIG.RECIPIENT_EMAIL;

  // Option A: If EmailJS is configured
  if (
    EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    window.emailjs
  ) {
    try {
      const response = await window.emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          to_email: targetEmail,
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || 'N/A',
          services: Array.isArray(data.services) ? data.services.join(', ') : data.services || 'General Inquiry',
          message: data.message || 'No additional details provided.',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      return { success: true, response };
    } catch (error) {
      console.error('EmailJS SMTP send failed:', error);
    }
  }

  // Option B: If backend API endpoint exists (/api/send-email)
  try {
    const apiResponse = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, to: targetEmail }),
    });

    if (apiResponse.ok) {
      return { success: true };
    }
  } catch (err) {
    // API not running or network offline, proceed to fallback
  }

  // Option C: Fallback mailto client launch
  const subject = encodeURIComponent(`New Meta Seeds Website Inquiry from ${data.name}`);
  const body = encodeURIComponent(
    `Client Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nServices Needed: ${
      Array.isArray(data.services) ? data.services.join(', ') : data.services || 'General'
    }\n\nProject Overview:\n${data.message || 'N/A'}`
  );

  window.open(`mailto:${targetEmail}?subject=${subject}&body=${body}`, '_blank');
  return { success: true, fallback: true };
};

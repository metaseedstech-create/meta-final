import emailjs from '@emailjs/browser';

/**
 * Meta Seeds Email Service
 * Target Destination: metaseedstech@gmail.com
 */

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // e.g., 'service_metaseeds'
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // e.g., 'template_inquiry'
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // e.g., 'user_xxxxxxxxx'
  RECIPIENT_EMAIL: 'metaseedstech@gmail.com',
};

/**
 * Send contact inquiry details via SMTP / EmailJS / API / Mailto
 * @param {Object} data - { name, email, phone, services, message }
 */
export const sendInquiryEmail = async (data) => {
  const targetEmail = EMAILJS_CONFIG.RECIPIENT_EMAIL;

  // Option A: If EmailJS credentials have been configured
  if (
    EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY'
  ) {
    try {
      const response = await emailjs.send(
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

  // Option B: Serverless API endpoint (/api/send-email)
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
    // API serverless route offline or in local static dev
  }

  // Option C: Fallback native email client launch
  const subject = encodeURIComponent(`New Meta Seeds Website Inquiry from ${data.name}`);
  const body = encodeURIComponent(
    `Client Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nServices Needed: ${
      Array.isArray(data.services) ? data.services.join(', ') : data.services || 'General'
    }\n\nProject Overview:\n${data.message || 'N/A'}`
  );

  window.open(`mailto:${targetEmail}?subject=${subject}&body=${body}`, '_blank');
  return { success: true, fallback: true };
};

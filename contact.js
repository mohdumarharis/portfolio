'use strict';

const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  const fields = document.querySelector('#contactFields');
  const sendButton = document.querySelector('#submitBtn');
  const sendLabel = sendButton.querySelector('.submit-label');
  const feedback = document.querySelector('#formFeedback');
  let sending = false;
  sendButton.disabled = false;

  contactForm.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => input.setCustomValidity(''));
  });

  function showFeedback(message, kind) {
    feedback.textContent = message;
    feedback.dataset.state = kind;
    feedback.hidden = false;
  }

  contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending) return;

    const inputs = ['name', 'email', 'company', 'message'].map(id => document.getElementById(id));
    inputs.forEach(input => {
      input.value = input.value.trim();
      input.setCustomValidity(input.required && !input.value ? 'Please complete this field.' : '');
    });
    if (!contactForm.reportValidity()) return;

    const config = window.PORTFOLIO_CONTACT;
    if (!config?.publicKey || !config?.serviceId || !config?.templateId) {
      showFeedback('The form is temporarily unavailable. Please email me at mohdomarharis@gmail.com.', 'error');
      return;
    }

    // Keep the original template field names so the existing EmailJS template still works.
    const payload = {
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      template_params: {
        from_name: inputs[0].value,
        from_email: inputs[1].value,
        from_company: inputs[2].value,
        message: inputs[3].value,
        to_name: 'Mohammad Umar Haris'
      }
    };

    sending = true;
    fields.disabled = true;
    sendButton.disabled = true;
    contactForm.setAttribute('aria-busy', 'true');
    sendLabel.textContent = 'Sending…';
    showFeedback('Sending your message…', 'pending');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      if (!response.ok) {
        const error = new Error('Delivery failed');
        error.status = response.status;
        throw error;
      }
      contactForm.reset();
      showFeedback('Your message has been sent. Thanks for getting in touch.', 'success');
    } catch (error) {
      if (error.status === 429) {
        showFeedback('The form is receiving too many requests. Please try again later, or email me at mohdomarharis@gmail.com. Your message is still here.', 'error');
      } else {
        showFeedback('I couldn’t confirm delivery. Your message is still here. Please try again, or email me at mohdomarharis@gmail.com.', 'error');
      }
    } finally {
      clearTimeout(timeout);
      sending = false;
      fields.disabled = false;
      sendButton.disabled = false;
      contactForm.setAttribute('aria-busy', 'false');
      sendLabel.textContent = 'Send message';
      feedback.focus();
    }
  });
}

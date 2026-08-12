function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    button.disabled = true;
    status.dataset.state = 'sending';
    status.textContent = 'Sending…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        status.dataset.state = 'success';
        status.textContent = "Thanks — I'll be in touch soon.";
        form.reset();
      } else {
        status.dataset.state = 'error';
        status.textContent = 'Something went wrong — please email me directly instead.';
      }
    } catch (err) {
      status.dataset.state = 'error';
      status.textContent = 'Something went wrong — please email me directly instead.';
    } finally {
      button.disabled = false;
    }
  });
}

document.addEventListener('DOMContentLoaded', initContactForm);

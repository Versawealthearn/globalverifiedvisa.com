const validateForm = (formData) => {
  const errors = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[\d\s-]{10,}$/;

  if (!emailRegex.test(formData.get('email'))) {
    errors.push('Please enter a valid email address');
  }

  if (!phoneRegex.test(formData.get('phone'))) {
    errors.push('Please enter a valid phone number');
  }

  return errors;
};

const showFeedback = (message, isError = false) => {
  const feedback = document.getElementById('formFeedback');
  feedback.className = `alert ${isError ? 'alert-danger' : 'alert-success'} mt-3`;
  feedback.textContent = message;
  feedback.style.display = 'block';

  if (!isError) {
    setTimeout(() => {
      feedback.style.display = 'none';
    }, 5000);
  }
};

export const initFormHandling = () => {
  const form = document.getElementById('consultationForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const errors = validateForm(formData);

      if (errors.length > 0) {
        showFeedback(errors.join('. '), true);
        return;
      }

      // Simulate API call
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        showFeedback('Appointment scheduled successfully! We will contact you shortly to confirm.');
        form.reset();
      } catch (error) {
        showFeedback('Failed to schedule appointment. Please try again.', true);
      }
    });
  }
};
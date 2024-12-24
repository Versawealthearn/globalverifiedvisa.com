const handleFormSubmission = async (formData, visaType) => {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const feedback = document.getElementById('formFeedback');
    feedback.className = 'alert alert-success';
    feedback.textContent = `Your ${visaType} visa application has been submitted successfully! We will contact you within 24 hours.`;
    feedback.style.display = 'block';
    
    setTimeout(() => {
      feedback.style.display = 'none';
      // Close modal after success
      const modal = document.querySelector('.modal.show');
      if (modal) {
        const modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
      }
    }, 3000);
    
    return true;
  } catch (error) {
    const feedback = document.getElementById('formFeedback');
    feedback.className = 'alert alert-danger';
    feedback.textContent = 'An error occurred. Please try again.';
    feedback.style.display = 'block';
    return false;
  }
};

export const initVisaFormHandlers = () => {
  const studentForm = document.getElementById('studentVisaForm');
  const businessForm = document.getElementById('businessVisaForm');

  if (studentForm) {
    studentForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(studentForm);
      const success = await handleFormSubmission(formData, 'student');
      if (success) studentForm.reset();
    });
  }

  if (businessForm) {
    businessForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(businessForm);
      const success = await handleFormSubmission(formData, 'business');
      if (success) businessForm.reset();
    });
  }
};
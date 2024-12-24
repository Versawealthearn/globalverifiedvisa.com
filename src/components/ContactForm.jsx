export const renderContactForm = () => {
  return `
    <section id="consultation" class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card border-0 shadow">
              <div class="card-body p-5">
                <h2 class="text-center mb-4">Schedule Appointment</h2>
                <form id="consultationForm">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <input type="text" class="form-control" name="fullName" placeholder="Full Name" required>
                    </div>
                    <div class="col-md-6">
                      <input type="email" class="form-control" name="email" placeholder="Email" required>
                    </div>
                    <div class="col-md-6">
                      <input type="tel" class="form-control" name="phone" placeholder="Phone" required>
                    </div>
                    <div class="col-md-6">
                      <select class="form-select" name="service" required>
                        <option value="">Select Service</option>
                        <option>Business & Investor Visas</option>
                        <option>Partner & Family Visas</option>
                        <option>Employer Sponsored Visas</option>
                        <option>Student Visas</option>
                        <option>Skilled Visas</option>
                        <option>Citizenship Applications</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <input type="date" class="form-control" name="date" required min="${new Date().toISOString().split('T')[0]}">
                    </div>
                    <div class="col-md-6">
                      <select class="form-select" name="time" required>
                        <option value="">Select Time</option>
                        <option>09:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>02:00 PM</option>
                        <option>03:00 PM</option>
                        <option>04:00 PM</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <textarea class="form-control" name="message" rows="3" placeholder="Your Message" required></textarea>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary w-100 d-flex align-items-center justify-content-center">
                        Schedule Now <i class="bi bi-calendar-check ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <div id="formFeedback" class="mt-3 text-center" style="display: none;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
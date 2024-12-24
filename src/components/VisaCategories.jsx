export const renderVisaCategories = () => {
  return `
    <section class="visa-categories py-5">
      <div class="container">
        <h2 class="text-center mb-5">Visa Categories</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm text-center position-relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80" class="card-img" alt="Skilled Visa">
              <div class="card-img-overlay d-flex flex-column justify-content-center bg-dark bg-opacity-50">
                <h3 class="card-title text-white mb-3">Skilled Visas</h3>
                <p class="card-text text-white mb-4">For skilled professionals wanting to live and work abroad</p>
                <a href="#consultation" class="btn btn-primary">Apply Now</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm text-center position-relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" class="card-img" alt="Student Visa">
              <div class="card-img-overlay d-flex flex-column justify-content-center bg-dark bg-opacity-50">
                <h3 class="card-title text-white mb-3">Student Visas</h3>
                <p class="card-text text-white mb-4">For international students pursuing education abroad</p>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#studentVisaModal">Learn More</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm text-center position-relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" class="card-img" alt="Business Visa">
              <div class="card-img-overlay d-flex flex-column justify-content-center bg-dark bg-opacity-50">
                <h3 class="card-title text-white mb-3">Business Visas</h3>
                <p class="card-text text-white mb-4">For entrepreneurs and business professionals</p>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#businessVisaModal">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
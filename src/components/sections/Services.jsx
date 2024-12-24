export const renderServicesSection = () => `
  <section id="services" class="py-5 bg-light">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="display-5 fw-bold mb-3">Our Services</h2>
          <p class="lead text-muted">Comprehensive immigration solutions tailored to your needs</p>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              <div class="feature-icon bg-primary bg-gradient text-white rounded-circle mb-3">
                <i class="bi bi-globe2 fs-2"></i>
              </div>
              <h3 class="h4 mb-3">Global Immigration</h3>
              <p class="text-muted mb-0">Expert guidance for permanent residency and citizenship applications worldwide.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              <div class="feature-icon bg-primary bg-gradient text-white rounded-circle mb-3">
                <i class="bi bi-briefcase fs-2"></i>
              </div>
              <h3 class="h4 mb-3">Business Migration</h3>
              <p class="text-muted mb-0">Specialized solutions for entrepreneurs and investors seeking business opportunities abroad.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              <div class="feature-icon bg-primary bg-gradient text-white rounded-circle mb-3">
                <i class="bi bi-mortarboard fs-2"></i>
              </div>
              <h3 class="h4 mb-3">Student Visas</h3>
              <p class="text-muted mb-0">Complete support for international students pursuing education opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
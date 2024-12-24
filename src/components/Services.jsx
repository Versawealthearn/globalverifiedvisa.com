export const renderServices = () => {
  return `
    <section id="services" class="py-5">
      <div class="container">
        <h2 class="text-center mb-5">Our Services</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <i class="bi bi-passport fs-1 text-primary mb-3"></i>
                <h3 class="h5">Visa Processing</h3>
                <p>Expert assistance with visa applications for work, study, or permanent residence.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <i class="bi bi-building fs-1 text-primary mb-3"></i>
                <h3 class="h5">Immigration Services</h3>
                <p>Comprehensive immigration support and consultation for multiple countries.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <i class="bi bi-file-text fs-1 text-primary mb-3"></i>
                <h3 class="h5">Document Assistance</h3>
                <p>Professional help with document preparation and verification.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
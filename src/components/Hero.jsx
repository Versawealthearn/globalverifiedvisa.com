export const renderHero = () => {
  return `
    <header class="hero py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-4">Your Journey to Global Opportunities Starts Here</h1>
            <p class="lead mb-4">Expert guidance for visa applications, immigration services, and worldwide relocation support.</p>
            <div class="d-flex gap-3">
              <a href="#consultation" class="btn btn-primary btn-lg smooth-scroll px-4 d-flex align-items-center">
                Get Started <i class="bi bi-arrow-right ms-2"></i>
              </a>
              <button class="btn btn-outline-primary btn-lg px-4 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#learnMoreModal">
                Learn More <i class="bi bi-info-circle ms-2"></i>
              </button>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80" 
                 class="img-fluid rounded-3 shadow" 
                 alt="Visa Services"
                 loading="lazy">
          </div>
        </div>
      </div>
    </header>
  `;
};
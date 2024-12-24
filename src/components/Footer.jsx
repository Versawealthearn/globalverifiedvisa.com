export const renderFooter = () => {
  return `
    <footer class="bg-dark text-light py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5>GlobalVerifiedVisa</h5>
            <p class="small">Your trusted partner in global mobility solutions.</p>
          </div>
          <div class="col-md-4">
            <h5>Contact</h5>
            <p class="small">
              Email: info@globalverifiedvisa.com<br>
              Phone: +1 (555) 123-4567
            </p>
          </div>
          <div class="col-md-4">
            <h5>Follow Us</h5>
            <div class="d-flex gap-3">
              <a href="#" class="text-light"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-light"><i class="bi bi-twitter"></i></a>
              <a href="#" class="text-light"><i class="bi bi-instagram"></i></a>
              <a href="#" class="text-light"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
};
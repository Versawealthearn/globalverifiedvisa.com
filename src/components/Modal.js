export const renderModal = () => {
  return `
    <div class="modal fade" id="learnMoreModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Why Choose GlobalVerifiedVisa</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="row g-4">
              <div class="col-md-6">
                <h6><i class="bi bi-check-circle-fill text-primary me-2"></i>Expert Consultation</h6>
                <p>Personalized guidance from experienced immigration consultants.</p>
              </div>
              <div class="col-md-6">
                <h6><i class="bi bi-check-circle-fill text-primary me-2"></i>Fast Processing</h6>
                <p>Efficient handling of your visa application process.</p>
              </div>
              <div class="col-md-6">
                <h6><i class="bi bi-check-circle-fill text-primary me-2"></i>24/7 Support</h6>
                <p>Round-the-clock assistance for all your queries.</p>
              </div>
              <div class="col-md-6">
                <h6><i class="bi bi-check-circle-fill text-primary me-2"></i>High Success Rate</h6>
                <p>98% success rate in visa approvals.</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="#consultation" class="btn btn-primary" data-bs-dismiss="modal">Schedule Appointment</a>
          </div>
        </div>
      </div>
    </div>
  `;
};
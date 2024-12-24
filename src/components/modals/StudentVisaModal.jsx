import { renderStudentVisaForm } from '../forms/StudentVisaForm';

export const renderStudentVisaModal = () => `
  <div class="modal fade" id="studentVisaModal" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Student Visa Application</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="row mb-4">
            <div class="col-12">
              <h6 class="fw-bold mb-3">Required Documents</h6>
              <ul class="list-unstyled">
                <li>✓ Valid Passport</li>
                <li>✓ Academic Transcripts</li>
                <li>✓ Proof of English Proficiency</li>
                <li>✓ Financial Statements</li>
              </ul>
            </div>
          </div>
          ${renderStudentVisaForm()}
          <div id="formFeedback" class="mt-3" style="display: none;"></div>
        </div>
      </div>
    </div>
  </div>
`;
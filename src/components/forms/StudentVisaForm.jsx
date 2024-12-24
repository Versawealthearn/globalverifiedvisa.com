export const renderStudentVisaForm = () => `
  <form id="studentVisaForm" class="row g-3">
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
      <select class="form-select" name="programType" required>
        <option value="">Select Program Type</option>
        <option>Bachelor's Degree</option>
        <option>Master's Degree</option>
        <option>PhD</option>
        <option>Vocational Training</option>
        <option>English Course</option>
      </select>
    </div>
    <div class="col-md-6">
      <select class="form-select" name="intendedCountry" required>
        <option value="">Select Destination Country</option>
        <option>United States</option>
        <option>United Kingdom</option>
        <option>Canada</option>
        <option>Australia</option>
        <option>New Zealand</option>
      </select>
    </div>
    <div class="col-md-6">
      <select class="form-select" name="englishLevel" required>
        <option value="">English Proficiency Level</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
        <option>Native/Bilingual</option>
      </select>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary w-100">Submit Application</button>
    </div>
  </form>
`;
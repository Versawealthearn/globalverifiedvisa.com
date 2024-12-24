export const renderBusinessVisaForm = () => `
  <form id="businessVisaForm" class="row g-3">
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
      <select class="form-select" name="visaType" required>
        <option value="">Select Visa Type</option>
        <option>Business Innovation</option>
        <option>Investor Visa</option>
        <option>Business Talent</option>
        <option>Business Owner</option>
      </select>
    </div>
    <div class="col-md-6">
      <select class="form-select" name="investmentRange" required>
        <option value="">Investment Range</option>
        <option>$100k - $500k</option>
        <option>$500k - $1M</option>
        <option>$1M - $5M</option>
        <option>$5M+</option>
      </select>
    </div>
    <div class="col-md-6">
      <select class="form-select" name="businessExperience" required>
        <option value="">Years of Business Experience</option>
        <option>1-3 years</option>
        <option>3-5 years</option>
        <option>5-10 years</option>
        <option>10+ years</option>
      </select>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary w-100">Submit Application</button>
    </div>
  </form>
`;
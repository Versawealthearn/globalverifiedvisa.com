import { renderLogo } from './Logo';

export const renderNavigation = () => {
  return `
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold text-primary d-flex align-items-center" href="#">
          ${renderLogo()}
          <span class="ms-2">GlobalVerifiedVisa</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
            <li class="nav-item"><a class="btn btn-primary ms-2" href="#consultation">Schedule Appointment</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;
};
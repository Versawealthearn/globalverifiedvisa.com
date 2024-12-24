import { renderNavigation } from './Navigation';
import { renderHero } from './Hero';
import { renderServicesSection } from './sections/Services';
import { renderAboutSection } from './sections/About';
import { renderContactSection } from './sections/Contact';
import { renderStats } from './Stats';
import { renderContactForm } from './ContactForm';
import { renderFooter } from './Footer';
import { renderVisaCategories } from './VisaCategories';
import { renderModal } from './Modal';
import { renderStudentVisaModal } from './modals/StudentVisaModal';
import { renderBusinessVisaModal } from './modals/BusinessVisaModal';

export const renderLayout = () => `
  ${renderNavigation()}
  ${renderHero()}
  ${renderServicesSection()}
  ${renderVisaCategories()}
  ${renderAboutSection()}
  ${renderStats()}
  ${renderContactSection()}
  ${renderContactForm()}
  ${renderFooter()}
  ${renderModal()}
  ${renderStudentVisaModal()}
  ${renderBusinessVisaModal()}
`;
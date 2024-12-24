import { initSmoothScroll } from './scrollUtils';
import { initFormHandling } from './formUtils';
import { initVisaFormHandlers } from './formHandlers';

export const initEventHandlers = () => {
  initSmoothScroll();
  initFormHandling();
  initVisaFormHandlers();
};
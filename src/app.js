import { renderLayout } from './components/Layout';
import { initEventHandlers } from './utils/eventHandlers';

export const initApp = () => {
  const app = document.getElementById('app');
  app.innerHTML = renderLayout();
  initEventHandlers();
};
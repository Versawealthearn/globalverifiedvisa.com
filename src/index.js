import './styles/main.scss';
import { initApp } from './app';
import { initBootstrap } from './utils/bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  initBootstrap();
  initApp();
});
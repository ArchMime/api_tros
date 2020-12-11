import { Router } from 'https://unpkg.com/@vaadin/router'

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
  { path: '/api_tros/', component: 'home-el' },
  { path: '/api_tros/contrataciones', component: 'booking-el' },
  { path: '/api_tros/galeria', component: 'galery-el' },
  { path: '/api_tros/contacto', component: 'contacted-el' },
  { path: '/api_tros/postular', component: 'applicant-el' },
  { path: '/api_tros/intranet', component: 'intranet-el' },
]);
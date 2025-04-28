// Abrir Modal con Contenido de Entidades
function openModal(entidad) {
  const modal = document.getElementById('modal');
  const content = document.getElementById('modal-content');

  let info = "";

  switch(entidad) {
    case 'SOFOM':
      info = `
        <h2>SOFOM</h2>
        <p><strong>Sociedades Financieras de Objeto Múltiple</strong></p>
        <p>Especializadas en otorgamiento de crédito, arrendamiento financiero y factoraje. Ofrecen flexibilidad regulatoria sin captación de depósitos.</p>
        <form action="https://formspree.io/f/xzzrzqrd" method="POST" class="formulario-contacto">
          <div class="form-row">
            <input type="text" name="name" placeholder="Tu Nombre Completo" required>
          </div>
          <div class="form-row">
            <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          </div>
          <div class="form-row">
            <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          </div>
          <div class="form-row">
            <button type="submit" class="btn-primary">Solicitar Información</button>
          </div>
        </form>
      `;
      break;

    case 'SOFIPO':
      info = `
        <h2>SOFIPO</h2>
        <p><strong>Sociedades Financieras Populares</strong></p>
        <p>Autorizadas para captar depósitos y otorgar créditos regulados por CNBV, con altos estándares de supervisión financiera.</p>
        <form action="https://formspree.io/f/xeogowga" method="POST" class="formulario-contacto">
          <div class="form-row">
            <input type="text" name="name" placeholder="Tu Nombre Completo" required>
          </div>
          <div class="form-row">
            <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          </div>
          <div class="form-row">
            <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          </div>
          <div class="form-row">
            <button type="submit" class="btn-primary">Solicitar Información</button>
          </div>
        </form>
      `;
      break;

    case 'IFPE':
      info = `
        <h2>IFPE (Fintech)</h2>
        <p><strong>Instituciones de Fondos de Pago Electrónico</strong></p>
        <p>Operan transferencias electrónicas de fondos, custodia digital y emisión de tarjetas virtuales. Altamente dinámicas en el ecosistema Fintech.</p>
        <form action="https://formspree.io/f/movdvzdd" method="POST" class="formulario-contacto">
          <div class="form-row">
            <input type="text" name="name" placeholder="Tu Nombre Completo" required>
          </div>
          <div class="form-row">
            <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          </div>
          <div class="form-row">
            <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          </div>
          <div class="form-row">
            <button type="submit" class="btn-primary">Solicitar Información</button>
          </div>
        </form>
      `;
      break;

    case 'UnionCredito':
      info = `
        <h2>Unión de Crédito</h2>
        <p><strong>Uniones Cooperativas de Crédito</strong></p>
        <p>Financiamiento colectivo entre socios de actividades productivas, promoviendo acceso a crédito y fortalecimiento sectorial.</p>
        <form action="https://formspree.io/f/xgvkvbky" method="POST" class="formulario-contacto">
          <div class="form-row">
            <input type="text" name="name" placeholder="Tu Nombre Completo" required>
          </div>
          <div class="form-row">
            <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          </div>
          <div class="form-row">
            <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          </div>
          <div class="form-row">
            <button type="submit" class="btn-primary">Solicitar Información</button>
          </div>
        </form>
      `;
      break;

    case 'IFC':
      info = `
        <h2>IFC</h2>
        <p><strong>Instituciones Financieras Comunitarias</strong></p>
        <p>Enfocadas en la inclusión financiera de comunidades rurales, ofreciendo servicios básicos y promoción de ahorro y crédito responsable.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST" class="formulario-contacto">
          <div class="form-row">
            <input type="text" name="name" placeholder="Tu Nombre Completo" required>
          </div>
          <div class="form-row">
            <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          </div>
          <div class="form-row">
            <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          </div>
          <div class="form-row">
            <button type="submit" class="btn-primary">Solicitar Información</button>
          </div>
        </form>
      `;
      break;
  }

  content.innerHTML = info;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = "none";
}

// AOS Inicialización
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    once: true,
    duration: 1200,
  });
});

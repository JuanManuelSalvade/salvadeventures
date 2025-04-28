// Modal Functions para Entidades
function openModal(entidad) {
  const modal = document.getElementById('modal');
  const content = document.getElementById('modal-content');

  let info = "";

  switch(entidad) {
    case 'SOFOM':
      info = `
        <h2>SOFOM</h2>
        <p><strong>Sociedades Financieras de Objeto Múltiple</strong></p>
        <p>Especializadas en otorgamiento de crédito, arrendamiento financiero y factoraje. Ofrecen flexibilidad regulatoria.</p>
        <form action="https://formspree.io/f/xzzrzqrd" method="POST" class="formulario-contacto">
          <input type="text" name="name" placeholder="Tu Nombre" required>
          <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          <button type="submit" class="btn-primary">Solicitar Información</button>
        </form>
      `;
      break;

    case 'SOFIPO':
      info = `
        <h2>SOFIPO</h2>
        <p><strong>Sociedades Financieras Populares</strong></p>
        <p>Autorizadas para captar depósitos y otorgar créditos. Altamente reguladas por CNBV.</p>
        <form action="https://formspree.io/f/xeogowga" method="POST" class="formulario-contacto">
          <input type="text" name="name" placeholder="Tu Nombre" required>
          <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          <button type="submit" class="btn-primary">Solicitar Información</button>
        </form>
      `;
      break;

    case 'IFPE':
      info = `
        <h2>IFPE (Fintech)</h2>
        <p><strong>Instituciones de Fondos de Pago Electrónico</strong></p>
        <p>Custodian fondos digitales, permiten transferencias electrónicas y emiten tarjetas prepago.</p>
        <form action="https://formspree.io/f/movdvzdd" method="POST" class="formulario-contacto">
          <input type="text" name="name" placeholder="Tu Nombre" required>
          <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          <button type="submit" class="btn-primary">Solicitar Información</button>
        </form>
      `;
      break;

    case 'UnionCredito':
      info = `
        <h2>Unión de Crédito</h2>
        <p><strong>Uniones Cooperativas</strong></p>
        <p>Otorgan financiamiento entre socios de sectores productivos, con esquemas de apoyo mutuo.</p>
        <form action="https://formspree.io/f/xgvkvbky" method="POST" class="formulario-contacto">
          <input type="text" name="name" placeholder="Tu Nombre" required>
          <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          <button type="submit" class="btn-primary">Solicitar Información</button>
        </form>
      `;
      break;

    case 'IFC':
      info = `
        <h2>IFC</h2>
        <p><strong>Instituciones Financieras Comunitarias</strong></p>
        <p>Brindan acceso financiero en zonas rurales y comunidades con baja bancarización.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST" class="formulario-contacto">
          <input type="text" name="name" placeholder="Tu Nombre" required>
          <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          <button type="submit" class="btn-primary">Solicitar Información</button>
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

// AOS Animations Initialization
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    once: true,
    duration: 1200,
  });
});

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
        <p>Especializadas en crédito, arrendamiento y factoraje. Flexibilidad operativa alta.</p>
        <form action="https://formspree.io/f/xzzrzqrd" method="POST" class="formulario-contacto">
          <input type="text" name="name" placeholder="Tu Nombre" required>
          <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          <textarea name="message" placeholder="Información adicional sobre SOFOM" required></textarea>
          <button type="submit" class="btn-primary">Solicitar Información</button>
        </form>
      `;
      break;

    case 'SOFIPO':
      info = `
        <h2>SOFIPO</h2>
        <p><strong>Sociedades Financieras Populares</strong></p>
        <p>Autorizadas para captar depósitos y otorgar crédito. Regulación estricta.</p>
        <form action="https://formspree.io/f/xeogowga" method="POST" class="formulario-contacto">
          <input type="text" name="name" placeholder="Tu Nombre" required>
          <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          <textarea name="message" placeholder="Información adicional sobre SOFIPO" required></textarea>
          <button type="submit" class="btn-primary">Solicitar Información</button>
        </form>
      `;
      break;

    case 'IFPE':
      info = `
        <h2>IFPE (Fintech)</h2>
        <p><strong>Instituciones de Fondos de Pago Electrónico</strong></p>
        <p>Custodian fondos digitales, permiten transferencias electrónicas seguras.</p>
        <form action="https://formspree.io/f/movdvzdd" method="POST" class="formulario-contacto">
          <input type="text" name="name" placeholder="Tu Nombre" required>
          <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          <textarea name="message" placeholder="Información adicional sobre IFPE" required></textarea>
          <button type="submit" class="btn-primary">Solicitar Información</button>
        </form>
      `;
      break;

    case 'UnionCredito':
      info = `
        <h2>Unión de Crédito</h2>
        <p><strong>Uniones Cooperativas</strong></p>
        <p>Asociaciones que otorgan financiamiento a socios específicos.</p>
        <form action="https://formspree.io/f/xgvkvbky" method="POST" class="formulario-contacto">
          <input type="text" name="name" placeholder="Tu Nombre" required>
          <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          <textarea name="message" placeholder="Información adicional sobre Unión de Crédito" required></textarea>
          <button type="submit" class="btn-primary">Solicitar Información</button>
        </form>
      `;
      break;

    case 'IFC':
      info = `
        <h2>IFC</h2>
        <p><strong>Instituciones Financieras Comunitarias</strong></p>
        <p>Fomentan el acceso al financiamiento en comunidades específicas.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST" class="formulario-contacto">
          <input type="text" name="name" placeholder="Tu Nombre" required>
          <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          <textarea name="message" placeholder="Información adicional sobre IFC" required></textarea>
          <button type="submit" class="btn-primary">Solicitar Información</button>
        </form>
      `;
      break;
  }

  content.innerHTML = info;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}

// AOS Animations Initialization
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    once: true,
    duration: 1200,
  });
});

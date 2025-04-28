// Modal Functions
function openModal(entidad) {
  const modal = document.getElementById('modal');
  const content = document.getElementById('modal-content');

  let info = "";

  switch(entidad) {
    case 'SOFOM':
      info = `
        <h2>SOFOM</h2>
        <p><strong>Sociedades Financieras de Objeto Múltiple</strong></p>
        <p>Especializadas en otorgamiento de crédito, arrendamiento financiero y factoraje. Ofrecen flexibilidad regulatoria alta.</p>
        <form action="https://formspree.io/f/xzzrzqrd" method="POST" class="formulario-contacto">
          <div class="form-row">
            <input type="text" name="nombre" placeholder="Tu Nombre Completo" required>
          </div>
          <div class="form-row">
            <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          </div>
          <div class="form-row">
            <textarea name="mensaje" placeholder="Escribe tu Mensaje" required></textarea>
          </div>
          <div class="form-row">
            <button type="submit" class="btn-primary">Enviar Mensaje</button>
          </div>
        </form>
      `;
      break;

    case 'SOFIPO':
      info = `
        <h2>SOFIPO</h2>
        <p><strong>Sociedades Financieras Populares</strong></p>
        <p>Autorizadas para captar depósitos y otorgar crédito bajo regulación estricta de la CNBV.</p>
        <form action="https://formspree.io/f/xeogowga" method="POST" class="formulario-contacto">
          <div class="form-row">
            <input type="text" name="nombre" placeholder="Tu Nombre Completo" required>
          </div>
          <div class="form-row">
            <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          </div>
          <div class="form-row">
            <textarea name="mensaje" placeholder="Escribe tu Mensaje" required></textarea>
          </div>
          <div class="form-row">
            <button type="submit" class="btn-primary">Enviar Mensaje</button>
          </div>
        </form>
      `;
      break;

    case 'IFPE':
      info = `
        <h2>IFPE (Fintech)</h2>
        <p><strong>Instituciones de Fondos de Pago Electrónico</strong></p>
        <p>Especializadas en la administración de fondos digitales y transferencias electrónicas.</p>
        <form action="https://formspree.io/f/movdvzdd" method="POST" class="formulario-contacto">
          <div class="form-row">
            <input type="text" name="nombre" placeholder="Tu Nombre Completo" required>
          </div>
          <div class="form-row">
            <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          </div>
          <div class="form-row">
            <textarea name="mensaje" placeholder="Escribe tu Mensaje" required></textarea>
          </div>
          <div class="form-row">
            <button type="submit" class="btn-primary">Enviar Mensaje</button>
          </div>
        </form>
      `;
      break;

    case 'UnionCredito':
      info = `
        <h2>Unión de Crédito</h2>
        <p><strong>Asociaciones de Financiamiento Cooperativo</strong></p>
        <p>Otorgan crédito exclusivamente a sus socios, bajo un esquema cooperativo.</p>
        <form action="https://formspree.io/f/xgvkvbky" method="POST" class="formulario-contacto">
          <div class="form-row">
            <input type="text" name="nombre" placeholder="Tu Nombre Completo" required>
          </div>
          <div class="form-row">
            <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          </div>
          <div class="form-row">
            <textarea name="mensaje" placeholder="Escribe tu Mensaje" required></textarea>
          </div>
          <div class="form-row">
            <button type="submit" class="btn-primary">Enviar Mensaje</button>
          </div>
        </form>
      `;
      break;

    case 'IFC':
      info = `
        <h2>IFC</h2>
        <p><strong>Instituciones Financieras Comunitarias</strong></p>
        <p>Instituciones enfocadas en fomentar el acceso al financiamiento en comunidades específicas.</p>
        <form action="https://formspree.io/f/xkgrgarv" method="POST" class="formulario-contacto">
          <div class="form-row">
            <input type="text" name="nombre" placeholder="Tu Nombre Completo" required>
          </div>
          <div class="form-row">
            <input type="email" name="email" placeholder="Tu Correo Electrónico" required>
          </div>
          <div class="form-row">
            <textarea name="mensaje" placeholder="Escribe tu Mensaje" required></textarea>
          </div>
          <div class="form-row">
            <button type="submit" class="btn-primary">Enviar Mensaje</button>
          </div>
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


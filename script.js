// Animación para ocultar el loader
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  loader.classList.add('fade-out');
});

// Función para abrir modales de entidades
function openModal(entidad) {
  const modal = document.getElementById('modal');
  const content = document.getElementById('modal-content');

  let info = "";

  switch(entidad) {
    case 'SOFOM':
      info = `
        <h2>SOFOM</h2>
        <p><strong>Sociedad Financiera de Objeto Múltiple:</strong> Especializada en créditos, factoraje y arrendamiento financiero.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input type="hidden" name="interes" value="SOFOM">
          <input type="text" name="name" placeholder="Tu Nombre" required>
          <input type="email" name="email" placeholder="Tu Email" required>
          <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          <button type="submit" class="btn-primary">Solicitar Información</button>
        </form>
      `;
      break;

    case 'SOFIPO':
      info = `
        <h2>SOFIPO</h2>
        <p><strong>Sociedad Financiera Popular:</strong> Permite captar depósitos y otorgar créditos bajo regulación.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input type="hidden" name="interes" value="SOFIPO">
          <input type="text" name="name" placeholder="Tu Nombre" required>
          <input type="email" name="email" placeholder="Tu Email" required>
          <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          <button type="submit" class="btn-primary">Solicitar Información</button>
        </form>
      `;
      break;

    case 'IFPE':
      info = `
        <h2>IFPE (Fintech)</h2>
        <p><strong>Institución de Fondos de Pago Electrónico:</strong> Custodia y transfiere fondos digitales.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input type="hidden" name="interes" value="IFPE">
          <input type="text" name="name" placeholder="Tu Nombre" required>
          <input type="email" name="email" placeholder="Tu Email" required>
          <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          <button type="submit" class="btn-primary">Solicitar Información</button>
        </form>
      `;
      break;

    case 'UnionCredito':
      info = `
        <h2>Unión de Crédito</h2>
        <p><strong>Uniones cooperativas:</strong> Financiamiento colectivo para socios estratégicos.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input type="hidden" name="interes" value="Unión de Crédito">
          <input type="text" name="name" placeholder="Tu Nombre" required>
          <input type="email" name="email" placeholder="Tu Email" required>
          <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          <button type="submit" class="btn-primary">Solicitar Información</button>
        </form>
      `;
      break;

    case 'IFC':
      info = `
        <h2>IFC</h2>
        <p><strong>Institución Financiera Comunitaria:</strong> Impulso financiero para comunidades estratégicas.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input type="hidden" name="interes" value="IFC">
          <input type="text" name="name" placeholder="Tu Nombre" required>
          <input type="email" name="email" placeholder="Tu Email" required>
          <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          <button type="submit" class="btn-primary">Solicitar Información</button>
        </form>
      `;
      break;
  }

  content.innerHTML = info;
  modal.style.display = "flex";
}

// Función para cerrar modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = "none";
}

// Animaciones on scroll básicas (sin librerías externas)
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('aos-animate');
      }
    });
  });

  document.querySelectorAll('[data-aos]').forEach(section => {
    observer.observe(section);
  });
});

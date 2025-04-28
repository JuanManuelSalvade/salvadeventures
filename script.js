// Animación simple para ocultar el loader
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  loader.classList.add('fade-out');
});

// Modal para entidades
function openModal(entidad) {
  const modal = document.getElementById('modal');
  const content = document.getElementById('modal-content');

  let info = "";

  switch(entidad) {
    case 'SOFOM':
      info = `
        <h2>SOFOM</h2>
        <p><strong>Sociedad Financiera de Objeto Múltiple</strong><br>
        Entidad especializada en otorgamiento de créditos, arrendamientos financieros y factoraje.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input type="hidden" name="entidad" value="SOFOM">
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
        <p><strong>Sociedad Financiera Popular</strong><br>
        Entidad que capta depósitos y otorga créditos a sectores populares bajo regulación estricta.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input type="hidden" name="entidad" value="SOFIPO">
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
        <p><strong>Institución de Fondos de Pago Electrónico</strong><br>
        Entidad autorizada para custodia y transferencias de fondos digitales.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input type="hidden" name="entidad" value="IFPE">
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
        <p><strong>Asociaciones cooperativas</strong><br>
        Especializadas en financiamiento colectivo entre socios.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input type="hidden" name="entidad" value="Unión de Crédito">
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
        <p><strong>Institución Financiera Comunitaria</strong><br>
        Entidad enfocada en promover inclusión financiera en comunidades específicas.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input type="hidden" name="entidad" value="IFC">
          <input type="text" name="name" placeholder="Tu Nombre" required>
          <input type="email" name="email" placeholder="Tu Email" required>
          <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          <button type="submit" class="btn-primary">Solicitar Información</button>
        </form>
      `;
      break;
  }

  content.innerHTML = info;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}

// AOS (Animate On Scroll) simple para no cargar librerías pesadas
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  });

  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });
});

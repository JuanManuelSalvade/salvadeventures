// Script para manejar la apertura y cierre de modales de entidades

function openModal(entidad) {
  const modal = document.getElementById('modal');
  const content = document.getElementById('modal-content');

  let info = "";

  switch(entidad) {
    case 'SOFOM':
      info = `
        <h2>SOFOM</h2>
        <p><strong>Sociedad Financiera de Objeto Múltiple</strong><br>
        Entidad que otorga créditos, arrendamientos financieros y/o factoraje. No puede captar depósitos.</p>
        <ul>
          <li><strong>Ventajas:</strong> Flexibilidad operativa, proceso de autorización ágil.</li>
          <li><strong>Desventajas:</strong> No puede captar recursos del público.</li>
          <li><strong>Alcance:</strong> México.</li>
        </ul>
      `;
      break;

    case 'SOFIPO':
      info = `
        <h2>SOFIPO</h2>
        <p><strong>Sociedad Financiera Popular</strong><br>
        Entidad regulada que puede captar depósitos del público y otorgar créditos.</p>
        <ul>
          <li><strong>Ventajas:</strong> Captación, créditos, protección regulatoria.</li>
          <li><strong>Desventajas:</strong> Regulación estricta.</li>
          <li><strong>Alcance:</strong> Nacional.</li>
        </ul>
      `;
      break;

    case 'IFPE':
      info = `
        <h2>IFPE (Fintech)</h2>
        <p><strong>Institución de Fondos de Pago Electrónico</strong><br>
        Entidad que puede custodiar y transferir fondos electrónicos.</p>
        <ul>
          <li><strong>Ventajas:</strong> Innovación digital, operaciones inmediatas.</li>
          <li><strong>Desventajas:</strong> Limitado en oferta de crédito.</li>
          <li><strong>Alcance:</strong> Digital, nacional e internacional.</li>
        </ul>
      `;
      break;

    case 'UnionCredito':
      info = `
        <h2>Unión de Crédito</h2>
        <p><strong>Asociación de personas físicas y morales</strong><br>
        Para obtener financiamiento colectivo a tasas competitivas.</p>
        <ul>
          <li><strong>Ventajas:</strong> Crédito para socios, beneficios fiscales.</li>
          <li><strong>Desventajas:</strong> Restricciones operativas.</li>
          <li><strong>Alcance:</strong> México.</li>
        </ul>
      `;
      break;

    case 'IFC':
      info = `
        <h2>IFC</h2>
        <p><strong>Institución Financiera Comunitaria</strong><br>
        Entidad especializada en servicios financieros para zonas rurales o sectores vulnerables.</p>
        <ul>
          <li><strong>Ventajas:</strong> Impacto social, acceso a fondeo gubernamental.</li>
          <li><strong>Desventajas:</strong> Segmento limitado, alta supervisión.</li>
          <li><strong>Alcance:</strong> México.</li>
        </ul>
      `;
      break;

    case 'Otros':
      info = `
        <h2>Otros Tipos de Entidades</h2>
        <p>Contamos también con estructuras personalizadas para proyectos financieros especiales.</p>
        <ul>
          <li><strong>Ventajas:</strong> Adaptabilidad a necesidades específicas.</li>
          <li><strong>Desventajas:</strong> Evaluación caso por caso.</li>
          <li><strong>Alcance:</strong> Variable según estructura.</li>
        </ul>
      `;
      break;
  }

  content.innerHTML = info;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}

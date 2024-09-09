document.getElementById('tipoResiduos').addEventListener('change', function() {
    const subtipoResiduo = document.getElementById('subtipoResiduo');
    subtipoResiduo.innerHTML = '';
    let subcategorias = [];

    // Definir subcategorías según el tipo de residuo seleccionado
    switch (this.value) {
        case 'plastico':
            subcategorias = ['Botellas', 'Envases', 'Bolsas'];
            break;
        case 'papel':
            subcategorias = ['Periódicos', 'Cartón', 'Papel de oficina'];
            break;
        case 'vidrio':
            subcategorias = ['Botellas', 'Frascos', 'Cristalería'];
            break;
        case 'metales':
            subcategorias = ['Latas', 'Cables', 'Electrodomésticos pequeños'];
            break;
        case 'electronicos':
            subcategorias = ['Teléfonos móviles', 'Baterías', 'Componentes de computadoras'];
            break;
        default:
            subcategorias = [];
    }

    // manda la lista al html para mostrarlo en el subcategoria
    subcategorias.forEach(function(subcategoria) {
        const option = document.createElement('option');
        option.value = subcategoria.toLowerCase();
        option.textContent = subcategoria;
        subtipoResiduo.appendChild(option);
    });
});

document.getElementById('formularioReciclaje').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores de los campos del formulario
    const tipoResiduos = document.getElementById('tipoResiduos').value;
    const subtipoResiduo = document.getElementById('subtipoResiduo').value;
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const direccion = document.getElementById('direccion').value;
    const comentarios = document.getElementById('comentarios').value;

    // Verificar si todos los campos están llenos
    if (!tipoResiduos || !subtipoResiduo || !nombre || !email || !direccion || !comentarios) {
        alert('Por favor, complete todos los campos del formulario.');
    } else {
        alert('Solicitud enviada correctamente');
        // Aquí puedes agregar la lógica para enviar el formulario si se necesita
    }
});
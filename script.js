// Función para alternar (toggle) la visibilidad del menú en móvil
function toggleMenu() {
    const menuPrincipal = document.querySelector('.menu-principal');
    const iconoMenu = document.querySelector('.menu-movil-icono i');

    // Añade o quita la clase 'active' al menú
    menuPrincipal.classList.toggle('active');

    // Cambia el icono de menú a aspa (x) y viceversa
    if (menuPrincipal.classList.contains('active')) {
        iconoMenu.classList.remove('bx-menu');
        iconoMenu.classList.add('bx-x'); // Asumiendo que usas Boxicons para la x
    } else {
        iconoMenu.classList.remove('bx-x');
        iconoMenu.classList.add('bx-menu');
    }
}
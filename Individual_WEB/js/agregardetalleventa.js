$(document).ready(function() {
    $('#formulario').submit(function(e) {
        e.preventDefault();
        // Declaración de variables
        let opcionVenta = $('#venta option:selected').val();
        let opcionProducto = $('#producto option:selected').val();
        let cantidad = $('#cantidad').val();
        let valorSeleccionado = $('#producto option:selected').text();

        // Validación de campos vacíos
        if (opcionVenta == 0) {
            alert('Selecciona una opción de venta')
            $('#venta').addClass('input-color');
        } else if (opcionProducto == 0) {
            alert('Selecciona una opción de producto');
            $('#producto').addClass('input-color');
        } else if (cantidad == '') {
            alert('Ingresa una cantidad de productos');
            $('#cantidad').addClass('input-color').addClass('place');
        } else if (cantidad < 1 || cantidad > 1000) {
            alert('Ingresa un número entre 1 y 1000')
        } else if (opcionVenta != 0 && opcionProducto != 0 && cantidad != '') {

            let opcion = false; // Variable para verificar producto repetido

            // Ciclo forEach para iterar sobre el arreglo de valores
            $('#insertar-dato .td-producto').each(function(index, element) {
                if (valorSeleccionado == $(this).text()) { // this hace referencia al nombre del producto en la tabla
                    alert('No puedes repetir un mismo producto');
                    $('#producto').addClass('input-color');
                    opcion = true; // Si hay un producto repetido le asignamos valor true
                }
            });

            // Si no hubieron productos repetidos se podra entrar a este bloque
            if (opcion == false) {
                // Insertamos nuevo elemento a la tabla con los valores establecidos por el usuario
                $('#insertar-dato').append(`
                    <tr>
                        <td>${$('#venta option:selected').text()}</td>
                        <td class="td-producto">${valorSeleccionado}</td>
                        <td>${cantidad}</td>
                    </tr>
                `);
                // Quitamos estilo de input de alerta
                $('#venta').removeClass('input-color');
                $('#producto').removeClass('input-color');
                $('#cantidad').removeClass('input-color').addClass('place');
            }
        }
    });
});
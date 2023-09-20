## Funcionalidad de la aplicación.

Este mini proyecto de React con Vite es un generador de contraseñas aleatorias para practicar el desarrollo del testing end to end con Cypress.

## Comandos basicos.

Una vez clonado el repo debes instalar las dependencias, puedes hacerlo usando `npm i`. Una vez hecho esto puedes inicializar el proyecto con `npm run dev`, a demas de esto puedes correr los test explicados en la siguiente sección con el comando `npm run tests`

## Tests E2E

### [X] Generación de Contraseña Básica:

Verifica que al hacer clic en el botón "Generate the new password", se genere una contraseña y se muestre en la interfaz de usuario.

### Ajuste de Longitud de Contraseña:

Prueba el control deslizante para ajustar la longitud de la contraseña. Asegúrate de que la longitud de la contraseña generada coincida con el valor seleccionado en el control deslizante.

### [X] Selección de Caracteres Especiales:

Verifica que al seleccionar "Yes" en la opción de caracteres especiales, la contraseña generada contenga caracteres especiales, como se espera.

### [X]Deselección de Caracteres Especiales:

Verifica que al seleccionar "No" en la opción de caracteres especiales, la contraseña generada no contenga caracteres especiales.

### [X]Visualización de Contraseña Generada:

Asegúrate de que, después de generar una contraseña, se muestre correctamente en la interfaz de usuario.

### Validación de Longitud Mínima y Máxima:

Prueba la generación de contraseñas para asegurarte de que cumple con los límites mínimos y máximos permitidos (1 y 35, según el control deslizante).

### Cambio en la Opción de Caracteres Especiales:

Verifica que al cambiar la opción de caracteres especiales, la contraseña generada refleje la selección actual.

### Estado de Radio Buttons:

Asegúrate de que los radio buttons "Yes" y "No" funcionen correctamente y que solo uno de ellos pueda estar seleccionado a la vez.

### Interacción con el Control Deslizante:

Simula diferentes interacciones con el control deslizante, como moverlo a la izquierda y a la derecha, y verifica que la longitud de la contraseña cambie en consecuencia.

### Reseteo de Contraseña:

Verifica que, después de generar una contraseña, puedes hacer clic en el botón "Generate the new password" nuevamente para generar una nueva contraseña.

### Verificación de Valores Predeterminados:

Asegúrate de que, al cargar el componente, los valores predeterminados (como el valor del control deslizante y la opción seleccionada) sean los esperados.

### Manejo de Eventos y Estado:

Prueba cómo se manejan los eventos de cambio en el control deslizante y los radio buttons, y verifica que el estado se actualice correctamente.

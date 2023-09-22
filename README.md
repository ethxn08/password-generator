## Funcionalidad de la aplicación.

Este mini proyecto de React con Vite es un generador de contraseñas aleatorias para practicar el desarrollo del testing end to end con Cypress.

## Comandos basicos.

Una vez clonado el repo debes instalar las dependencias, puedes hacerlo usando `npm i`. Una vez hecho esto puedes inicializar el proyecto con `npm run dev`, a demas de esto puedes correr los test explicados en la siguiente sección con el comando `npm run tests`

## Tests E2E

### [X] Generación de Contraseña Básica:

Verifica que al hacer clic en el botón "Generate the new password", se genere una contraseña y se muestre en la interfaz de usuario.

### [X] Selección de Caracteres Especiales:

Verifica que al seleccionar "Yes" en la opción de caracteres especiales, la contraseña generada contenga caracteres especiales, como se espera.

### [X] Deselección de Caracteres Especiales:

Verifica que al seleccionar "No" en la opción de caracteres especiales, la contraseña generada no contenga caracteres especiales.

### [X] Visualización de Contraseña Generada:

Asegúrate de que, después de generar una contraseña, se muestre correctamente en la interfaz de usuario.

### [X] Interacción con el Control Deslizante:

Simula diferentes interacciones con el control deslizante, como moverlo a la izquierda y a la derecha, y verifica que la longitud de la contraseña cambie en consecuencia.

### [X] Manejo de Eventos y Estado:

Prueba cómo se manejan los eventos de cambio en el control deslizante y los radio buttons, y verifica que el estado se actualice correctamente.

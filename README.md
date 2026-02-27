# Parcial-I---Programaci-n-Computacional-IV-
Este es el repositorio para el parcial de programación computacional IV del computo I

Estudiantes:
Astrid Marcela Arguello Guzman - SMSS039224
Karen Beatriz Jandres Chavez - SMSS013424
Yessica Raquel Reyes Juarez - SMSS042624

1 – ¿Qué valor agregado tiene el uso de webcomponents a su proyecto? R// El valor agregado de usar WebComponents es la encapsulación y reutilización. Al empaquetar el formulario de ventas en una etiqueta personalizada (<calculadora-ventas>), aislamos su diseño y lógica del resto de la página. Esto evita conflictos de estilos (CSS) y permite que cualquier otro desarrollador use el cotizador en diferentes secciones del sitio simplemente copiando la etiqueta, como si fuera un componente de Lego.

2 – ¿De qué forma manipularon los datos sin recargar la página? R// Para manipular los datos sin recargar la página, utilizamos JavaScript orientado a eventos. En lugar de usar el comportamiento por defecto de un formulario que envía datos al servidor y refresca la vista, capturamos el evento click del botón. Mediante el DOM, extraemos los valores del input y el select, realizamos el cálculo aritmético en la memoria del navegador y actualizamos el contenido del div de resultados dinámicamente.

3 - ¿De qué forma validaron las entradas de datos? Expliquen brevemente R// La validación de entradas se realizó mediante una estructura condicional if en JavaScript. Antes de procesar el cálculo, el programa verifica tres condiciones críticas: que el selector de prenda no esté vacío, que el campo de cantidad contenga un número y que dicho número sea mayor a cero. Si alguna condición falla, se detiene la ejecución y se muestra un mensaje de error visual al usuario (manipulando la propiedad display de CSS), impidiendo cálculos erróneos.

4 - ¿Cómo manejaría la escalabilidad futura en su página? R// La escalabilidad futura se manejaría separando la lógica de negocios del componente visual. Podríamos conectar el WebComponent a una API externa (usando fetch en JS) para obtener precios de una base de datos en tiempo real en lugar de tenerlos fijos. Además, al estar basado en módulos, podríamos añadir nuevas funciones como "Cupones de Descuento" o "Historial de Cotizaciones" creando componentes adicionales que se comuniquen entre sí sin desordenar el código principal.

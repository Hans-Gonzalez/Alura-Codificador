# Proyecto de Encriptación de Texto

Este proyecto fue desarrollado durante la primera parte del programa Alura One, impartido por Alura y Oracle. El objetivo principal de este proyecto es crear una aplicación web que te permita encriptar y desencriptar textos, brindándote la capacidad de intercambiar mensajes secretos con otras personas que conozcan el método de encriptación utilizado.

## Descripción del Desafío

- La aplicación tiene la capacidad de encriptar y desencriptar textos.
- La encriptación se realiza siguiendo las siguientes reglas de reemplazo:
  - La letra "e" se convierte en "enter".
  - La letra "i" se convierte en "imes".
  - La letra "a" se convierte en "ai".
  - La letra "o" se convierte en "ober".
  - La letra "u" se convierte en "ufat".
- La aplicación funciona exclusivamente con letras minúsculas y no utiliza letras con acentos ni caracteres especiales.
- Proporciona la funcionalidad para convertir una palabra al texto encriptado y también para convertir el texto encriptado a su versión original.
- La interfaz de la página web incluye campos de entrada de texto donde puedes ingresar el texto a encriptar o desencriptar, y el usuario puede seleccionar entre ambas opciones.
- El resultado del proceso de encriptación o desencriptación se muestra en pantalla.
- Como característica adicional, se ha incluido un botón que permite copiar el texto encriptado o desencriptado al portapapeles, lo que facilita su transferencia sin tener que recurrir al uso de atajos de teclado o las opciones de copiar de los menús.

## Instrucciones y Uso

Para utilizar la aplicación, sigue estos pasos:

1. Ingresa al sitio web de la aplicación.
2. En el campo de entrada de texto, introduce la palabra o texto que deseas encriptar o desencriptar.
3. Selecciona la opción correspondiente para encriptar o desencriptar el texto.
4. Haz clic en el botón "Encriptar" o "Desencriptar", según sea necesario.
5. El resultado del proceso se mostrará en pantalla, ya sea el texto encriptado o desencriptado.
6. Si deseas copiar el resultado al portapapeles, haz clic en el botón "Copiar". El texto se copiará automáticamente y estará listo para pegarlo en cualquier otro lugar.

## Caracteristicas extra.

Durante el desarrollo del proyecto, se implementaron algunas funcionalidades adicionales que no estaban contempladas en los requerimientos iniciales. A continuación, se detallan estas mejoras:

**Alerta por Campo de Entrada Vacío:** Se agregó una alerta que se activa cuando el campo de entrada está vacío y el usuario intenta encriptar o desencriptar el texto de todas formas. Esta funcionalidad ayuda a evitar errores y garantiza que el usuario proporcione un texto válido antes de ejecutar la acción correspondiente.

**Alerta por Desencriptación sin Contenido:**  Se agregó una función de alerta que se activa cuando el texto ingresado para desencriptar no contiene ningún contenido válido. Esta alerta proporciona una retroalimentación clara al usuario, indicando que no hay texto encriptado para desencriptar. De esta manera, se evita la ejecución innecesaria de la acción de desencriptación cuando no hay datos válidos disponibles.

**Mínima Dependencia de Información Externa:** El proyecto fue desarrollado utilizando un enfoque centrado en los contenidos enseñados hasta el momento en el programa Alura One. Se hizo un esfuerzo por minimizar la dependencia de información externa y utilizar principalmente los conocimientos adquiridos durante el curso. Esto permitió consolidar y aplicar de manera efectiva los conceptos aprendidos hasta el momento.
 
 
